document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const deleteAllBtn = document.getElementById("delete-all-btn");
    const todoList = document.getElementById("todo-list");
    const darkModeToggle = document.getElementById("toggle-switch");
    const body = document.body;

    addTaskBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    deleteAllBtn.addEventListener("click", function() {
        todoList.innerHTML = ""; // Remover todas as tarefas da lista
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskElement = document.createElement("li");
            taskElement.classList.add("task");

            const checkbox = document.createElement("div");
            checkbox.classList.add("checkbox");
            checkbox.addEventListener("click", function() {
                taskElement.classList.toggle("completed");
            });

            const taskTextElement = document.createElement("div");
            taskTextElement.classList.add("task-text");
            taskTextElement.textContent = taskText;

            taskElement.appendChild(checkbox);
            taskElement.appendChild(taskTextElement);
            todoList.appendChild(taskElement);

            taskInput.value = ""; // Limpar campo de entrada após adicionar a tarefa
        }
    }

    // Toggle para o modo escuro
    darkModeToggle.addEventListener("change", function() {
        if (this.checked) {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
    });
});
