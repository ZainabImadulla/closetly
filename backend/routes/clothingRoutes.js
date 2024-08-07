import express from "express"
import { getAllClothing, postClothing } from "../controllers/clothingController.js"

const router = express.Router()

router.get("/all", getAllClothing)
router.post("/add", postClothing)


export default router