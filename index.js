//index.js
const express = require('express');
const fileController = require('./src/controller');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Dosya yükleme işlemi için uploadFile fonksiyonunu belirtiyoruz
app.post('/upload-file', fileController.uploadFile);

var http = require('http') // http modülünü ekledik
var server =http.Server(app) // server değişkenine app'i atadık

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

app.listen(port, host, function() {
    console.log(`Server is up at ${port}`);
});
