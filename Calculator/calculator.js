const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

app.get("/", (req, res) => {
	//console.log(__dirname);
	res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var results = num1 + num2;
    res.send("Sum is ::"+results);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
