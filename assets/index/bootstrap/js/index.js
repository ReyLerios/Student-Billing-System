const portal = document.querySelector("#toggle-btn");

portal.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("expand");
});