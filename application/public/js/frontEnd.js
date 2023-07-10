// const flash = require("express-flash");

function setFlashMessageFadeOut() {
    setTimeout(() => {
        let currentOpacity = 1.0;
        let timer = setInterval(() => {
            if(currentOpacity < 0.05){
                clearInterval(timer);
                flashElement.remove();
            }
            currentOpacity = currentOpacity -.05;
            flashElement.style.opacity = currentOpacity;
        }, 50);
    }, 4000)
}



let flashElement = document.getElementById('flash-message');
if(flashElement) {
    console.log('testing');
    setFlashMessageFadeOut();
}

{/* <input id="search-text" type="text" placeholder="Search..." name="search">
<button><i id="search-buton" class="fa fa-search">Submit</i></button> */}

let searchButton = document.getElementById('search-butotn');
if(searchButton) {
    searchButton.onclick = executeSearch;
}