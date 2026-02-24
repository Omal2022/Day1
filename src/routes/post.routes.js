import { Router } from "express";
import { createPost, getAllPost, updatePost, deletePost } from "../controller/post.controller.js";

const router = Router()

router.post("/create", createPost)
router.get("/getPost", getAllPost)
router.patch("/update/:id", updatePost)
router.delete("/delete/:id", deletePost)

export default router