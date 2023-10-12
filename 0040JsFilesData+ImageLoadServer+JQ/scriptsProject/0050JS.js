let image = document.getElementById("image");

document.getElementById("btnSave3").addEventListener("click", async function () {
    createParseFile2();// uploadImageServer
    
});

async function createParseFile2() {
    var FileImage = new Parse.Object("Runner2");
    var fileUploadControl = document.getElementById("pic");
    var name3;
    console.log(fileUploadControl + " fileUploadControl");
    if (fileUploadControl.files.length > 0) {

        var file = fileUploadControl.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = function (e) {
            console.log(e.target.result);
            var image = new Image();
            image.src = reader.result;
            image.onload = function () {
                
                console.log(reader.result);
                console.log(image.width + 'x' + image.height);
                name3 = image.height;
                console.log(name3);
                console.log(this.width + 'x2' + this.height);
                var profilePhoto0 = reader.result;
                console.log(profilePhoto0 + " profilePhoto0");
                //Parse.Cloud.run('uploadImage0', { imageData0: profilePhoto0 });
            };
            
        };
        
        console.log(name3 + " file");
        console.log(file + " file");
        var name = "photo.txt";

        console.log(name + " name");
        var parseFile = new Parse.File(name, file);


        parseFile.save()
            .then(function () {
            }, function (error) {
            });
        FileImage.set("picture", parseFile);
        
        FileImage.save();
        var result = await FileImage.save();
        console.log(result.id + " profilePhoto000");
        var profilePhoto = FileImage.get("picture");

        console.log(" profilePhoto.url()" + profilePhoto.url());

        console.log(profilePhoto + " profilePhoto");
        console.log(result.id + " profilePhoto");
        document.getElementById("Image001").innerHTML += 'New object created with objectId11111: ' + '-' + result.id + ('<br>');
        document.getElementById("Image002").innerHTML += 'New object created with objectURL22222: ' + '-' + profilePhoto.url() + ('<br>');
        document.getElementById("Image003").innerHTML += profilePhoto.url();
        Parse.Cloud.run('uploadImage8888', { imageData0: name3, imageData1: profilePhoto.url()});
        //arse.Cloud.run('uploadImage3', { imageData0: name3 });
    }
}