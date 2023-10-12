var textName1 = "myName";
var textAge = 10;


function create() {
    var Pet = Parse.Object.extend("Pet");
    mypet = new Pet();
    
    mypet.set("textName2", document.getElementById("name").value);
    mypet.set("agePet2String", document.getElementById("agePet2String").value);

    mypet.save().then(function(pet){
         console.log('Pet created successful with name: ' + pet.get("textName") + ' and age: ' + pet.get("agePet2String"));
    }).catch(function(error){
         console.log('Error: ' + error.message);
    });
}
function read1Distinct() {
     
     query = new Parse.Query("Pet");
     
     query.distinct("textName").then(function(results){
         if(results){
            console.log('Pet found successful with name: ' + results);
         } else {
            console.log("Nothing found, please try again");
         }
     }).catch(function(error){
         console.log("Error: " + error.code + " " + error.message);       
     });
 }

 function read2equalTo() {
     
    query = new Parse.Query("Pet");
    query.equalTo("textName2", textName1); //textName2 Колонка в классе "Pet", textName1 Значение в колонке 
    query.first().then(function(pet){
        if(pet){
           console.log('Pet found successful with name: ' + pet.get("textName") + ' and age: ' + pet.get("agePet2String"));
        } else {
           console.log("Nothing found, please try again");
        }
    }).catch(function(error){
        console.log("Error: " + error.code + " " + error.message);       
    });
}

document.getElementById("createButton1").addEventListener("click", function () {
		create();
});
document.getElementById("ReadButton1").addEventListener("click", function () {
    read1Distinct();
});

document.getElementById("ReadButton2").addEventListener("click", function () {
    read2equalTo();
});


