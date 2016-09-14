var request = require('request-promise');
var base64 = require('base-64');
var _ = require('underscore');

function index(req, res) {
  request.post({
    url: "https://api.test.sabre.com/v2/auth/token",
    headers: {
      'Authorization': 'Basic ' + base64.encode(process.env.SABRE_CLIENT_ID + ':' + process.env.SABRE_CLIENT_SECRET),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  })
  .then(function(response) {
    return request.get({
      url: "https://api.test.sabre.com/v1/lists/supported/shop/themes/" + req.query.theme.toUpperCase(),
      headers: {
        'Authorization': "Bearer " + response.access_token
      },
      json: true
    });
  })
  .then(function(results) {
    destinations = results.Destinations.map(function(destination) {
      return destination.Destination;
    });

    return request.get({
      url: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/GB/GBP/en-GB/LHR/anywhere/" + req.query.departureDate + "/" + req.query.returnDate,
      qs: { apiKey: process.env.SKYSCANNER_API_KEY },
      json: true
    })
    .then(function(response) {
      var quotes = response.Quotes;
      var places = response.Places;
      var carriers = response.Carriers;

      quotes = quotes.map(function(quote) {
        quote.OutboundLeg.Carriers = quote.OutboundLeg.CarrierIds.map(function(carrierId) {
          return _.findWhere(carriers, { CarrierId: carrierId });
        });

        quote.OutboundLeg.Origin = _.findWhere(places, { PlaceId: quote.OutboundLeg.OriginId });

        quote.OutboundLeg.Destination = _.findWhere(places, { PlaceId: quote.OutboundLeg.DestinationId });

        quote.InboundLeg.Carriers = quote.InboundLeg.CarrierIds.map(function(carrierId) {
          return _.findWhere(carriers, { CarrierId: carrierId });
        });

        quote.InboundLeg.Origin = _.findWhere(places, { PlaceId: quote.InboundLeg.OriginId });

        quote.InboundLeg.Destination = _.findWhere(places, { PlaceId: quote.InboundLeg.DestinationId });
        // deleting unneccesary informations
        delete quote.OutboundLeg.CarrierIds;
        delete quote.OutboundLeg.OriginId;
        delete quote.OutboundLeg.DestinationId;

        delete quote.InboundLeg.CarrierIds;
        delete quote.InboundLeg.OriginId;
        delete quote.InboundLeg.DestinationId;

        return quote;
      }).filter(function(quote) {
        return destinations.indexOf(quote.OutboundLeg.Destination.IataCode) !== -1 && quote.MinPrice <= req.query.budget;
      });
      res.status(200).json(quotes);
    });
  })
  .catch(function(err) {
    console.log(err);
    res.sendStatus(500);
  });
}

module.exports = {
  index: index
}