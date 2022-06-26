/*
This program takes a first name and last name
Then it asks for the user's birthday.
After it takes the inputs. the date is checked to see if its correct. 
*/

// Ask for the user's first name
var firstNm = prompt("Enter your first name");
// Ask for the user's last name
var lastNm = prompt("Enter your last name");

// Ask for the user's birthday
var bthDay = prompt("Enter your birthday\n Use the following format: mm/dd/yr");
//formates the date. 
var dt = new Date(bthDay);
// Ask the user to confirm their birthday input +
// Alert the user's birthday

//asks the user to re-eneter the info
var bthDayCk = prompt("Re-submitt your birthday using the same format as before:");
//formats the datechecker
var dtCk = new Date(bthDayCk);
//checks and removes the timestamp
while (dt.toDateString() != dtCk.toDateString()) {
    // if the info is false. The user is asked to re-enter info until the correct one is entered
    bthDayCk = prompt("dates do not match!\nRe-submitt your birthday using the same format as before:");
    //reassigns the date.
    dtCk = new Date(bthDayCk);
}
window.alert(firstNm + " " + lastNm + "'s birthday : " + dt.toDateString());
