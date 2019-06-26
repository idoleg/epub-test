//const ePub = require('epubjs');
import ePub from 'epubjs';
const file = require("./222.epub");
window.onload = () => {
    console.log(file)
    var book = ePub(file);
    var rendition = book.renderTo("area", { method: "default",  flow: "scrolled-doc", width: '100vw', height: '100vh' }); //,  spread: "always"  view: "div",   width: '100vw', height: '100vh'
    var displayed = rendition.display();
    window.rendition = rendition;
    //rendition.themes.override("font-family", "sans-serif")
    //book.setStyle("font-family", "sans-serif");
}