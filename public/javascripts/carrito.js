let searchBar = document.getElementById("search");

function openNav() {
    document.getElementById("navigation-bar").style.width = "100%";
  }
function closeNav() {
    document.getElementById("navigation-bar").style.width = "0%";
  }  

function dropSearch(){
    if (searchBar.style.display === "block") {
        searchBar.style.display = "none";
    } else {
        searchBar.style.display = "block";
    }
}