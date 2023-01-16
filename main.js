document.getElementById("search-btn").addEventListener("click", showSB);
document.getElementById("cover").addEventListener("click", hideSB);

document.getElementById("w-alone").addEventListener("click", showAlone);
document.getElementById("w-others").addEventListener("click", showOthers);

//document.getElementById("menu-button").addEventListener("click",showMenu);

searchBox = document.getElementById("search-box");
inputSearch = document.getElementById("search-input");

cover = document.getElementById("cover");

//menuBox = document.getElementById("menu-links");

//--------------------------- works_boxes
wAlone_box = document.getElementById("fe-works-alone");
wOthers_box = document.getElementById("fe-works-others");
alone_button = document.getElementById("w-alone");
others_button = document.getElementById("w-others");

//=======================search 
function showSB() {
    searchBox.style.top = "6rem";
    cover.style.display = "block";
    //inputSearch.focus();
} 
function hideSB() {
    searchBox.style.top = "-20rem";
    cover.style.display = "none";
}
//=======================works
function showAlone() {
    wAlone_box.style.display = "block";//           mostrar alone
    wAlone_box.style.visibility = "visible";

    wOthers_box.style.display = "none";
    wOthers_box.style.visibility = "hidden";

    alone_button.style.border = "2px solid #F29D38";
    others_button.style.border = "none";
}
function showOthers() {
    wOthers_box.style.display = "block";//          mostrar others
    wOthers_box.style.visibility = "visible";

    wAlone_box.style.display = "none";
    wAlone_box.style.visibility = "hidden";

    others_button.style.border = "2px solid #F29D38";
    alone_button.style.border = "none";
}
//=========================
function showMenu() {
    menuBox.style.display = "block";
    cover.style.display = "block";
}
