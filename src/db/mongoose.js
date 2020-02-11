const mongoose = require('mongoose')

// Mongoose connects to DB
mongoose.connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})