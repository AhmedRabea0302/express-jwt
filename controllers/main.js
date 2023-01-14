const jwt = require('jsonwebtoken');
const CustomApiError = require('../errors/custom-error');

const login = async (req, res) => {
    const { username, password } = req.body;
    if(!username || !password) {
        throw new CustomApiError('Please Provide Username And Password', 400);
    }
    const id = new Date().getDate();
    const token = jwt.sign({id, username}, process.env.JWT_SERCRET, {  expiresIn: '30d'});
    res.status(200).json({ msg: 'User Created!', token });
} 

const register = async (req, res) => {
    res.send('Register');
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    return res.status(200).json({
        msg: 'Hello Fadloovich!',
        secret: `Her is you secret Number to authenticate: ${ luckyNumber }`
    })
}

module.exports = { login, register, dashboard };