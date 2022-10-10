import express from 'express'
import cors from 'cors'
import { pingRouter } from './router/PingRouter'
import { userRouter } from './router/userRouter'

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Server is running on port ${process.env.PORT || 3003}`)
})

app.use("/ping", pingRouter)
app.use("/users", userRouter)