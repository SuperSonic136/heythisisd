



var urlparams = new URLSearchParams(document.location.search)
let id = urlparams.get('v')






function loadElems() {
    customElements.define("vid-preview", Video);
}


