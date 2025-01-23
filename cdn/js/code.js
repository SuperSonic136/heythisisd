


var urlparams = new URLSearchParams(document.location.search)
let id = urlparams.get('v')


let d
function fetchjson(url) {
        
    fetch(url)
    .then((res) => {
        if (!res.ok) {
            throw new Error
                (`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then((data) =>
         d = data.message)
    .catch((error) =>
        console.error("Unable to fetch data:", error));
}
console.log(d)
class Video extends HTMLElement {

    constructor() {
        super();
        this.path = this.getAttribute('path')
        this.title = this.getAttribute('title')
        this.info = []
        fetchjson(this.path+'/'+this.title+'.info.json')
        console.log(this.info)
    }

    connectedCallback() {
        
        this.innerHTML = `
            <a href="watch.html?v=${this.id}">
                <div class="vid">
                    <img class="thumb" src="img.png" alt="Yes, I'm an adult. And I love Choccy milk. Haha.">
                    <p class="title">g</p>
                    <p class="details">3 views</p>
                </div>
            </a>
        `;
        
    }

}

function loadElems() {
    customElements.define("vid-preview", Video);
}







