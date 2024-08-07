import express from "express"
import authRoutes from "./routes/authRoutes.js"
import clothingRoutes from "./routes/clothingRoutes.js"
import cookieParser from "cookie-parser";


const app = express();


app.use(express.json());
app.use(cookieParser());


app.use("/backend/auth", authRoutes)
app.use("/backend/clothing", clothingRoutes)

app.listen(8800, () => {
    console.log("Connected!")
})