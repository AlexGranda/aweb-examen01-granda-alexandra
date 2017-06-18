const express = require('express')
const app = express()
const fs = require('fs');



//Ruta bienvenido

app.get('/bienvenido', function (req, res) {
    res.send('Hello World!')
})

//Ruta info personal

app.post('/Informacion', function (req, res) {
    fs.readFile('Informacion.txt', 'utf-8', (err,data) => {
        if(err) throw (err)
        console.log(data)
    res.send(data)
    })
})

//Ruta facultad de sistemas

app.use('/facultaddesistemas', express.static('public'));

//ruta cabeceras

app.post('/cabeceras', function (req, res) {
    fecha = new Date();
    res.append('fecha', fecha); //fecha, fechaServidor
    res.append('metodo', req.method); //metodo, metodoDelRequest
    res.append('direccion-ip', req.ip); //ip, ip del request
    res.append('url-original', req.originalUrl)//url/original, url-del-request
    res.append('protocolo', req.protocol)//protocolo, protocol
    res.send()
})

//ruta SetCookies

app.get('/setcookie', function (req, res) {
    res.cookie('granda', 21)
    res.send('Cookie seteada')
})

//ruta ClearCookie

app.get('/clearcookie', function (req, res) {
    res.clearCookie("granda")
    res.send('Cookie eliminada')
})

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

