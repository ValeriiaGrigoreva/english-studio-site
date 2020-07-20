let button = document.querySelector(".menu");
let dropdown = document.querySelector(".dropdown");


function menu() {
    if(dropdown.style.display === "grid") {
        dropdown.style.display = "none";
        button.innerHTML = "menu";
    }else{
        dropdown.style.display = "grid";
        button.innerHTML = "close";
    }
}