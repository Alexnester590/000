async function PrequalTaxi4carL() {

	var chevy = {
		make: "Chevy",
		model: "Bel Air",
		year: 1957,
		color: "red",
		passengers: 2,
		convertible: false,
		mileage: 1021
	};
	
	var fiat = {
		make: "Fiat",
		model: "500",
		year: 1957,
		color: "Medium Blue",
		passengers: 2,
		convertible: false,
		mileage: 88000
	};
	
	var cadi = {
		make: "GM",
		model: "Cadillac",
		year: 1955,
		color: "tan",
		passengers: 5,
		convertible: false,
		mileage: 12892
	};
	
	
	var taxi = {
		make: "WebVille Motors",
		model: "Taxi",
		year: 1955,
		color: "yellow",
		passengers: 4,
		convertible: false,
		mileage: 281341
	};
	
	const params = { number1: chevy, number2: fiat, number3: cadi, number4: taxi }
	const sum = await Parse.Cloud.run('PrequalTaxi4carS', params);
}
PrequalTaxi4carL();

// 003RandomCar

async function RandomCarL() {

	var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
	var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
	var years = [1955, 1957, 1948, 1954, 1961];
	var colors = ["red", "blue", "tan", "yellow", "white"];
	var convertible = [true, false];
	
	
	const params = { makes: makes, models: models, years: years, colors: colors, convertible: convertible }
	const sum = await Parse.Cloud.run('RandomCarS', params);
}
RandomCarL();

// 004CarWithDrive1CarandProps

async function CarWithDriveL() {

	var fiat = {
		make: "Fiat",
		model: "500",
		year: 1957,
		color: "Medium Blue",
		passengers: 2,
		convertible: false,
		mileage: 88000,
		started: false,
		start: function () {
			this.started = true;
		},
		stop: function () {
			this.started = false;
		},
		drive: function () {
			//
			// if we use started instead of this.started, 
			// our code doesn't work!
			//
			if (this.started) {
				console.log("Zoom zoom!");
			} else {
				console.log("You need to start the engine first.");
			}
		}
	};
	
	
	const params = { number1: fiat }
	const sum = await Parse.Cloud.run('SetCarWithDriveS', params);

	const sum1 = await Parse.Cloud.run('GetCarWithDriveS');
}
CarWithDriveL();

async function CarWithDriveMetodExpL() {

	const sum = await Parse.Cloud.run('SetCarWithDriveMetodExpS');

	const sum1 = await Parse.Cloud.run('GetCarWithDriveMetodExpS');
}
CarWithDriveMetodExpL();




// 005eightball

async function SevenBallL() {

	var SevenBall = {
		index: 0,
		advice: ["yes", "no", "maybe", "not a chance"],
		shake: function () {
			this.index = this.index + 1;
			if (this.index >= this.advice.length) {
				this.index = 0;
			}
		},
		look: function () {
			return this.advice[this.index];
		}
	};	
	
	
	const params = { SevenBall: SevenBall}
	const sum = await Parse.Cloud.run('SevenBallS', params);
}
SevenBallL();


// 006CarWithDrive 4car 
async function CarWithDrive4L() {
	var fiat = {
		make: "Fiat",
		model: "500",
		year: 1957,
		color: "Medium Blue",
		passengers: 2,
		convertible: false,
		mileage: 88000,
		started: false,
		start: function () {
			this.started = true;
		},
		stop: function () {
			this.started = false;
		},
		drive: function () {
			if (this.started) {
				alert(this.make + " " +
					this.model + " goes zoom zoom!");
			} else {
				alert("You need to start the engine first.");
			}
		}
	};
	var cadi = {
		make: "GM",
		model: "Cadillac",
		year: 1955,
		color: "tan",
		passengers: 5,
		convertible: false,
		mileage: 12892,
		started: false,
		start: function () {
			this.started = true;
		},
		stop: function () {
			this.started = false;
		},
		drive: function () {
			if (this.started) {
				alert(this.make + " " +
					this.model + " goes zoom zoom!");
			} else {
				alert("You need to start the engine first.");
			}
		}
	};
	var chevy = {
		make: "Chevy",
		model: "Bel Air",
		year: 1957,
		color: "red",
		passengers: 2,
		convertible: false,
		mileage: 1021,
		started: false,
		start: function () {
			this.started = true;
		},
		stop: function () {
			this.started = false;
		},
		drive: function () {
			if (this.started) {
				alert(this.make + " " +
					this.model + " goes zoom zoom!");
			} else {
				alert("You need to start the engine first.");
			}
		}
	};
	var taxi = {
		make: "WebVille Motors",
		model: "Taxi",
		year: 1955,
		color: "yellow",
		passengers: 4,
		convertible: false,
		mileage: 281341,
		started: false,
		start: function () {
			this.started = true;
		},
		stop: function () {
			this.started = false;
		},
		drive: function () {
			if (this.started) {
				alert(this.make + " " +
					this.model + " goes zoom zoom!");
			} else {
				alert("You need to start the engine first.");
			}
		}
	};

	const params = { number1: fiat, number2: cadi, number3: chevy, number4: taxi }
	const sum = await Parse.Cloud.run('CarWithDrive4S', params);
}
//CarWithDrive4L();

// 007CarWithFuel 1car

async function CarWithFuelL() {

	var fiat = {
		make: "Fiat",
		model: "500",
		year: 1957,
		color: "Medium Blue",
		passengers: 2,
		convertible: false,
		mileage: 88000,
		fuel: 0,
		started: false,

		start: function () {
			if (this.fuel == 0) {
				alert("The car is on empty, fill up before starting!");
			} else {
				this.started = true;
			}
		},

		stop: function () {
			this.started = false;
		},

		drive: function () {
			if (this.started) {
				if (this.fuel > 0) {
					alert(this.make + " " +
						this.model + " goes zoom zoom!");
					this.fuel = this.fuel - 1;
				} else {
					alert("Uh oh, out of fuel.");
					this.stop();
				}
			} else {
				alert("You need to start the engine first.");
			}
		},

		addFuel: function (amount) {
			this.fuel = this.fuel + amount;
		}
	};

	const params = { fiat: fiat}
	const sum = await Parse.Cloud.run('CarWithFuelS', params);
}
CarWithFuelL();

