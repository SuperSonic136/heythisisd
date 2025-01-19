class Video extends HTMLElement {
    constructor() {
        super();
        this.id = this.getAttribute("vidid");
    }

    connectedCallback() {
        this.innerHTML = `
            <a href="watch.html">
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