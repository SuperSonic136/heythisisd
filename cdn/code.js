const fs = require('node:fs')

window.requestFileSystem =
  window.requestFileSystem || window.webkitRequestFileSystem;
window.directoryEntry = window.directoryEntry || window.webkitDirectoryEntry;

var urlparams = urlparams = new URLSearchParams(document.location.search)
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
console.log(window)
