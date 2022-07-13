//varibles here
var holder = [];
var key = [];
var genedKey;
var userReply;
var nwPW;


//window.alert("Generating a key");
for (let i = 0; i < 4; i++) {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    nmGen(getRandomInt(3));
}

// num gen function
function nmGen(rndNm) {

    switch (rndNm) {
        case 0: //Include CAP letters A-Z 65-90
            function getRandomIntInclusive(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
            }
            var aTiU = getRandomIntInclusive(65, 90);
            chrU = String.fromCharCode(aTiU);
            holder.push(chrU);
            break;
        case 1: //lowercase 97 - 122
            function getRandomIntInclusive(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
            }
            var aTiL = getRandomIntInclusive(97, 122);
            chrL = String.fromCharCode(aTiL);
            holder.push(chrL);
            break;
        case 2: // 0-9
            function getRandomIntInclusive(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
            }
            var x = getRandomIntInclusive(0, 10);
            // expected output: 0-10
            holder.push(x);
            break;

        default:
    }
} // num gen

genedKey = holder.join("");

confirm(genedKey);

//confirm function
function confirm(assignedKey) {
    let disp = assignedKey;
    let chk = assignedKey;
    let userEntry = prompt("Enter the key that is displayed \n" + disp);

    function recurse() {
        if (userEntry != chk) {
            // if the info is false. The user is asked to re-enter info until the correct one is entered
            let doubleCk = prompt("Incorrect \nRe-enter the key: " + disp);
            userEntry = doubleCk;
            recurse();
        } else {
            // stop calling recurse()
            alert("key has been set to: " + disp);
        }
    }
    recurse(chk);
} // confirm func


//error--------------------------------------------------------------------
//end of error-----------------------------------------------------------------------

function customPW() {
    let customPwArray = [];
    let pwLth;
    let clr = 1;
    let count = 0;
    let tmp;
    nwPW = prompt("Enter a new password\n The length of the pasword must be 6-20 characters \n Allowed special characters: !,?,_,*");
    customPwArray = Array.from(nwPW);
    pwLth = customPwArray.length;

    for (let j = 0; j < pwLth; j++) {
        tmp = customPwArray[j];
        if (tmp.charCodeAt() == 32 || tmp.charCodeAt() == 47 || tmp.charCodeAt() == 64 || tmp.charCodeAt() == 126) {
            window.alert("Error you entered a Space ");
            customPW();
        } else if (tmp.charCodeAt() <= 34 && tmp.charCodeAt() >= 41) {
            window.alert("Error at: " + customPwArray[j]);
        } else if ((tmp.charCodeAt() <= 43 && tmp.charCodeAt() >= 45)) {
            window.alert("Error at: " + customPwArray[j]);
        } else if ((tmp.charCodeAt() <= 58 && tmp.charCodeAt() >= 62)) {
            window.alert("Error at: " + customPwArray[j]);
        } else if ((tmp.charCodeAt() <= 91 && tmp.charCodeAt() >= 96)) {
            window.alert("Error at: " + customPwArray[j]);
        } else {
            window.alert("Key changed \n New key is: " + nwPW);
            return 0;
        }
    } //first for loop
} //custom func


userReply = prompt("Do you want to change the key? \n Enter Y or N ");
switch (userReply.toUpperCase()) {
    case "Y":
        customPW();
        break;
    case "N":
        window.alert("No changes made.");
        break;

    default:
}