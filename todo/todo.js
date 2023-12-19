// ! variables

const addTaskButton = document.getElementById("addTaskButton");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const tasks = document.getElementById("tasks");

let i = 0;
let taskObjectArray = [
    // {
    //     id: 0,
    //     title: "Do your hw",
    //     description: "hw is good",
    // },
];
let taskString = "";

// ! functions

addTaskButton.onclick = () => {
    // add new task to array
    let newTask = {
        id: i++,
        title: taskTitle.value,
        description: taskDescription.value,
    };
    taskObjectArray.push(newTask);

    updateDisplay();

    // clear input
    taskTitle.value = "";
    taskDescription.value = "";
};

// delete todo
const deleteTodo = id => {
    taskObjectArray = taskObjectArray.filter(task => task.id != id);
    updateDisplay();
};

const updateDisplay = () => {
    taskString = "";
    taskObjectArray.forEach(task => {
        taskString += `
        <div class="col-md-6">
            <div class="d-flex align-items-center justify-content-between border border-1 border-black p-4 rounded-2 shadow-sm m02">
            <div>
                <h3>${task.title}</h3>
                <p>${task.description}</p>
            </div>
            <button class="btn btn-danger" onclick="deleteTodo(${task.id})">Delete</button>
            </div>
        </div>
        `;
    });

    tasks.innerHTML = taskString;
};
