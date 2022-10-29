const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	var today = new Date();
	var currentDay = today.getDay();
	if (currentDay === 6 || currentDay === 0) {
		res.sendFile(__dirname + "/index.html");
		//res.send("yay its Weekday");
	} else {
		res.send("booo! i have to work");
	}
	//res.send("This is homepage");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
