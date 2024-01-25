const loadBtn = document.getElementById("loadBtn");
const statusSign = document.getElementById("statusSign");
const output = document.querySelectorAll(".output");

loadBtn.addEventListener("click", () => {
	// fetch data from server
	fetch("http://localhost:3000/demo1", {
		method: "GET",
	})
		.then(res => res.text())
		.then(data => {
			// display fetched data
			output[0].innerHTML = data;
			return fetch("http://localhost:3000/demo2");
		})

		.then(res => res.text())
		.then(data => {
			output[1].innerHTML = data;
			return fetch("http://localhost:3000/demo3");
		})

		.then(res => res.text())
		.then(data => {
			output[2].innerHTML = data;
			return fetch("http://localhost:3000/demo4");
		})

		.then(res => res.text())
		.then(data => {
			output[3].innerHTML = data;
			statusSign.innerHTML = "✅";
		})

		.catch(err => {
			// display error
			statusSign.innerHTML = "❌";
			alert(err);
		});

	// set loading status
	output.innerHTML = "Loading...";
	statusSign.innerHTML = `<i class="fa-solid fa-spinner"></i>`;
});
