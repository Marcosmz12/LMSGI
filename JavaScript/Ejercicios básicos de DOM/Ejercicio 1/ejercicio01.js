let boton = document.getElementById('boton');

boton.addEventListener("click", () => {
    let titulo = document.querySelector('h1');
    if (titulo.textContent === "Texto original") {
        titulo.textContent = "Benito Camela";
        titulo.style.color = "red";
    } else {
        titulo.textContent = "Texto original";
        titulo.style.color = "grey"
    }
});