const login = async (req, res) => {
    res.send('Fake Login');
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

module.exports = { login, register };