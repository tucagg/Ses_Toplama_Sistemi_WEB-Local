//controller.js
const formidable = require('formidable');
const { uploadFileTo } = require('./service');

async function uploadFile(req, res) {
    const formData = await readFormData(req); // formData'yı oku
    try {
        await uploadFileTo(formData.file); // formData.file olarak geç
        res.send('YÜKLENDİ');
    } catch (ex) {
        console.log(ex);
        res.send('HATA');
    }
}

async function readFormData(req) {
    return new Promise(resolve => {
        const dataObj = {};
        const form = new formidable.IncomingForm();
        
        form.parse(req);

        form.on('file', (name, file) => {
            dataObj.name = name;
            dataObj.file = file;
        });

        form.on('end', () => {
            resolve(dataObj);
        });
    });
}

module.exports = {
    uploadFile
}
