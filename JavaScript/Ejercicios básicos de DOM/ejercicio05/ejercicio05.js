document.getElementById("addTask").addEventListener("click" , function(){
const taskInput = document.getElementById("taskInput");
if (taskInput.value.trim() !== ""){
    const newTask = document.createElement("li");
    newTask.textContent = taskInput.value;
    document.getElementById("taskList").appendChild(newTask);
    taskInput.value = "";
}
});