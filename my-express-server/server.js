const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("This is homepage");
});

app.get("/contact", (req, res) => {
	res.send("this is contact page");
});

app.get("/about", (req, res) => {
	res.send("This is about route");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
