//http://www.idpf.org/epub/20/spec/FontManglingSpec.html
const fs = require('fs');
const crypto = require('crypto')

const uuid = 'urn:uuid:5050d259-338c-4cf7-895c-073c4de923db'
const file = 'FranklinGothic-Demi.TTF';
const keyData = sha1(uuid);

console.log(keyData);

fs.readFile(file, function (err, data) {
    if (err) {
        console.error(err);
    } else {
        const contentBuffer = Buffer.alloc(data.length);

        console.log(data)
        
        let needToDecode = 1040;
        if (data.length < needToDecode)
            needToDecode = data.length;

        for (let i = 0; i < needToDecode; i++) {
            contentBuffer.writeUInt8(getByteOfKey(keyData, i) ^ data[i], i);
        }

        data.copy(contentBuffer, 1040, 1040);
        console.log(contentBuffer)
        fs.writeFileSync("2.ttf",contentBuffer);
    }
});

function sha1(data) {
    return crypto.createHash("sha1").update(data, "binary").digest();
}

function getByteOfKey(key, offset){
    if(offset > key.length - 1){
        offset = offset - Math.floor(offset/ key.length) * key.length;
    }
    return key[offset];
}