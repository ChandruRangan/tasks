const { expressjwt } = require("express-jwt");

exports.isSignedIn = expressjwt({
    secret:8979266209,
    userProperty:"auth",
    algorithms:['HS256']
})