const fetchJSONData = (id,obj) =>
    fetch("cdn/videos/"+id+"/info.json")
    .then(response => response.json())
    .then(data => {return data[obj]})


class Video extends HTMLElement {
    constructor() {
        super();
        this.id = this.getAttribute('vidid')
        this.info =fetchJSONData(this.id,"title")
        console.log(this.info)
    }

    connectedCallback() {
        
        this.innerHTML = `
            <a href="watch.html?v=${this.id}">
                <div class="vid">
                    <img class="thumb" src="img.png" alt="Yes, I'm an adult. And I love Choccy milk. Haha.">
                    <p class="title">${this.info}</p>
                    <p class="details">3 views</p>
                </div>
            </a>
        `;
        
    }

}