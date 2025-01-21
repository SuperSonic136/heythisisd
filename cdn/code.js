class Video extends HTMLElement {
    constructor() {
        super();
        this.id = this.getAttribute("vidid");
        this.fetchinfo = fetch("cdn/videos/"+this.id+"/info.json")
        this.info = toString(this.fetchinfo)
    }

    connectedCallback() {
        console.log(JSON.parse('{"js":"fuckingsucks"}'))
        this.innerHTML = `
            <a href="watch.html?v=${this.id}">
                <div class="vid">
                    <img class="thumb" src="cdn/videos/${this.id}/thumb.webp" alt="Yes, I'm an adult. And I love Choccy milk. Haha.">
                    <p class="title">${this.info[title]}</p>
                    <p class="details">3 views</p>
                </div>
            </a>
        `;
        
    }
}

var urlparams = urlparams = new URLSearchParams(document.location.search)
let id = urlparams.get('v')

function loadElems() {
    customElements.define("vid-preview", Video);
}

