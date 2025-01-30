document.getElementById("removeLast").addEventListener("click", function(){
    const list = document.getElementById("list");
    if (list.lastElementChild){
        list.removeChild(list.lastElementChild);
    }
});