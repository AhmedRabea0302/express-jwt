const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors/index');

const login = async (req, res) => {
    const { username, password } = req.body;
    if(!username || !password) {
        throw new BadRequestError('Please Provide Username And Password');
    }
    const id = new Date().getDate();
    const token = jwt.sign({id, username}, process.env.JWT_SERCRET, {  expiresIn: '30d'});
    res.status(200).json({ msg: 'User Created!', token });
} 

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    return res.status(200).json({
        msg: `Hello ${ req.user.username }!`,
        secret: `Her is you secret Number to authenticate: ${ luckyNumber }`
    });
}

module.exports = { login, dashboard };