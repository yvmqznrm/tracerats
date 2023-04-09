navbar = document.getElementById("navbar_div");
file = "/inserts/navbar.html"

xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4) {
    if (this.status == 200) {navbar.innerHTML = this.responseText;}
    if (this.status == 404) {navbar.innerHTML = "404 - Not Found";}
}
}      
xhttp.open("GET", file, true);
xhttp.send();

function currentPageHighlight(pageName) {
    links = document.getElementById("navbar").getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        if (links[i].innerHTML == pageName) {
            links[i].classList.add("active");
            break
        }
    } 
}