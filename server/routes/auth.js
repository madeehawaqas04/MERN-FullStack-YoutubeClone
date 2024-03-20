import express from "express";
import { googleAuth, logout, signin, signup } from "../controllers/auth.js";

const router = express.Router();

//CREATE A USER
router.post("/signup", signup)

//SIGN IN
router.post("/signin", signin)

//logout
router.post("/logout",logout);

//GOOGLE AUTH
router.post("/google", googleAuth)

export default router;
