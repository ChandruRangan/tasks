const jwt = require('jsonwebtoken');
const Employee = require('../models/emp.model');

const veifyToken = async (token) => {
    try {
        // console.log('token validations', token)
        var decoded = await jwt.verify(token, process.env.TOKEN_SECRET);
        // console.log(decoded)
        return decoded;
    }
    catch(err) {
        console.log(err)
        return null;
    }
}

module.exports = {
    authendicate: async (req, res, next) => {
        let {authorization} = req.headers;
        if(!authorization) {
            authorization = req.query.authorization;
        }
        let token = authorization && typeof authorization === 'string' ? authorization : null;
        if(!token) {
            return res.status(401).send('Unauthorized user')
        }
        token =  authorization.replace('Basic ', '');
        token =  authorization.replace('Bearer ', '');
        console.log(token, req.headers)
        let tokenData = await veifyToken(token);
        let user = await Employee.findOne({email: tokenData.email});
        if(user) {
            req.user = user;
            req.authorization = authorization;
            return next();
        }
        return res.status(401).send('user not found');
    }
}