const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const { model } = require("mongoose")

const app = express()

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true

    }
))

app.use(express.json({limit:"1kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


module.exports = app
// app.get("/demo",(req,res)=>{
//     res.send("deta demo")
// })

// app.listen(process.env.PORT, () => {
//     console.log(`🚀 Server is running on http://localhost:${process.env.PORT}`);
// });