const task1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("first");
	}, 1000);
});

const task2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("second");
	}, 1000);
});

const task3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("third");
	}, 1000);
});

const task4 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("no fourth");
	}, 1000);
});

function doAllTask() {
	task1
		.then(result => {
			console.log("Task 1 completed with result:", result);
			return task2;
		})
		.then(result => {
			console.log("Task 2 completed with result:", result);
			return task3;
		})
		.then(result => {
			console.log("Task 3 completed with result:", result);
			return task4;
		})
		.then(result => {
			console.log("Task 4 completed with result:", result);
		})
		.catch(error => {
			console.error("An error occurred:", error);
		});
}

async function doAllTask() {
	try{
        result = await task1;
        console.log("Task 1 completed with:", result);
        result = await task2;
        console.log("Task 2 completed with:", result);
        result = await task3;
        console.log("Task 3 completed with:", result);
        result = await task4;
        console.log("Task 4 completed with:", result);
    }catch(err){
        console.log("An error occurred:", err);
    }
}

doAllTask1();
