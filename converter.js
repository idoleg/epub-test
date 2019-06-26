// const file2html = require('file2html');
const EPUBReader = require('file2html-epub').default;
const fs = require('fs');

// file2html.config({
//     readers: [
//         EPUBReader,
//     ]
// });
console.log(EPUBReader);
const fileBuffer = new Uint8Array(fs.readFileSync('222.epub'));
meta = {
    //fileType: "application/epub+zip",
    //mimeType: "application/epub+zip",
    //name: "test",
    //size: number; // optional
    //creator: string; // optional
    //createdAt: string; // optional
    //modifiedAt: string; // optional
}

// file2html.read({ fileBuffer, meta  })
//     .then((file) => {
//         // file is an instance of file2html.File type 
//         const { styles, content } = file.getData();

//         // "render" a file content with styles
//         console.log(styles + content);
//     });

new EPUBReader().read({ fileInfo: { content: fileBuffer, meta: meta } })
    .then((result) => {
        const {styles, content} = result.getData();    
        fs.writeFileSync("synchronous.html", styles + content);
    });