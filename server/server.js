import express from 'express';

const app = express();

app.get('/api/whoami', (req, res) => {
    res.json({ipaddress: req.ip, language: req.headers['accept-language'], software: req.headers['user-agent']});
})

app.listen(3100, 'localhost', () => {
    console.log('Port 3100 is now active!');
});