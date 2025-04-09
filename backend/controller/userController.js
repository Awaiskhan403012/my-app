import userModel  from "../models/userModel.js";

export const getuserData = async(req,res) => {
    try{
        const {userid} = req.body;

        const user = await userModel.findById(userid);
        if(!user){
            return res.json({ success: false, message:"user not found" });
        }
        res.json({
            success:true,
            userData: {
                name: user.name,
                isAccountverified: user.isAcountVar
            }

        })

    }catch(error){
        return res.json({ success: false, message: error.message });
    }
} 