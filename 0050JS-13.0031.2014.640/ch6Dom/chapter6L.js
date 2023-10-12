async function AllDomL() {
		
	
	
	 const SetInit0 = await Parse.Cloud.run('SetSecretCodePageS');
	const GetInit0 = await Parse.Cloud.run('GetSecretCodePageS');

	const SetInit1 = await Parse.Cloud.run('SetGreenPlanetS');
	const GetInit1 = await Parse.Cloud.run('GetGreenPlanetS');
	
	const SetaddSongs = await Parse.Cloud.run('SetaddSongsS');
	const GetaddSongs = await Parse.Cloud.run('GetaddSongsS');

	
}
AllDomL();





// function init1() {
// 	var planet = document.getElementById("greenplanet");
// 	planet.innerHTML = "Red Alert: hit by phaser fire!";
// 	planet.setAttribute("class", "redtext");
// }

// function init0() {
// 	var access = document.getElementById("code9");
// 	var code = access.innerHTML; 
// 	code = code + " midnight"; 
// 	alert(code);
// }
// function addSongs() {
// 	var song1 = document.getElementById("song1");
// 	var song2 = document.getElementById("song2");
// 	var song3 = document.getElementById("song3");
// 	song1.innerHTML = "Blue Suede Strings, by Elvis Pagely";
// 	song2.innerHTML = "Great Objects on Fire, by Jerry JSON Lewis";
// 	song3.innerHTML = "I Code the Line, by Johnny JavaScript";
// }
// window.onload = addSongs();
// window.onload = setTimeout(init1, 5000);
// window.onload = setTimeout(init0, 1000);


