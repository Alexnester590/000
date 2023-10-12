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
    
});

// 0041CarWithDriveMetodExp 1car
Parse.Cloud.define("SetCarWithDriveMetodExpS", async (request) => {
    var fiat = {
		make: "Fiat",
		model: "500",
		year: 1957,
		drive: function () {
            var year1 = this.year +1;
            console.log("year1111 " + year1);
            console.log("Zoom zoom!1111");
		}
	}
    
    fiat.drive();
    console.log("fiat2222 " + fiat);
    console.log("fiat3333 " + fiat.drive());

    function CarWithDriveMetodExp() {
        var fiat = {
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
        console.log("Fiat5555" + fiat);
        console.log("Fiat6666" + fiat.drive());
        return fiat;
    }
	function displayCar(fiat) {
        console.log("Your new Ship is a makeShip7777" + fiat);
        var Code1 = new Parse.Object("Runner");
        Code1.set("Fiat8888", fiat);
        Code1.set("Fiat9999", fiat.drive());
        Code1.save();
    }
    
    var carToSell = CarWithDriveMetodExp();
    displayCar(carToSell);
    Parse.Cloud.define("GetCarWithDriveMetodExpS", async (request) => {
        let query = new Parse.Query("Runner");
        // query.equalTo("location1",true);
        // query.descending("title");
        return await query.find();
    });
       
});


