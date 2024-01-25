const loadBtn = document.getElementById("loadBtn");
const statusSign = document.getElementById("statusSign");
const output = document.querySelectorAll(".output");
let data;

loadBtn.addEventListener("click", async () => {
	try {
		// set loading status
		output.innerHTML = "Loading...";
		statusSign.innerHTML = `<i class="fa-solid fa-spinner"></i>`

		// fetch data from server
		data = await fetch("http://localhost:3000/demo1");
		output[0].innerHTML = await data.text();
		
		data = await fetch("http://localhost:3000/demo2");
		output[1].innerHTML = await data.text();
		
		data = await fetch("http://localhost:3000/demo3");
		output[2].innerHTML = await data.text();
		
		data = await fetch("http://localhost:3000/demo4");
		output[3].innerHTML = await data.text();


		statusSign.innerHTML = "✅"
	} catch (err) {
		statusSign.innerHTML = "❌"
		alert(err);
	}
	console.log('end')
});
