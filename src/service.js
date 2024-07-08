//service.js
const fs = require('fs');

function createDirIfNotExists() {
    const dir = `${__dirname}/uploads`;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    return dir;
}

async function uploadFileTo(fileObj) { //fileObj is the fileObj is the object that contains the file path and the original filename.
    try {
        const dir = createDirIfNotExists(); // Dosya yolu oluştur
        const fileStream = fs.createReadStream(fileObj.filepath); // Dosyayı oku mesela /tmp/abc.wav
        //wav uzantılı dosya oluştur, çünkü okunan dosya wav formatında olacak
        //okunan dosyayı uploads klasörüne yaz
        const writeStream = fs.createWriteStream(`${dir}/${fileObj.originalFilename}.wav`);
        fileStream.pipe(writeStream);
        return new Promise((resolve, reject) => {
            writeStream.on('finish', () => {
                resolve();
            });
            writeStream.on('error', (err) => {
                reject(err);
            });
        });
    } catch (ex) {
        console.log(ex);
        throw ex;
    }
}

module.exports = {
    uploadFileTo
}
