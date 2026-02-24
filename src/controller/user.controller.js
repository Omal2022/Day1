import { User } from "../models/user.model.js";

const RegisterUser = async (req, res) => {
    try {

        const { username, email, password } = req.body;

        // Validation - if the user is asked to fill the username ... and not time type any - we use an if statemnt to check 

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All field are required" })
        }

        
        // check if user exist in the database
        const userExist = await User.findOne({ email: email.toLowerCase() })
        
        if (userExist) {
            return res.status(400).json({ message: "User already exist" })
        }

        // create new user

        const newUser = await User.create({ username, email: email.toLowerCase(), password })
        
        if (username && email && password) {
            return res.status(201).json({
                message: "User registered successfully",
                user: { _id: newUser._id, email: newUser.email, username: newUser.username }
            })

        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" })
        
    }
}


export { RegisterUser }