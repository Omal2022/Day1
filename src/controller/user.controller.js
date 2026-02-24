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

const LoginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        const findUser = await User.findOne({ username: username.toLowerCase() });

        if (!findUser) {
            return res.status(404).json({ message: "User not found" });
        }

        //  Declare isMatch with const
        const isMatch = await findUser.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        return res.status(200).json({
            message: "Successfully logged in",
            user: {
                id: findUser._id,
                email: findUser.email,
                username: findUser.username
            }
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const LogoutUser = async (req, res) => {
    try {
        const { email } = req.body

        const logout = await User.findOne({ email })

        if (!logout) {
            return res.status(404).json({ message: "User not found" })
        }

        res.status(200).json({ message: "Logout Successful" })

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export { RegisterUser, LoginUser , LogoutUser }