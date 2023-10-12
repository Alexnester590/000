
phoneNumber1 = validate("356-5982");
console.log(phoneNumber1);
phoneNumber2 = validate2("356-5982");
console.log(phoneNumber2);
phoneNumber3 = validate3("3565982");
console.log(phoneNumber3);
phoneNumber4 = validate4("3565982");
console.log(phoneNumber4);

function validate(phoneNumber) {
    //alert("highScore: " + phoneNumber.length);
    if (phoneNumber.length !== 8) {
        //alert("highScore: " + phoneNumber.length);
        return false;
    }
    for (var i = 0; i < phoneNumber.length; i++) {
        if (i !== 3) {
            //alert("highScore: " + phoneNumber.charAt(i));
            if (isNaN(phoneNumber.charAt(i))) {

                return false;
            }
        }
        else if (phoneNumber.charAt(i) !== '-') {
            
            return false;
        }
        
    }
    return true;
}
function validate2(phoneNumber) {
    if (phoneNumber.length !== 8) {
        return false;
    }
    var first = phoneNumber.substring(0, 3);
    
    alert("highScore2: " + first);
    var second = phoneNumber.substring(4);
    if (phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second)) {
        alert("highScore2: " + first);
        return false;
    }
    console.log(first);
    return true;
}
function validate3(phoneNumber) {

    //alert("highScore: " + phoneNumber.length);
    if (phoneNumber.length > 8 ||
           phoneNumber.length < 7) {
        return false;
    }
    for (var i = 0; i < phoneNumber.length; i++) {
        if (i !== 3) {
            //alert("highScore: " + phoneNumber.charAt(i));
            if (isNaN(phoneNumber.charAt(i))) {

                return false;
            }
        }
        else if (phoneNumber.length === 8 &&
                    phoneNumber.charAt(i) !== '-') {
            return false;
        } else if (phoneNumber.length === 7 &&
                    isNaN(phoneNumber.charAt(i))) {
            return false;
        }

    }
    return true;
}
function validate4(phoneNumber) {
    if (phoneNumber.length > 8 ||
        phoneNumber.length < 7) {
        return false;
    }
    var first = phoneNumber.substring(0, 3);
    var second = phoneNumber.substring(phoneNumber.length - 4);
    if (isNaN(first) || isNaN(second)) {
        return false;
    }
    if (phoneNumber.length === 8) {
        return (phoneNumber.charAt(3) === "-");
    }
    return true;
}