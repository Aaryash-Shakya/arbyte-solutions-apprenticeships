const loadBtn = document.getElementById("loadBtn");
const statusSign = document.getElementById("statusSign");
const output = document.getElementById("output");
let data;

loadBtn.addEventListener("click", async () => {
	try {
		
		// set loading status
		output.innerHTML = "Loading...";
		statusSign.innerHTML = `<i class="fa-solid fa-spinner"></i>`

		// fetch data from server
		data = await fetch("http://localhost:3000/demo", {
			method: "GET",
		});

		// display data
		statusSign.innerHTML = "✅"
		data = await data.text();
		output.innerHTML = data;
	} catch (err) {
		statusSign.innerHTML = "❌"
		alert(err);
	}
	console.log('end')
});
