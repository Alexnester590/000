Parse.Cloud.define("PrequalTaxi4carS", async (request) => {
    function prequal(car) {
        if (car.mileage > 10000) {
            return false;
        } else if (car.year > 1960) {
            return false;
        }
        return true;
    }
    
    var worthALook = prequal(request.params.number1);
    
    if (worthALook) {
        console.log("You gotta check out this " + request.params.number1.make + " " + request.params.number1.model);
    } else {
        console.log("You should really pass on the " + request.params.number1.make + " " + request.params.number1.model);
    }
    
    //
    // add a function to make it easier to generate the console output!
    //
    function isWorthALook(didQualify, car) {
        if (didQualify) {
            console.log("You gotta check out this " + car.make + " " + car.model);
        } else {
            console.log("You should really pass on the " + car.make + " " + car.model);
        }
    }
    isWorthALook(prequal(request.params.number1), request.params.number1);
    isWorthALook(prequal(request.params.number2), request.params.number2);
    isWorthALook(prequal(request.params.number3), request.params.number3);
    isWorthALook(prequal(request.params.number1), request.params.number4);

});


// RandomCarS
Parse.Cloud.define("RandomCarS", async (request) => {
    function makeCar() {
        
    
        var rand1 = Math.floor(Math.random() * request.params.makes.length);
        var rand2 = Math.floor(Math.random() * request.params.models.length);
        var rand3 = Math.floor(Math.random() * request.params.years.length);
        var rand4 = Math.floor(Math.random() * request.params.colors.length);
        var rand5 = Math.floor(Math.random() * 5);
        var rand6 = Math.floor(Math.random() * 2);
    
        var car = {
            make: request.params.makes[rand1],
            model: request.params.models[rand2],
            year: request.params.years[rand3],
            color: request.params.colors[rand4],
            passengers: rand5,
            convertible: request.params.convertible[rand6],
            mileage: 0
        };
        return car;
    }
    
    function displayCar(car) {
        console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
    }
    
    var carToSell = makeCar();
    displayCar(carToSell);
});


// 004CarWithDrive 1car
Parse.Cloud.define("SetCarWithDriveS", async (request) => {
    
    function CarWithDrive() {
        console.log("Your new car is a CarWithDriveS1111111 " + request.params.number1);
        var fiat = request.params.number1;
            
        return fiat;
    }
    function displayCar(fiat) {
        console.log("Your new car is a CarWithDriveS1111111 " + request.params.number1);
        var  Car1 = new Parse.Object("Runner");
        Car1.set("Fiat0001", request.params.number1);
        Car1.save();
    }
    
    var carToSell = CarWithDrive();
    displayCar(carToSell);
    Parse.Cloud.define("GetCarWithDriveS", async (request) => {
        let query = new Parse.Query("Runner");
        // query.equalTo("location1",true);
        // query.descending("title");
        return await query.find();
    });
    
    //console.log("Your new car is a 3333333 " + request.params.number1.stop());
    // request.params.number1.drive();
    // request.params.number1.start();
    // request.params.number1.drive();
    // request.params.number1.stop();
    // for (prop in request.params.number1) {
    //     console.log(prop + ": " + request.params.number1[prop]);
    // }
   
});

// 0041CarWithDriveMetodExp 1car
Parse.Cloud.define("SetCarWithDriveMetodExpS", async (request) => {
    var fiat1 = {
		make: "Fiat",
		model: "500",
		year: 1957,
		drive: function () {
            var year1 = this.year +1;
            console.log("year1111 " + year1);
            console.log("Zoom zoom!1111");
            return ("Zoom zoom!1111");
		}
	}
    
    fiat1.drive();
    console.log("fiat2222 " + fiat1);
    console.log("fiat3333 " + fiat1.drive());

    function displayCode1() {
        console.log("Your new Ship is a makeShip7777" + fiat1);
        var Code1 = new Parse.Object("Runner");
        Code1.set("Fiat88", fiat1);
        Code1.set("Fiat99", fiat1.drive());
        Code1.save();
    }
    
    
    displayCode1(fiat1);


    function CarWithDriveMetodExp() {
        var fiat2 = {
            make: "Fiat",
            model: "500",
            year: 1957,
            drive: function () {
                var year1 = this.year +1;
                console.log("year4444" + year1);
                console.log("Zoom zoom!2222");
                return ("Zoom zoom!3333");
            }
        } 
        console.log("Fiat5555" + fiat2);
        console.log("Fiat6666" + fiat2.drive());
        return fiat2;
    }
	function displayCode2(fiat2) {
        console.log("Your new Ship is a makeShip7777" + fiat2);
        var Code1 = new Parse.Object("Runner");
        Code1.set("Fiat8888", fiat2);
        Code1.set("Fiat9999", fiat2.drive());
        Code1.save();
    }
    
    
    displayCode2(CarWithDriveMetodExp());

    

    Parse.Cloud.define("GetCarWithDriveMetodExpS", async (request) => {
        let query = new Parse.Query("Runner");
        // query.equalTo("location1",true);
        // query.descending("title");
        return await query.find();
    });
       
});

// 005SevenBallL
// Parse.Cloud.define("SevenBallS", async (request) => {
//     request.params.SevenBallS.shake();
//     console.log(request.params.SevenBallS.look());

//     SevenBallS.shake();
//     console.log(request.params.SevenBallS.look());

//     SevenBallS.shake();
//     console.log(request.params.SevenBallS.look());
   
// });

// 006CarWithDrive4S
// Parse.Cloud.define("CarWithDrive4S", async (request) => {
//     request.params.fiat.start();
//     request.params.fiat.drive();
//     request.params.fiat.stop();

//     request.params.cadi.start();
//     request.params.cadi.drive();
//     request.params.cadi.stop();

//     request.params.chevy.start();
//     request.params.chevy.drive();
//     request.params.chevy.stop();

//     request.params.taxi.start();
//     request.params.taxi.drive();
//     request.params.taxi.stop();
// });



// 007CarWithFuel 1car

Parse.Cloud.define("CarWithFuelS", async (request) => {
    // request.params.fiat.start();
    // request.params.fiat.drive();
    // request.params.fiat.addFuel(2);
    // request.params.fiat.start();
    // request.params.fiat.drive();
    // request.params.fiat.drive();
    // request.params.fiat.drive();
    // request.params.fiat.stop();
   
});
