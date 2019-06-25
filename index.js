//const ePub = require('epubjs');
import ePub from 'epubjs';
const file = require("./220.epub");
 window.onload = () => {
     console.log(file)
    var book = ePub(file);
    var rendition = book.renderTo("area", { method: "continuous", width: "100%", height: "100%" });
    var displayed = rendition.display();
 }