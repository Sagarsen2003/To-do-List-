function addTask() {
    var task = document.getElementById("taskInput");
    var list = document.getElementById("taskList");


    if (taskInput.value.trim() !== "") {
        var newTask = document.createElement("li");
        newTask.innerHTML = taskInput.value + ' <button onclick ="removeTask(this)">remove task</button> ';
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function removeTask(button) {
    button.parentNode.remove();

}