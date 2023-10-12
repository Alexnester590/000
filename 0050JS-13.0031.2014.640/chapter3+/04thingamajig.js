function clunk(times) {
    var num = times;
    while (num > 0) {
        display("clunk");
        num = num - 1;
    }
}

function thingamajig(size) {
    var facky = 1;
    clunkCounter = 0;
    if (size == 0) {
        display("clank");
    } else if (size == 1) {
        display("thunk");
    } else {
        while (size > 1) {
            facky = facky * size;
            size = size - 1;
            alert("facky: " + facky);
            alert("size: " + size);
        }
        clunk(facky);
    }
}

function display(output) {
    console.log(output);
    alert("clunkCounter0: " + clunkCounter);
    clunkCounter = clunkCounter + 1;
    alert("clunkCounter1: " + clunkCounter);
}
//var clunkCounter = 0;
//thingamajig(0);
//console.log(clunkCounter);

//clunkCounter = 0;
//thingamajig(1);
//console.log(clunkCounter);

//clunkCounter = 0;
//thingamajig(2);
//console.log(clunkCounter);

clunkCounter = 0;
thingamajig(3);
console.log(clunkCounter);

//clunkcounter = 0;
//thingamajig(4);
//console.log(clunkcounter);


