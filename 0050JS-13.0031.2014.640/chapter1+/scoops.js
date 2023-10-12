document.write("<h1>scoops.js Ice cream!</h1>");
scoops = 5;
while (scoops > 0) {
	document.write("scoops.js Another scoop!<br>");
	if (scoops < 3) {
		alert("scoops.js Ice cream is running low!");
	} else if (scoops >= 5) {
		alert("scoops.js Eat faster, the ice cream is going to melt!");
	}
	scoops = scoops - 1;
}
document.write("scoops.js Life without ice cream isn't the same");
