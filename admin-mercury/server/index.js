const express = require('express');
const bodyParser = require('body-parser');
const App = express();

App.use(bodyParser.json());

const userExist = {
    login: 'admin',
    pass: 'admin'
};

let lastYear = [
    ["Websites",475],["Logo", 380],["Social Media",327],["Adwords", 100], ["E-Commerce", 147]];

let thisWeek = [
    ["Websites",137],["Logo", 456],["Social Media",73],["Adwords", 530], ["E-Commerce", 156]];


//admin login
App.post('/api/user', (req, res) => {
    const login = req.body.login;
    const pass = req.body.pass;

    if (userExist.login === login && userExist.pass === pass) {
        return res.json({
            userExist: 'exist'
        })
    }
    else {
        return res.json({
            userExist: 'not exists'
        })
    }
});


//Chart
App.get('/api/sales/year', (req, res) => {
    return res.json(
        lastYear
    )
});

App.get('/api/sales/week', (req, res) => {
    return res.json(
        thisWeek
    )
});




App.listen(4000, () => {
    console.log('server is started');
});
