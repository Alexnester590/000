var x = 32;
var y = 44;
var radius = 5;

var centerX = 0;
var centerY = 0;
var width = 600;
var height = 400;

function setup(width, height) {
    centerX = width / 2;
    centerY = height / 2;
}

function computeDistance(x1, y1, x2, y2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    var d2 = (dx * dx) + (dy * dy);
    var d = Math.sqrt(d2);
    return d;
}

function circleArea(r) {
    var area = Math.PI * r * r;
    return area;
}



async function setup2(width, height) {
    var centerX = width;
    var centerY = height;
    const params1 = { number1: centerX, number2: centerY }
    console.log("Welcome2 " + centerX + "!");
	console.log("Welcome2 " + params1.number1 + "!");
	const sum = await Parse.Cloud.run('AreaDistance1', params1);
    
}
async function computeDistance2(x1, y1, x2, y2) {
    var x1 = x1;
    var x2 = x2;
    var y1 = y1;
    var y2 = y2;
    const params1 = { number1: x1, number2: y1, number3: x2, number4: y2 }
    const sum = await Parse.Cloud.run('AreaDistance2', params1);
}

async function circleArea2(r) {
    var area1 = r;
    const params1 = { number1: area1 }
    console.log("Welcome " + area1 + "!");
    console.log("Welcome " + params1.number1 + "!");
    const sum = await Parse.Cloud.run('AreaDistance3', params1);
}
setup(width, height);
circleArea2(radius)
var area = circleArea(radius);
computeDistance2(x, y, centerX, centerY);
var distance = computeDistance(x, y, centerX, centerY);
console.log("Area: " + area);
console.log("Distance: " + distance);
// Here so the code will run!
//function setMode(mode) { };
//function setTemp(degrees) { };