const addTaskButton = document.getElementById("addTaskButton");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const tasks = document.getElementById("tasks");

let taskObjectArray = [
    {
        title: "Do your hw",
        description: "hw is good",
    },
];
let taskString = "";

addTaskButton.onclick = () => {
    // let taskTitle = taskTitle.value;
    // let taskDescription = taskDescription.value;

    let newTask = {
        title: taskTitle.value,
        description: taskDescription.value
    }
    console.log(newTask);
    taskString += `
    <div class="col-md-6">
        <div class="d-flex align-items-center justify-content-between border border-1 border-black p-4 rounded-2 shadow-sm m02">
        <div>
            <h3>${taskTitle.value}</h3>
            <p>${taskDescription.value}</p>
        </div>
        <button class="btn btn-danger">Delete</button>
        </div>
    </div>
    `;
    tasks.innerHTML = taskString;
};
