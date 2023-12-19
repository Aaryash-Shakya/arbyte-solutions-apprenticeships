// ! variables

const addTaskButton = document.getElementById("addTaskButton");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const tasks = document.getElementById("tasks");

let taskObjectArray = [];
let taskString = "";
let i = 0;

// ! functions

addTaskButton.onclick = () => {
    // if title empty
    if (taskTitle.value === "") {
        alert("Title can't be empty");
        return;
    }

    // add new task to array
    let newTask = {
        id: i++,
        title: taskTitle.value,
        description: taskDescription.value || "description",
    };
    taskObjectArray.push(newTask);

    setLocalStorage();
    updateDisplay();

    // clear input
    taskTitle.value = "";
    taskDescription.value = "";
};

// delete todo
const deleteTodo = id => {
    taskObjectArray = taskObjectArray.filter(task => task.id != id);
    setLocalStorage();
    updateDisplay();
};

const updateDisplay = () => {
    taskString = "";
    taskObjectArray.forEach(task => {
        taskString += `
        <div class="col-md-6">
            <div class="task d-flex align-items-center justify-content-between border border-1 border-dark-subtle p-4 rounded-2 shadow m-2">
            <div>
                <h3>${task.title}</h3>
                <p class="text-muted">${task.description}</p>
            </div>
            <button class="btn btn-danger" onclick="deleteTodo(${task.id})">Delete</button>
            </div>
        </div>
        `;
    });

    tasks.innerHTML = taskString;
};

const setLocalStorage = () => {
    localStorage.setItem(`taskArray`, JSON.stringify(taskObjectArray));
};

const getLocalStorage = () => {
    if (localStorage.getItem("taskArray")) {
        let taskArray = localStorage.getItem("taskArray");
        taskObjectArray = JSON.parse(taskArray);
    }
};

// ! driver code

// fetch the data from local storage
getLocalStorage();

// check current pointer
if (taskObjectArray.length !== 0) {
    i = taskObjectArray[taskObjectArray.length - 1].id + 1;
    updateDisplay();
}
console.log(`current pointer is at ${i}`);
