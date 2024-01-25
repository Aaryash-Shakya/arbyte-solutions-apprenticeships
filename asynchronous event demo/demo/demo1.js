const loadBtn = document.getElementById("loadBtn");
const statusSign = document.getElementById("statusSign");
const output = document.getElementById("output");
let data;

loadBtn.addEventListener("click", () => {
	// fetch data from server
	data = fetch("http://localhost:3000/demo", {
		method: "GET",
	});

	// display data
	output.innerHTML = data;
});
