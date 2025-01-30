const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseenter" , function(){
    hoverBox.style.backgroundColor = "red";
});

hoverBox.addEventListener("mouseleave", function(){
    hoverBox.style.backgroundColor = "lightgray";
});