
async function retrieveRunner2() {
	var helloFunction555 = await Parse.Cloud.run("hello");

}
document.write("<h1>function retrieveRunner2! Server cm. hello Network</h1>");
document.write("<h1>function bark! Server cm. sumNumbers Network</h1>");
async function bark(name, weight) {
	var params0 = weight;
	var params01 = name;
	const params1 = { number1: params0, number2: params01 }
	console.log("Welcome " + params1.number1 + "!");
	console.log("Welcome " + params1.number2 + "!");
	const sum = await Parse.Cloud.run('bark', params1);

	
}
retrieveRunner2();
bark("rover", 23);
bark("spot", 13);
bark("spike", 53);
bark("lady", 17);