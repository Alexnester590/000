Parse.Cloud.define("makePhrasesB", async (request) => {
    var rand1 = Math.floor(Math.random() * request.params.number1.length);
	var rand2 = Math.floor(Math.random() * request.params.number2.length);
	var rand3 = Math.floor(Math.random() * request.params.number3.length);
    
    var phrase = request.params.number1[rand1] + " " + request.params.number2[rand2] + " " + request.params.number3[rand3];
	console.log(phrase);
    return phrase;

});


// Bubbles
Parse.Cloud.define("BubblesB", async (request) => {
    var scores = request.params.number1;
    var costs = request.params.number2;
    var highScore = printAndGetHighScore(scores);
    var bestSolutions = getBestResults(scores, highScore);
    console.log("Bubbles tests: " + scores.length);
    console.log("Highest bubble score: " + highScore);
    console.log("Solutions with the highest score: " + bestSolutions);
    var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
    console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");
    var mostCostEffective2 = getMostCostEffectiveSolution2(bestSolutions, costs);
    console.log("Bubble Solution #2 " + mostCostEffective2 + " is the most cost effective2");


    function printAndGetHighScore(scores) {
        var highScore = 0;
        var output;
        for (var i = 0; i < scores.length; i++) {
            output = "Bubble solution #" + i + " score: " + scores[i];
            console.log(output);
            if (scores[i] > highScore) {
                highScore = scores[i];
            }
        }
        console.log("highScore: " + highScore);
        return highScore;
        

    }

    function getBestResults(scores, highScore) {
        var bestSolutions = [];
        for (var i = 0; i < scores.length; i++) {
            if (scores[i] == highScore) {
                bestSolutions.push(i);
            }
        }
        console.log("bestSolutions: " + bestSolutions);
        return bestSolutions;
    }

    function getMostCostEffectiveSolution(scores, costs, highScore) {
        var cost = 100; // much higher than any of the costs
        var index;

        for (var i = 0; i < scores.length; i++) {
            if (scores[i] == highScore) {
                console.log("highScore: " + i);
                console.log("highScore: " + costs[i]);
                if (cost > costs[i]) {
                    index = i;
                    cost = costs[i];
                }
            }
        }
        return index;
    }

    function getMostCostEffectiveSolution2(bestSolutions, costs) {
        var cost = 100;
        var solutionIndex;
        var lowCostIndex;

        for (var i = 0; i < bestSolutions.length; i++) {
            solutionIndex = bestSolutions[i];
            if (cost > costs[solutionIndex]) {
                lowCostIndex = solutionIndex;
                cost = costs[solutionIndex];
            }
        }
        return lowCostIndex;
    }
});
