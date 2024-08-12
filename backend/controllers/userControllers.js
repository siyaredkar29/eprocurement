const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function generateRandomPassword() {
    const minLength = 6;
    const maxLength = 10;
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  }


exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    if (!email || !password) {
      return res.status(400).json({ error: "required data field is empty" });
    }

    //user already exist
    const userExist = await User.findOne({ email });

    const result = await bcrypt.compare(password, userExist?.password);
    if (!userExist || !result) {
      return res.status(404).json({ error: "Invalid credentials" });
    }

    //generate token
    const token = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "2d",
    });

    res.status(200).json({ message: "LOGIN Successfull", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Signin failed! check if user registered" });
  }
};

exports.googleSignIn = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    console.log(email);

    if (!email) {
      return res.status(400).json({ error: "required data field is empty" });
    }

    //user already exist
    let userExist = await User.findOne({ email });
    
    if (!userExist) {
        const password = generateRandomPassword();
        const salt = Number(process.env.SALT);
        const hashedPassword = await bcrypt.hash(password, salt);
      const user = new User({ email, firstName, lastName ,password:hashedPassword});
      await user.save();
      userExist=user;
    }
    
    const token = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "2d",
    });
    res.status(200).json({ message: "LOGIN Successfull", token });

    //generate token
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Google Login Error" });
  }
};

exports.signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    console.log(firstName, lastName, email, password);
    //data not provided
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: "required data field is empty" });
    }

    //user already exist
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ error: "user already registered" });
    }
    const salt = Number(process.env.SALT);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);

    const user = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });
    await user.save();
    res.json({ message: "Registered Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Signup failed... please try again later" });
  }
};

exports.isAuth = (req, res) => {
  try {
    console.log(req.user);
    res.status(200).json({ message: "TOKEN FOUND" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Authentication Failed" });
  }
};