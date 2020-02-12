const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()


// automatically parses incoming json to an object
app.use(express.json())
// Loading all user routes
app.use(userRouter)
// Loading all task routes
app.use(taskRouter)

module.exports = app