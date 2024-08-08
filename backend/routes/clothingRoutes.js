import express from "express"
import { getAllClothing, getBottoms, getShoes, getTops, postClothing } from "../controllers/clothingController.js"

const router = express.Router()

router.get("/all", getAllClothing)
router.post("/add", postClothing)
router.get("/tops", getTops)
router.get("/bottoms", getBottoms)
router.get("/shoes", getShoes)


export default router