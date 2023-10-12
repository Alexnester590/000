

Parse.Cloud.define("hello", (request) => {
    return ("Hello world!");
});



Parse.Cloud.define("sumNumbers", async (request) => {
    if (request.params.number1 > 20) {
        return (request.params.number2 + " says WOOF WOOF");
    } else {
        return (request.params.number2 + " says woof woof");
    }
});



Parse.Cloud.define("sumNumbers2", async (request) => {
    if (request.params.number1 > 500) {
        message = "I'm not a nuclear reactor!";
    } else if (request.params.number1 < 100) {
        message = "I'm not a refrigerator!";
    } else {
        message = "That's a very comfortable temperature for me.";
    }
    return message;

});


Parse.Cloud.define("sumNumbers3", async (request) => {
    var centerX2 = request.params.number1/2;
    var centerY2 = request.params.number2/2;
    return centerX2;
    //return (request.params.number1 + request.params.number2);
}
);

Parse.Cloud.define("sumNumbers5", async (request) => {
    var dx = request.params.number1 - request.params.number3;
    var dy = request.params.number2 - request.params.number4;
    var d2 = (dx * dx) + (dy * dy);
    var d = Math.sqrt(d2);
    return d;
    //return (request.params.number1 + request.params.number2);
}
    );
Parse.Cloud.define("sumNumbers4", async (request) => {
    var area = Math.PI * request.params.number1 * request.params.number1;
    return area;
}       
);
//require('./01bark.js');