import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import mailsender from "../config/nodemailer.js";




export const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.json({ success: false, message: "please enter details" });
    }

    try {
        const existingEmail = await userModel.findOne({ email });
        if (existingEmail) {
            return res.json({ success: false, message: "Email Already Exist" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new userModel({ name, email, password: hashedPassword });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.SECRET_W, { expiresIn: "7d" });
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        //sending wellcome email

        const mailOptions = {
            from: "awa4003012@gmail.com",
            to: email,
            subject: "Wellcome to Acpkhi",
            text: "hey wellcone",
            html: `<h1 style="color:red">Wellcome to ACPKHI</h1><br>
            <p>Hey wellcome your Acpkhi account was created with email id: ${email}</P>
            `,
        }
        await mailsender.sendMail(mailOptions);
        return res.json({ success: true });


    } catch (error) {
        return res.json({ success: false, message: error.message });
    }

}

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({ success: false, message: "no details" });
    }

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User Already Exist" });
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if (!checkPassword) {
            return res.json({ success: false, message: "Password is Incorrect" });
        }

        const token = jwt.sign({ id: user._id }, process.env.SECRET_W, { expiresIn: "7d" });
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        return res.json({ success: true });


    } catch (error) {
        return res.json({ success: false, message: error.message });
    }


}

export const logout = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        });

        return res.json({ success: true, message: "logged out" });

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

export const sendVerificationOtp = async (req, res) => {

    try {
        const { userid } = req.body;

        const user = await userModel.findById(userid);

        if (user.isAcountVar) {
            return res.json({ success: false, message: "Account already verified" });
        }

        const otp = String(Math.floor(100000 + Math.random() * 900000));

        user.verifyOtp = otp;
        user.otpExpireAt = Date.now() + 24 * 60 * 60 * 1000;

        await user.save();

        const mailOptions = {
            from: "awa4003012@gmail.com",
            to: user.email,
            subject: "Account verification otp",
            text: "hey wellcone",
            html: `<h1 style="color:red">Your otp is</h1><br>
            <p>verifiy Your account usong this: <h2>${otp}</h2>Otp</P>
            `,
        }

        await mailsender.sendMail(mailOptions);

        return res.json({ success: true, message: "verification otp sent on your email" });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

export const verifyEmail = async (req, res) => {
    const { userid, otp } = req.body;

    if (!userid || !otp) {
        return res.json({ success: false, message: "details missing" });
    }
    try {
        const user = await userModel.findById(userid);

        if (!user) {
            return res.json({ success: false, message: "user not found" });
        }

        if (user.verifyOtp === '' || user.verifyOtp !== otp) {
            return res.json({ success: false, message: "Invalid otp" });
        }

        if (user.otpExpireAt < Date.now()) {
            return res.json({ success: false, message: "Otp is Expired" });
        }

        user.isAcountVar = true;
        user.verifyOtp = '';
        user.otpExpireAt = 0;

        await user.save();

        return res.json({ success: true, message: "email successfully verified" });



    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

export const isAuthenticated = async (req, res) => {
    try {
        return res.json({ success: true })
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

export const sendRestOtp = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.json({ success: false, message: "Email is required" });
    }

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        const otp = String(Math.floor(100000 + Math.random() * 900000));

        user.resetOtp = otp;
        user.resetOtpExp = Date.now() + 15 * 60 * 1000;

        await user.save();

        const mailOptions = {
            from: "awa4003012@gmail.com",
            to: user.email,
            subject: "Account verification otp",
            text: "hey wellcone",
            html: `<h1 style="color:red">Your otp is</h1><br>
            <p>verifiy Your account usong this: <h2>${otp}</h2>Otp</P>
            `,
        }

        await mailsender.sendMail(mailOptions);

        res.json({ success: true, message: "Reset otp sent to your Email" });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

export const resetPassword = async (req, res) => {
    const { email, otp, newpassword } = req.body;

    if (!email || !otp || !newpassword) {
        return res.json({ success: false, message: "Email otp and new password is required" });
    }

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "user not found" });
        }

        if (user.resetOtp === "" || user.resetOtp !== otp) {
            return res.json({ success: false, message: "Invalid otp" });
        }

        if (user.resetOtpExp < Date.now()) {
            return res.json({ success: false, message: "otp Expired" });
        }

        const newhashedPassword = await bcrypt.hash(newpassword, 10);

        user.password = newhashedPassword;
        user.resetOtp = "";
        user.resetOtpExp = 0;

        await user.save();

        return res.json({ success: true, message: "Your password was succefully changed" });

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}



