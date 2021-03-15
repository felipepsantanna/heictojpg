const { promisify } = require('util');
const fs = require('fs');
const convert = require('heic-convert');

export default async function index(request, response) {
    
  
    const inputBuffer = await promisify(fs.readFile)(request.body.url);
    const outputBuffer = await convert({
        buffer: inputBuffer, // the HEIC file buffer
        format: 'JPEG', // output format
    });
    const writeFilePromisificado = promisify(fs.writeFile);
    const download = './public/convertidos/1.jpg';
    writeFilePromisificado(download, outputBuffer)
        .then(() => { response.status(200).send({ download }) })
        .catch(err => { response.status(200).send({ err }) });
   
}