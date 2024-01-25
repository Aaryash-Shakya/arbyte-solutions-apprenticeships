const loadBtn = document.getElementById("loadBtn");
const statusSign = document.getElementById("statusSign");
const output = document.getElementById("output");

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
			statusSign.innerHTML = "✅"
			output.innerHTML = data;
		})
		.catch(err => {
			// display error
			statusSign.innerHTML = "❌"
			alert(err);
		});

	// set loading status
	output.innerHTML = "Loading...";
	statusSign.innerHTML = `<i class="fa-solid fa-spinner"></i>`
});
