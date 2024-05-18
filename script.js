document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.getElementById("menuBtn");
    var sideNav = document.getElementById("sideNav");
    var navigateButton = document.getElementById("navigateButton");

    menuBtn.addEventListener("click", function() {
        if (sideNav.style.right === "-250px" || sideNav.style.right === "") {
            sideNav.style.right = "0";
        } else {
            sideNav.style.right = "-250px";
        }
    });
});




