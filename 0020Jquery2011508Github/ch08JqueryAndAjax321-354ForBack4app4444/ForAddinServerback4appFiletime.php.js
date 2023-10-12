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
        var name = "time.php";
        console.log(name + "time.php");
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

document.getElementById("FileXMLSave").addEventListener("click", async function () {
    createParseFile();
    
        
}); 