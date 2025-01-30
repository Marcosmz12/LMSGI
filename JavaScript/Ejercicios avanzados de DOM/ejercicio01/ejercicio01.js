document.getElementById("boton").addEventListener("click", function () {
    const textarea = document.getElementById("textArea");
    if (textarea.value.trim() !== "") {
        const nuevalista = document.createElement("li");

        nuevalista.textContent = textarea.value;

        const editar = document.createElement("button");
        editar.textContent = "Editar";
        editar.addEventListener("click", () =>{
            let nuevoTexto = prompt("Ingrese un nuevo elemento");
            if(nuevoTexto.trim() !== ""){
                nuevalista.firstChild.textContent = nuevoTexto;
            }
        });

        const eliminar = document.createElement("button");
        eliminar.textContent = "Eliminar";
        eliminar.addEventListener("click", () =>{
            nuevalista.remove();
        });

        nuevalista.appendChild(editar);
        nuevalista.appendChild(eliminar);

        document.getElementById("Lista").appendChild(nuevalista);
        textarea.value = "";
    }
});