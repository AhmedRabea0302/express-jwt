const jwt = require('jsonwebtoken');
const CustomApiError = require('../errors/custom-error');

const authenticationMiddleware = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new CustomApiError('Invalid Token', 401);
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SERCRET);
        const { id, username } = decoded;
        req.user = { id, username };
        next();
    } catch (error) {
        throw new CustomApiError('Not Authorized to access this route!', 401);
    }
}

module.exports = authenticationMiddleware;