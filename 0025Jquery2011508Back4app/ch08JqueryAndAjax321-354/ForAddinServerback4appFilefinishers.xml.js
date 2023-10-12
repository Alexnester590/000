async function createParseFile() {
    //FileImege.set("txtFirstName", document.getElementById("profilePhotoFileUpload").value);
    var FileImege = new Parse.Object("RunnerXMLFilesForGitHab");
    var fileUploadControl = document.getElementById("FileXML");
    //var fileUploadControl = $("#pic")[0];
    console.log(fileUploadControl + " fileUploadControl");
    //gm('1.jpg');
    if (fileUploadControl.files.length > 0) {

        var file = fileUploadControl.files[0];
        console.log(file + " file");
        var name = "finishers.xml";
        console.log(name + "finishers.xml");
        var parseFile = new Parse.File(name, file);
        
        //put this inside if {
        parseFile.save().then(function () {
            // The file has been saved to Parse.
        }, function (error) {
            // The file either could not be read, or could not be saved to Parse.
        });
        
        // Be sure of ur parameters name
        // prod is extend of my class in parse from this: var prod = new products();

        FileImege.set("finishers1", parseFile);
        FileImege.save();
        var result = await FileImege.save();
        
        var profilePhoto = FileImege.get("finishers1");
        console.log(profilePhoto.url() + "New object created with objectId finishers.xml: ");
        
                
        document.getElementById("runner55").innerHTML += 'New object created with objectId11111: ' + '-' + result.id + ('<br>');
        document.getElementById("runner55").innerHTML += 'New object created with objectURL22222: ' + '-' + profilePhoto.url() + ('<br>');
        document.getElementById("runner555").innerHTML += profilePhoto.url();
        document.getElementById("runner5555").innerHTML += 'New object created with objectURL33333: '  + ('<br>');
        console.log(result.id + "New object created with objectId finishers.xml: ");
        
        $("#myLink5").html('<a href = "' + profilePhoto.url() + '">555555555</a>')
        $("#myLink25").html('<img src="' + profilePhoto.url() + '">')
              

    }
}

async function createParseFile2() {
    //FileImege.set("txtFirstName", document.getElementById("profilePhotoFileUpload").value);
    var FileImege2 = new Parse.Object("Runner2");
    const base64 = "V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=" + "V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=";
    const parseFile2 = new Parse.File("myfile.txt", { base64: base64 });


    parseFile2.save().then(function () {
        // The file has been saved to Parse.
    }, function (error) {
        // The file either could not be read, or could not be saved to Parse.
    });

    FileImege2.set("picture2", parseFile2);
    FileImege2.save();
    var result = await FileImege2.save();
    var profilePhoto2 = FileImege2.get("picture2");
    console.log("createParseFile2(): New object created with objectId: picture2 " + profilePhoto2.url());
    document.getElementById("runner55").innerHTML += profilePhoto2.url() + ('<br>');
    document.getElementById("runner55").innerHTML += profilePhoto2 + ('<br>');
    $("#myLink3").html('<img src="' + profilePhoto2.url() + '">')


}
async function createParseFile3() {
    //FileImege.set("txtFirstName", document.getElementById("profilePhotoFileUpload").value);
    var FileImege3 = new Parse.Object("Runner2");
    
    //const bytes = [0xBE, 0xEF, 0xCA, 0xFE];
    //const parseFile3 = new Parse.File("myfile2.txt", bytes);
    const bytes2 = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5];
    const parseFile3 = new Parse.File('popeye.txt', bytes2, 'text/plain');

    parseFile3.save().then(function () {
        // The file has been saved to Parse.
    }, function (error) {
        // The file either could not be read, or could not be saved to Parse.
    });

    FileImege3.set("picture2", parseFile3);
    FileImege3.save();
    var result = await FileImege3.save();

}
async function unloadParseFile() {
    var FileImege = new Parse.Object("Runner2");
    var profilePhoto = FileImege.get("picture");
    const GameScore = Parse.Object.extend("Runner2");
    const query = new Parse.Query(GameScore);
    const results = await query.find();
    console.log("unloadParseFile(): Successfully retrieved " +  results.length + " scores. ");

    for (let i = 0; i < results.length; i++) {
        let object = results[i];
        document.getElementById("runner5").innerHTML += object.get("picture") + '-' + object.get('txtLastName') + ('<br>');
    }
}    	
unloadParseFile();

document.getElementById("FileXMLSave").addEventListener("click", async function () {
    createParseFile();
    createParseFile2();
    createParseFile3();
        
}); 