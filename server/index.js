const express = require('express')
const cors = require('cors')
const db = require('./db')
const userRouter = require('./routes/userRoutes')


const app = express()
app.use(cors())
app.use(express.json())


app.use('/api/users', userRouter)

const port = 3306
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})