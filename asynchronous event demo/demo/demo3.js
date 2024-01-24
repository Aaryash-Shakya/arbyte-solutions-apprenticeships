const loadBtn = document.getElementById("loadBtn");
const output = document.getElementById("output");
let data;

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

loadBtn.addEventListener("click", async () => {
	try {
		output.innerHTML = "Loading...";
		// fetch data from server
		data = await fetch("http://localhost:3000/demo", {
			method: "GET",
		});
		data = await data.text();

		output.innerHTML = data;
	} catch (err) {
		alert(err);
	}
});
