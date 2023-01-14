const jwt = require('jsonwebtoken');
const UnauthenticatedRequestError = require('../errors/index');


const authenticationMiddleware = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedRequestError('Invalid Token');
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SERCRET);
        const { id, username } = decoded;
        req.user = { id, username };
        next();
    } catch (error) {
        throw new UnauthenticatedRequestError('Not Authorized to access this route!');
    }
}

module.exports = authenticationMiddleware;