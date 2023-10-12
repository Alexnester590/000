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
//001 SecretCodePage
Parse.Cloud.define("SetSecretCodePageS", async (request) => {
	function SecretCodePageS() {
        var Code = 23; 
        console.log(Code);
        return Code;
    }
	function displayCode(Code) {
        console.log("Your new Ship is a makeShip11111" + Code);
        var Code1 = new Parse.Object("Runner");
        Code1.set("SecretCodePage", Code);
        Code1.save();
    }
    
    var carToSell = SecretCodePageS();
    displayCode(carToSell);
});    
Parse.Cloud.define("GetSecretCodePageS", async (request) => {
    let query = new Parse.Query("Runner");
    // query.equalTo("location1",true);
    // query.descending("title");
    return await query.find();
});

// 002 SetGreenPlanetS
Parse.Cloud.define("SetGreenPlanetS", async (request) => {
	function AddGreenPlanet() {

        var Planet = {
            getElementById: "greenplanet",
            Phrase: "Red Alert: hit by phaser fire!",
            setAttribute1: "class",
            setAttribute2: "redtext",
        };
        console.log(Planet);
        return Planet;
    }
	function displayAndSavePlanet(Planet) {
        console.log("Your new Planet is a AddGreenPlanet11111" + Planet);
        var Planet555 = new Parse.Object("Planet");
        Planet555.set("getElementById", Planet.getElementById);
        Planet555.set("Phrase", Planet.Phrase);
        Planet555.set("setAttribute1", Planet.setAttribute1);
        Planet555.set("setAttribute2", Planet.setAttribute2);
        
        Planet555.save();
    }
    
    var carToSell = AddGreenPlanet();
    displayAndSavePlanet(carToSell);
        
});
Parse.Cloud.define("GetGreenPlanetS", async (request) => {
    let query = new Parse.Query("Planet");
    // query.equalTo("location1",true);
    // query.descending("title");
    return await query.find();
});

// 003 SetGreenPlanetS
Parse.Cloud.define("SetaddSongsS", async (request) => {
	function AddSongs() {

        var Songs = {
            song1: "Blue Suede Strings, by Elvis Pagely",
            song2: "Great Objects on Fire, by Jerry JSON Lewis",
            song3: "I Code the Line, by Johnny JavaScript",
            
        };
        console.log(Songs);
        return Songs;
    }
	function displayAndSaveSongs(Songs) {
        console.log("Your new Planet is a AddGreenPlanet11111" + Songs);
        var Songs555 = new Parse.Object("Songs");
        Songs555.set("song1", Songs.song1);
        Songs555.set("song2", Songs.song2);
        Songs555.set("song3", Songs.song3);
        
        
        Songs555.save();
    }
    
    var carToSell = AddSongs();
    displayAndSaveSongs(carToSell);
        
});
Parse.Cloud.define("GetaddSongsS", async (request) => {
    let query = new Parse.Query("Songs");
    // query.equalTo("location1",true);
    // query.descending("title");
    return await query.find();
});