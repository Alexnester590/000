const express = require("express");
const gm = require("gm");


const Image = require("parse-image");
const httpRequest = require('request');
const fs = require('fs');

Parse.Cloud.define('uploadImage2', function (request, response) {

    var FileImage = new Parse.Object("Runner2");
    var url = "http://parsefiles.back4app.com/ozuldPbgHohaEiLI7mE66hYYlNeRItGU2ii7pvXu/a567a014e0caf6b5c292f12e79cc7b23_furry_friend.jpg";
    var gmstate0 = gm(url);
    var gmstate1 = gm(url);
    var gmstate2 = gm(url);
    var gmstate3 = gm(url);
    var gmstate4 = gm(url);
    var gmstate5 = gm(url);
    var gmstate6 = gm(url);
    var gmstate7 = gm(url);
    var gmstate8 = gm(url);
    var gmstate9 = gm(url);
    var gmstate10 = gm(url);
    var gmstate11 = gm(url);
    var gmstate12 = gm(url);
    console.log(gmstate12 + 'Hooray1111111!')
    var format, originalHeight, originalWidth, newHeight, newWidth;
    var file1 = request.params.imageData0;
    const bestSolutions = [];
    
    const array = [];
    const gmstate = [];
    var app0 = 10;
    //console.log(file1 + 'Hooray1111111!')
    
    
    var app5 = file1/app0; //31
    console.log(app5 + 'app5');
    for (var i = 0; i < app0; i++) {
         var app6 = app5 * i;
         console.log(app6 + 'app6');

         
     }
     
     
    //      //console.log(array[i] + 'q' + i + '.jpg');   
    //      gmstate[i]
    //         .crop(209, app5, 0, app6)
    //         .write('q' + i + '.jpg', function (err) {
    //             if (!err) console.log('done111 ' + i );
    //         })
    //         bestSolutions.push('q' + i + '.jpg');
    // }
    
    // gmstate0
    // .crop(209, app5, 0, 100)
    // .write('q' + 3 + '.jpg', function (err) {
    //     if (!err) console.log('done563');
    // })
    // gmstate1
    //         .crop(209, app5, 0, 200)
    //         .write('q' + 3 + '.jpg', function (err) {
    //             if (!err) console.log('done563');
    //         })
    //     gmstate2
    //         .crop(209, app5, 0, 250)
    //         .write('q' + 4 + '.jpg', function (err) {
    //             if (!err) console.log('done564');
    //         })
    
    gmstate12
            .append('q1.jpg')
            .append('q2.jpg')
            .append('q3.jpg')
            .append('q4.jpg')
            .write('2.png', function (err) {
                if (!err) console.log('Hooray2!');
            });
           
            
       // for (var j = 0; j < 3; j++) {
    
            //bestSolutions.push('q' + i + '.jpg');
       // }   
    //}
    // console.log(bestSolutions)
    // console.log(bestSolutions.length)

    //var gmstate2 = gm('2.png');
    //  gmstate2.append(bestSolutions[1]);
    //  gmstate2.append(bestSolutions[2]);
    //  gmstate2.append(bestSolutions[3]);
        
        
        // for (var i = 1; i < bestSolutions.length; i++) {
        //     gmstate2.append(bestSolutions[0]);
        //     gmstate2.append(bestSolutions[0]);
        //     gmstate2.append(bestSolutions[1]);
        //     gmstate2.append(bestSolutions[1]);
        //     gmstate2.append(bestSolutions[1]);
        //     gmstate2.append(bestSolutions[2]);
        //     gmstate2.append(bestSolutions[2]);
        //     gmstate2.append(bestSolutions[2]);
        //     gmstate2.append(bestSolutions[3]);
        //     gmstate2.append(bestSolutions[3]);
        //     gmstate2.append(bestSolutions[3]);
            
        // }
        
        
       
    // gmstate2.write('Hooray.png', function (err) {
    //     if (!err) console.log('gmstate2.write');
    // });
    
    // var gmstate2 = gm(bestSolutions[0]);
    // console.log(bestSolutions.length)
    //  for (var i = 1; i < bestSolutions.length; i++) {
    //     gmstate2.append(bestSolutions[i]);
    //     }
    //  gmstate2.write('Hooray.png', function (err) {
    //      if (!err) console.log('Hooray!');
    //  });

    // gm('Hooray.png').identify(function (err, value) {
    //     console.log(value);

    //     if (err) {
    //         console.log(err);
    //     }
    // });
    let imageFileBuffer2 = fs.readFileSync('2.png');
    gm(imageFileBuffer2);
    //console.log("imageFileBuffer2 Hooray.png" + imageFileBuffer2);
    var base552 = imageFileBuffer2.toString("base64");
    var scaled552 = new Parse.File("myfile552.txt", { base64: base552 });
    scaled552.save();
    FileImage.set("picture2", scaled552);
    FileImage.save();



    // gmstate.append(url);
    // gmstate.write('2.png', function (err) {
    //     if (!err) console.log('Hooray2!');
    // });

    // gm('2.png').identify(function (err, value) {
    //     console.log(value);

    //     if (err) {
    //         console.log(err);
    //     }
    // });
    // let imageFileBuffer = fs.readFileSync('2.png');
    // gm(imageFileBuffer);
    // //console.log("..scale to 6666666 " + imageFileBuffer);
    // var base55 = imageFileBuffer.toString("base64");
    // //console.log("..scale to 7777 " + base55);
    // var scaled55 = new Parse.File("myfile55.txt", { base64: base55 });
    // //console.log("..scale to 22222", scaled55);
    // scaled55.save();
    // FileImage.set("picture2", scaled55);
    // FileImage.save();

});

