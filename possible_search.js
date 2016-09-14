User.find({theme: req.query.theme, budget: {$lte: req.query.budget }, origin: req.query.origin })

Angular
Users.query({ theme: "String", budget: 600, origin: "LHR" })