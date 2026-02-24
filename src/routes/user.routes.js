import { Router } from "express";
import { LogoutUser, RegisterUser } from "../controller/user.controller.js"
import { LoginUser } from "../controller/user.controller.js";

const router = Router()


router.post('/register', RegisterUser)
router.post('/login', LoginUser)
router.post('/logout', LogoutUser)


export default router


