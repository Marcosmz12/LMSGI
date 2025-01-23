
let contador = 1;

document.getElementById("add-bton").addEventListener("click", function() {
    let newParam = document.createElement("p");
    newParam.textContent = "Este es el párrafo: " + contador;
    newParam.style.color = "red";
    contador++;
    document.getElementById("container").appendChild(newParam);
});