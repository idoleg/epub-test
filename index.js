//const ePub = require('epubjs');
import ePub from 'epubjs';
const file = require("./220.epub");
 window.onload = () => {
     console.log(file)
    var book = ePub(file);
    var rendition = book.renderTo("area", { method: "default", flow: "scrolled-doc", width: '100vw', height: '100vh'});
    var displayed = rendition.display(3);
    window.rendition = rendition;
 }