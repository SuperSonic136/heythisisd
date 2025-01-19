let node = require('node')

window.requestFileSystem =
  window.requestFileSystem || window.webkitRequestFileSystem;
window.directoryEntry = window.directoryEntry || window.webkitDirectoryEntry;

let urlparams = urlparams = new URLSearchParams(document.location.search)
let id = urlparams.get('v')

class Video extends HTMLElement {
    constructor() {
        super();
        this.id = this.getAttribute("vidid");
    }

    connectedCallback() {
        this.innerHTML = `
            <a href="watch.html?v=${this.id}">
                <div class="vid">
                    <img class="thumb" src="img.png" alt="Yes, I'm an adult. And I love Choccy milk. Haha.">
                    <p class="title">Lorem, ipsum dolor sit</p>
                    <p class="details">3 views</p>
                </div>
            </a>
        `;
    }
}


function loadElems() {
    customElements.define("vid-preview", Video);
}

const folderToReadPath = process.argv.slice(2)[0]; 
const fs = require('fs'); 
 
fs.readdirSync(folderToRead).forEach(file => { 
  console.log(file); 
}); 
