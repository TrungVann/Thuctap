import express from 'express'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.route.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

//Router
app.use("/api/auth", authRoutes)

//Khởi tạo server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})