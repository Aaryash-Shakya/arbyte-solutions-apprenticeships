const express = require("express");
const app = express();
const cors = require("cors");

app.use(
	cors({
		origin: "http://127.0.0.1:5500",
	})
);

// GET API
app.get("/demo", (req, res) => {
	setTimeout(() => {
		res.send("Hello World");
	}, 5000);
});

// Start the server
app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
