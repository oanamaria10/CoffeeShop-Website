window.onload= function() {
    let header = document.querySelector("header");
    let searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search";
    searchInput.classList.add("search-input");
    header.appendChild(searchInput);
    searchInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            let searchTerm = event.target.value.toLowerCase();
            let elementsToSearch = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");
            for (let i = 0; i < elementsToSearch.length; i++) {
                let element = elementsToSearch[i];
                let elementText = element.innerText;
                let elementTextLowercase = elementText.toLowerCase();
                
                if (elementTextLowercase.includes(searchTerm)) {
                    let highlightedText = elementText.replace(new RegExp(searchTerm, 'gi'), match => `<span class="highlight">${match}</span>`);
                    element.innerHTML = highlightedText;
                } else {
                    element.innerHTML = elementText;
                }
            }
    
            if (searchInPage(searchTerm)) {
                console.log("Cuvântul căutat a fost găsit în pagină!");
            } else {
                console.log("Cuvântul căutat nu a fost găsit în pagină.");
                alert("Cuvântul căutat nu a fost găsit în pagină.");
            }
        }
    });
    searchInput.addEventListener("click", function(event) {
        event.stopPropagation();
    });
    function searchInPage(text) {
        const pageText = document.body.innerText.toLowerCase();
        return pageText.includes(text);
    }
    
    //adaug intr-o sectiune a paginii o fotografie
    let photoDiv = document.createElement("div");
    photoDiv.id = "photo";
    let image = document.createElement("img");
    image.src = "img2.png";
    image.alt = "A nice photo of our cafe!";
    image.style.padding = "7px";
    image.style.borderRadius = "70%";
    photoDiv.appendChild(image);
    let container = document.getElementById("area1");
    container.appendChild(photoDiv);

    //sterg button
    let button = document.querySelector("#area1 .button");
    if (button) {
        button.remove();
    }

    //setez proprietatile pentru un grup de imagini
    let container2 = document.querySelector(".members");
    let images = container2.querySelectorAll("img");
    images.forEach(function(image) {
        image.style.border = "3px solid white";
        image.style.borderRadius = "50%";
    })

    //adaug proprietate CSS elementelor text(o caseta text)
    let figcaptions = document.querySelectorAll("figcaption");
    figcaptions.forEach(function(figcaption) {
        figcaption.classList.add("figcaption-box");
    });

    let section = document.getElementsByClassName("container")[0];
    let button2 = document.createElement("button2");
    button2.innerText = "Click to know more about our team!";
    button2.classList.add("button");
    button2.addEventListener("click", function() {
    window.location.href = "https://www.caffesantacruz.com/team/";
    });
    section.appendChild(button2);

    let element = document.querySelector("#History h1");
    let interval = setInterval(function() {
        let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        element.style.color = randomColor;
    }, 2000);
    setTimeout(function() {
        clearInterval(interval);
    }, 10000);
}