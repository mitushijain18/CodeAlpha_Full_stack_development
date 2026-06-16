let taskId = 0;

function addTask(){

    let input =
    document.getElementById("taskInput");

    let text = input.value.trim();

    if(text === ""){
        return;
    }

    const task =
    document.createElement("div");

    task.className = "task";
    task.id = "task" + taskId;

    task.innerHTML = `
        <p>${text}</p>

        <button onclick="moveProgress('${task.id}')">
        Move →
        </button>
    `;

    document
    .getElementById("todo")
    .appendChild(task);

    input.value = "";
    taskId++;
}

function moveProgress(id){

    const task =
    document.getElementById(id);

    task.innerHTML = `
        <p>${task.querySelector("p").innerText}</p>

        <button onclick="moveDone('${id}')">
        Complete
        </button>
    `;

    document
    .getElementById("progress")
    .appendChild(task);
}

function moveDone(id){

    const task =
    document.getElementById(id);

    task.innerHTML = `
        <p>${task.querySelector("p").innerText}</p>
        <strong>Completed ✓</strong>
    `;

    document
    .getElementById("done")
    .appendChild(task);
}