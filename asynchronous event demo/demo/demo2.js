const loadBtn = document.getElementById("loadBtn");
const output = document.getElementById("output");

function updateCounter() {
	const counterDisplay = document.getElementById("counter");
	let counter = 5;
	counterDisplay.innerHTML = counter;
	setInterval(() => {
		if (counter === 0) {
			return;
		}
		counterDisplay.innerHTML = --counter;
	}, 1000);
}

loadBtn.addEventListener("click", () => {
	// fetch data from server
	fetch("http://localhost:3000/demo", {
		method: "GET",
	})
		.then(res => {
			return res.text();
		})
		.then(data => {
			// display fetched data
			output.innerHTML = data;
		})
		.catch(err => {
			alert(err);
		});

	output.innerHTML = "Loading...";
});
