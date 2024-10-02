import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signUp = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exist" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const createdUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });
    await createdUser.save();

    res.status(201).json({
      message: "user registered successfully",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(400).json({ message: "something went wrong" });
  }
};

export const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const isMatchedPass = await bcryptjs.compare(password, user.password);
    if (!user || !isMatchedPass) {
      return res
        .status(400)
        .json({ message: "password and email is not found" });
    } else {
      await res.status(200).json({
        message: "Login successfully",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("error in login controller", error.message);
    res.status(500).json({ message: "SOmething went wrong" });
  }
};
