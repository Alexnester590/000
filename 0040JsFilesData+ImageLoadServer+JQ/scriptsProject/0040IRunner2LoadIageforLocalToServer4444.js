
async function createParseFile000() {
    //FileImage.set("txtFirstName", document.getElementById("profilePhotoFileUpload").value);
    var FileImage = new Parse.Object("DataAndMedia");
    var fileUploadControl = document.getElementById("pic");
    //var fileUploadControl = $("#pic")[0];
    console.log("fileUploadControl 001 " + fileUploadControl + "!");
    console.log(fileUploadControl + " fileUploadControl 002 ");
    //gm('1.jpg');
    if (fileUploadControl.files.length > 0) {

        var file = fileUploadControl.files[0];
        console.log("file 003 " + file + "!");
        console.log(file + " file 004 ");
        var name = "Image000.txt";
        console.log("name 005 " + name + "!");

        var parseFile = new Parse.File(name, file);
        
        //put this inside if {
        parseFile.save().then(function () {
            
        }, function (error) {
           
        });
        FileImage.set("picture001", parseFile);
        FileImage.save();
        var result = await FileImage.save();
        var profilePhoto = FileImage.get("picture001");
        console.log('profilePhoto.url() 006: ' + profilePhoto.url());
        document.getElementById("Image001").innerHTML += 'New objectId 001: ' + '-' + result.id + ('<br>');
        document.getElementById("Image002").innerHTML += 'New objectURL 002: ' + '-' + profilePhoto.url() + ('<br>');
        document.getElementById("Image003").innerHTML += profilePhoto.url();
        console.log('New objectId 007: ' + result.id);
        $("#myLink001").html('<a href = "' + profilePhoto.url() + '">#myLink001</a>')
        $("#myLink002").html('<img src="' + profilePhoto.url() + '">')
              

    }
}

async function createParseFile010() {
    var FileData010 = new Parse.Object("DataAndMedia");
    const base64 = "V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=";
    const parseFileData1 = new Parse.File("myFileData010.txt", { base64: base64 });
    parseFileData1.save().then(function () {
    }, function (error) {
    });

    FileData010.set("ColumnFileData010", parseFileData1);
    FileData010.save();
    var result010 = await FileData010.save();
    var fileData010 = FileData010.get("ColumnFileData010");
    console.log('New object created with objectId 010: ' + fileData010.url());
    document.getElementById("Data010").innerHTML += 'New objectId 001: ' + '-' + result010.id + ('<br>');

    document.getElementById("Data011").innerHTML += fileData010.url() + ('<br>');
    document.getElementById("Data012").innerHTML += fileData010 + ('<br>');
    $("#myLink010").html('<a href = "' + fileData010.url() + '">#myLink001</a>')
    $("#myLink011").html('<img src="' + fileData010.url() + '">')
    $("#myLink012").load(fileData010.url());


}
async function createParseFile020() {
    var FileData030 = new Parse.Object("DataAndMedia");
    
    //const bytes = [0xBE, 0xEF, 0xCA, 0xFE];
    //const parseFile3 = new Parse.File("myfile2.txt", bytes);
    const bytes2 = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5];
    const parseFile3 = new Parse.File('Array.txt', bytes2, 'text/plain');

    parseFile3.save().then(function () {
        
    }, function (error) {
        });

    FileData030.set("picture2", parseFile3);
    FileData030.save();
    var result = await FileData030.save();

}
async function unloadParseFile030() {
    var FileImage = new Parse.Object("DataAndMedia");
    var profilePhoto = FileImage.get("picture");
    const GameScore = Parse.Object.extend("DataAndMedia");
    const query = new Parse.Query(GameScore);
    const results = await query.find();
    console.log("results.length " + results.length + " scores.");
    for (let i = 0; i < results.length; i++) {
        let object = results[i];
        document.getElementById("runner5").innerHTML += object.get("picture") + '-' + object.get('txtLastName') + ('<br>');
    }
}    	

unloadParseFile030();

document.getElementById("btnSave3").addEventListener("click", async function () {
    createParseFile000();
    createParseFile010();
    createParseFile020();
        
}); 











