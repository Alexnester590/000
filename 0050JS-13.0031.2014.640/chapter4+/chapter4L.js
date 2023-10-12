async function makePhrasesA() {
	var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
	var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
	var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];
	const params = { number1: words1, number2: words2, number3: words3 }
	const sum = await Parse.Cloud.run('makePhrasesB', params);
}
makePhrasesA();

async function BubblesA() {
	var scores = [60, 50, 60, 58, 54, 54,
		58, 50, 52, 54, 48, 69,
		34, 55, 51, 52, 44, 51,
		69, 64, 66, 55, 52, 61,
		46, 31, 57, 52, 44, 18,
		41, 53, 55, 61, 51, 44];
	var costs = [.25, .27, .25, .25, .25, .25, .33, .31,
		.25, .29, .27, .22, .31, .25, .25, .33,
		.21, .25, .25, .25, .28, .25, .24, .22,
		.20, .25, .30, .25, .24, .25, .25, .25,
		.27, .25, .26, .29];
	const params = { number1: scores, number2: costs}
	const sum = await Parse.Cloud.run('BubblesB', params);
}
BubblesA();



// var highScore, bestSolutions;
// highScore = printAndGetHighScore(scores);
// console.log("Bubbles tests: " + scores.length);
// console.log("Highest bubble score: " + highScore);
// bestSolutions = getBestResults(scores, highScore);
// console.log("Solutions with the highest score: " + bestSolutions);
// mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
// console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");
// mostCostEffective2 = getMostCostEffectiveSolution2(bestSolutions, costs);
// console.log("Bubble Solution #2 " + mostCostEffective2 + " is the most cost effective2");


// function printAndGetHighScore(scores) {
// 	var highScore = 0;
// 	var output;
// 	for (var i = 0; i < scores.length; i++) {
// 		output = "Bubble solution #" + i + " score: " + scores[i];
// 		console.log(output);
// 		if (scores[i] > highScore) {
// 			highScore = scores[i];
// 		}
// 	}
// 	console.log("highScore: " + highScore);
// 	return highScore;
	

// }

// function getBestResults(scores, highScore) {
// 	var bestSolutions = [];
// 	for (var i = 0; i < scores.length; i++) {
// 		if (scores[i] == highScore) {
// 			bestSolutions.push(i);
// 		}
// 	}
// 	console.log("bestSolutions: " + bestSolutions);
// 	return bestSolutions;
// }

// function getMostCostEffectiveSolution(scores, costs, highScore) {
// 	var cost = 100; // much higher than any of the costs
// 	var index;

// 	for (var i = 0; i < scores.length; i++) {
// 		if (scores[i] == highScore) {
// 			console.log("highScore: " + i);
// 			console.log("highScore: " + costs[i]);
// 			if (cost > costs[i]) {
// 				index = i;
// 				cost = costs[i];
// 			}
// 		}
// 	}
// 	return index;
// }

// function getMostCostEffectiveSolution2(bestSolutions, costs) {
// 	var cost = 100;
// 	var solutionIndex;
// 	var lowCostIndex;

// 	for (var i = 0; i < bestSolutions.length; i++) {
// 		solutionIndex = bestSolutions[i];
// 		if (cost > costs[solutionIndex]) {
// 			lowCostIndex = solutionIndex;
// 			cost = costs[solutionIndex];
// 		}
// 	}
// 	return lowCostIndex;
// }