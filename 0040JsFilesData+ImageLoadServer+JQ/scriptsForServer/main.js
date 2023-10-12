const express = require("express");
const gm = require("gm");
require('./0050JSImageappend+cropGMServer4444');
require('./0020JSFunctionHello');
require('./0030FunctionAllChaptersServerFileForCloud4444.js');
require('./main0.js');
//require('./main1httpRequestcropAwait.js');
//require('./main1httpRequestcropReturn.js');
const Image = require("parse-image");
const httpRequest = require('request');
const fs = require('fs');

// Parse.Cloud.define('uploadImage2', function (request, response) {

//     var FileImage = new Parse.Object("Runner2");
//     var url = "http://parsefiles.back4app.com/ozuldPbgHohaEiLI7mE66hYYlNeRItGU2ii7pvXu/a567a014e0caf6b5c292f12e79cc7b23_furry_friend.jpg";
//     var gmstate0 = gm(url);
//     var gmstate1 = gm(url);
//     var gmstate2 = gm(url);
//     var gmstate3 = gm(url);
//     var gmstate4 = gm(url);
//     var gmstate5 = gm(url);
//     var gmstate6 = gm(url);
//     var gmstate7 = gm(url);
//     var gmstate8 = gm(url);
//     var gmstate9 = gm(url);
//     var gmstate10 = gm(url);
//     var gmstate11 = gm(url);
//     var gmstate12 = gm(url);
//     console.log(gmstate12 + 'Hooray1111111!')
//     var format, originalHeight, originalWidth, newHeight, newWidth;
//     var file1 = request.params.imageData0;
//     const bestSolutions = [];
//     var app0 = 10;
//     var app5 = file1/app0; //31
//     console.log(app5 + 'app5');
//         for (var i = 0; i < app0; i++) {
//             var app6 = app5 * i;
//             console.log(app6 + 'app6');
//         }
//     gmstate0
//         .crop(209, app5, 0, 0)
//         .write('q' + 0 + '.jpg', function (err) {
//             if (!err) console.log('done563');
//         })
//     gmstate1
//             .crop(209, app5, 0, 31)
//             .write('q' + 1 + '.jpg', function (err) {
//                 if (!err) console.log('done563');
//             })
//         gmstate2
//             .crop(209, app5, 0, 31*2)
//             .write('q' + 2 + '.jpg', function (err) {
//                 if (!err) console.log('done564');
//             })
//             gmstate3
//             .crop(209, app5, 0, 31*3)
//             .write('q' + 3 + '.jpg', function (err) {
//                 if (!err) console.log('done564');
//             })
//             gmstate4
//             .crop(209, app5, 0, 31*4)
//             .write('q' + 4 + '.jpg', function (err) {
//                 if (!err) console.log('done564');
//             })
//             gmstate5
//             .crop(209, app5, 0, 156)
//             .write('q' + 5 + '.jpg', function (err) {
//                 if (!err) console.log('done564');
//             })
//             gmstate6
//             .crop(209, app5, 0, 187)
//             .write('q' + 6 + '.jpg', function (err) {
//                 if (!err) console.log('done564');
//             })
//             gmstate7
//             .crop(209, app5, 0, 218)
//             .write('q' + 7 + '.jpg', function (err) {
//                 if (!err) console.log('done564');
//             })
//             gmstate8
//             .crop(209, app5, 0, 249)
//             .write('q' + 8 + '.jpg', function (err) {
//                 if (!err) console.log('done564');
//             })
//             gmstate9
//             .crop(209, app5, 0, 280)
//             .write('q' + 9 + '.jpg', function (err) {
//                 if (!err) console.log('done564');
//             })
            
// for (var i = 0; i < 10; i++) {
    
//     for (var j = 0; j < 3; j++) {

//         bestSolutions.push('q' + i + '.jpg');
//     }   
       
// }
//     gmstate12
//             .append('q0.jpg')
//             .append('q0.jpg')
//             .append('q0.jpg')
//             .append('q1.jpg')
//             .append('q1.jpg')
//             .append('q1.jpg')
//             .append('q2.jpg')
//             .append('q3.jpg').append('q2.jpg').append('q2.jpg')
//             .append('q4.jpg').append('q4.jpg').append('q4.jpg')
//             .append('q5.jpg').append('q5.jpg').append('q5.jpg')
//             .append('q6.jpg').append('q6.jpg').append('q6.jpg')
//             .append('q7.jpg').append('q7.jpg').append('q7.jpg')
//             .append('q8.jpg').append('q8.jpg').append('q8.jpg')
//             .append('q9.jpg').append('q9.jpg').append('q9.jpg')
//             .write('2.png', function (err) {
//                 if (!err) console.log('Hooray2!');
//             });
//     console.log(bestSolutions)
//     console.log(bestSolutions.length)
//     let imageFileBuffer2 = fs.readFileSync('2.png');
//     gm(imageFileBuffer2);
//     //console.log("imageFileBuffer2 Hooray.png" + imageFileBuffer2);
//     var base552 = imageFileBuffer2.toString("base64");
//     var scaled552 = new Parse.File("myfile552.txt", { base64: base552 });
//     scaled552.save();
//     FileImage.set("picture2", scaled552);
//     FileImage.save();
// });