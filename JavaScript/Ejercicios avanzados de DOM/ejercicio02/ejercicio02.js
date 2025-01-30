document.getElementById("boton").addEventListener("click", function () {
    const ingresar = prompt("Ingrese un url de una imagen");
    if (ingresar.trim() !== "") {
        const imagen = document.createElement("img");
        imagen.textContent = ingresar.value;

        const eliminar = document.createElement("button");
        eliminar.textContent = "Eliminar";
        eliminar.addEventListener("click", () => {
            imagen.remove();
        });

        imagen.appendChild(eliminar);
        document.getElementById("contenedor").appendChild(imagen);

    }
})