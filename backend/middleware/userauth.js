import jwt from "jsonwebtoken";

const userauth = async (req,res, next) => {
    const {token} = req.cookies;

    if(!token){
        return res.json({success: false, message: "not authraoized login again"});
    }

    try{

        const tokenDecode = jwt.verify(token,process.env.SECRET_W);

        if(tokenDecode.id){
            req.body.userid = tokenDecode.id;
        }else{
            return res.json({success: false, message: "not authraoized login again"});
        }

        next();

    }catch (error){
        return res.json({success: false, message: error.message});
    }
}

export default userauth;