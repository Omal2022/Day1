import { Post } from "../models/post.models.js";

// Create a post 

const createPost = async (req, res) => {
    try {

        const { name, description, age } = req.body

        if (!name || !description || !age) {
            res.status(400).json({ message: "Invalid flied, all flied are required" })
        }

        const postCreated = await Post.create({ name, description, age })

        if (postCreated) {
            res.status(200).json({ message: "Post has been created", Post: postCreated })
        }

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

// Read all post

const getAllPost = async (req, res) => {
    try {

        const getPost = await Post.find()

        res.status(200).json({ data: getPost })

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const updatePost = async (req, res) => {
    try {


        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: "No data provided for update" })
        }

        const updatePost = await Post.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })

        if (!updatePost) {
            return res.status(404).json({ message: "No post found", data: updatePost })
        }

        res.status(200).json({ message: "Post updated successfully", data: updatePost })

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const deletePost = async (req, res) => {

    try {

        const deleted = await Post.findByIdAndDelete({ _id: req.params.id })

        if (!deleted) {
            return res.status(404).json({ message: "Post not found", data: deleted })
        }

        res.status(200).json({ messgae: "Post successfully deleted", data: deleted })

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }

}

export { createPost, getAllPost, updatePost , deletePost}