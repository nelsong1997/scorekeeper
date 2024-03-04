const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const port = 1109

const app = express()

app.use(express.static(__dirname + '/public'))

const jsonParser = bodyParser.json()

app.post('/save', jsonParser, function(req, res) {
    fs.writeFileSync('./text/p1name.txt', req.body.p1name)
    fs.writeFileSync('./text/p1score.txt', req.body.p1score)
    fs.writeFileSync('./text/p2name.txt', req.body.p2name)
    fs.writeFileSync('./text/p2score.txt', req.body.p2score)
    fs.writeFileSync('./text/tourneyround.txt', req.body.tourneyRound)
    fs.writeFileSync('./text/tourneyname.txt', req.body.tourneyName)

    res.send({"success": true})
})

app.listen(port)
console.log(`http://localhost:${port}/`)