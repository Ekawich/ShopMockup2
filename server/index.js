const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const userRouter = require('./routes/userRoutes')

const port = 3306
const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})