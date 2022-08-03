
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Running", "bathing", "Eating"]; 
let workItems = [];


app.set('view engine', 'ejs');

const port = 3000;  //const is used for constant that value does not change:

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public")); 

app.get('/', (req, res) => {

	//1st way::
	// res.send("Welcome to the homepage");/

	// var today = new Date();
	// const currentDay = today.getDay();
	// var day = "";

	// switch (currentDay) {
	// 	case 0:
	// 	day = "sunday";
	// 		break;
	// 	case 1:
	// 	day = "monday";
	// 		break;
	// 	case 2:
	// 	day = "tuesday";
	// 		break;
	// 	case 3:
	// 	day = "wednesday";
	// 		break;	
	// 	case 4:
	// 	day = "thursday";
	// 		break;
	// 	case 5:
	// 	day = "friday";
	// 		break;
	// 	case 6:
	// 	day = "saturday";
	// 		break;
		

	// 	default:
	// 		console.log("error triggerd"); 
	// 		break;
	// }
	//3rd way::
	let today = new Date();
	let options = {
		weekday : "long",
		day: "numeric",
		month: "long"
	};
	let day = today.toLocaleDateString("hi-IN", options);
	// var day = today.toLocaleDateString("en-us", options);

	res.render("list", {ListTitle: day, newListItems: items });


// 2nd way:
// 	const day = ["s","mun", "tue", "wed", "thu","fri", "sat"];
// var cd = day[currentDay];

// res.render("list", {kindofday: cd});

});

app.post("/", (req, res) => { 
	let item = req.body.newItem;

if( req.body.list === "work"){
		workItems.push(item);
		res.redirect("/work");

	}else {
		items.push(item);
	    res.redirect('/');
	}

});

app.get("/work", (req, res) => {

	res.render("list", {ListTitle: "Work List", newListItems: workItems});	
});

// app.post("/", (req, res) => {
// 	let item = req.body.newItems;
// 	workItems.push(item);
// 	res.render("/work");/////////
// })


app.listen(port, () => {
	console.log(`the server is listening at port ${port}`);
});