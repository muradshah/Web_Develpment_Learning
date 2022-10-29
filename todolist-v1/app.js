const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
//app.use("view-engine", "ejs");

app.get("/", (req, res) => {
	var today = new Date();
	var currentDay = today.getDay();
	if (currentDay === 6 || currentDay === 0) {
		res.sendFile(__dirname + "/index.html");
		//res.send("yay its Weekday");
	} else {
		res.sendFile(__dirname + "/index.html");
	}
	//res.send("This is homepage");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
