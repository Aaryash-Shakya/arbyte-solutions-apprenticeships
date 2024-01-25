const express = require("express");
const app = express();
const cors = require("cors");

app.use(
	cors({
		origin: "http://127.0.0.1:5500",
	})
);

const delay = 1000;

// GET API
app.get("/demo1", (req, res) => {
	setTimeout(() => {
		res.send("Hello World 1");
	}, delay);
});

app.get("/demo2", (req, res) => {
	setTimeout(() => {
		res.send("Hello World 2");
	}, delay);
});

app.get("/demo3", (req, res) => {
	setTimeout(() => {
		res.send("Hello World 3");
	}, delay);
});

app.get("/demo4", (req, res) => { 
	setTimeout(() => {
		res.send("Hello World 4");
	}, delay);
});

// Start the server
app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
