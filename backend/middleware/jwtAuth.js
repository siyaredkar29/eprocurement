
const jwt = require("jsonwebtoken")


const verifyJWT  = async (request,response,next) => {
    try {
console.log("entered");

        const authString = request.headers.authorization
        const b =authString.split("Bearer ")
        console.log("hello");
        
        const token = b[1];
        const verification = jwt.verify(token,process.env.JWT_SECRET_KEY)


        console.log("user is authenticated");
        request.user = verification

        return next()


        
        
    } catch (error) {

        console.log("error:",error.message);
        return response.sendStatus(403)
        
        
    }
}


module.exports = verifyJWT