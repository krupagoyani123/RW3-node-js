const jwt = require('jsonwebtoken');

const tokenVerify = (req,res,next) => {
    try {
        let token = req.headers.authorization;

        if(!token){
            return res.status(400).send({
                success : false,
                message : "Token not found",
            });
        }

        let newToken = token.slice(7);
        jwt.verify(newToken,'krupa',(err,decodeToken) => {
            if(err){
                return res.status(400).send({
                    success : false,
                    message : "Enter valid token",
                });
            }
            req.user = decodeToken.paylod ;
            return next();
        });

        } catch (err) {
            return res.status(501).send({
                success : false,
                message : err
            });
        }
}

const Admin = async (req,res,next) => {
    try { 
        if(req.user.role != "admin"){
            return res.status(400).send({
                success : false,
                message : "Only admin can access",
            });
        }
        return next();
    } catch (err) {
        return res.status(501).send({
            success : false,
            message : err.message
        });
    }
}


module.exports = {
    tokenVerify,Admin
}