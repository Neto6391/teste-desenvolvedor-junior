import express from "express";

const router = express.Router();

//import Functions of Controller
import { getCharacters } from "../controllers/characterController";

/* GET home page from export function in Controller */
router.get("/", getCharacters);

export default router;
