function scrollToLatestProducts() {
    var latestProductsHeading = document.getElementById("latestProductsHeading");
    latestProductsHeading.scrollIntoView({ behavior: "smooth", block: "start" });
}
function checkLogin() {
    var isLoggedIn = false; 
    if (!isLoggedIn) {
        alert("You must log in first to buy.");
    } else {
    }
}

var buyButtons = document.querySelectorAll(".btn");
buyButtons.forEach(function(button) {
    button.addEventListener("click", checkLogin);
});





