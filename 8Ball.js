/*
Create an input field for users to ask a question [done]
Create a label for your input field telling your user to "Ask me anything!" [done]
Create an "ask" button (this will run the function that outputs a random magic 8 ball image) [kinda]
Create a div with an id of "answers" that you will insert the images into using js[done]
Create an "ask" function that when clicked, will choose a random 8ball image and insert it into your "answers" div[done]
Replace the input field with the user's question when displaying the answer[done]
Style your page any way you like
Activate Github Pages for your project
*/
var img = document.createElement("img");
var block = document.getElementById("answers");
function btnFunc() {
    document.getElementById("textEntry").placeholder = "Ask me anything!";
    switch (getRandomInt(20)) {
        case 0:
            img.src = "magic8ball_1.png";
            block.appendChild(img);
            break;
        case 1:
            img.src = "magic8ball_2.png";
            block.appendChild(img);
            break;
        case 2:
            img.src = "magic8ball_3.png";
            block.appendChild(img);
            break;
        case 3:
            img.src = "magic8ball_4.png";
            block.appendChild(img);
            break;
        case 4:
            img.src = "magic8ball_5.png";
            block.appendChild(img);
            break;
        case 5:
            img.src = "magic8ball_6.png";
            block.appendChild(img);
            break;
        case 6:
            img.src = "magic8ball_7.png";
            block.appendChild(img);
            break;
        case 7:
            img.src = "magic8ball_8.png";
            block.appendChild(img);
            break;
        case 8:
            img.src = "magic8ball_9.png";
            block.appendChild(img);
            break;
        case 9:
            img.src = "magic8ball_10.png";
            block.appendChild(img);
            break;
        case 10:
            img.src = "magic8ball_11.png";
            block.appendChild(img);
            break;
        case 11:
            img.src = "magic8ball_12.png";
            block.appendChild(img);
            break;
        case 12:
            img.src = "magic8ball_13.png";
            block.appendChild(img);
            break;
        case 13:
            img.src = "magic8ball_14.png";
            block.appendChild(img);
            break;
        case 14:
            img.src = "magic8ball_15.png";
            block.appendChild(img);
            break;
        case 15:
            img.src = "magic8ball_16.png";
            block.appendChild(img);
            break;
        case 16:
            img.src = "magic8ball_17.png";
            block.appendChild(img);
            break;
        case 17:
            img.src = "magic8ball_18.png";
            block.appendChild(img);
            break;
        case 18:
            img.src = "magic8ball_19.png";
            block.appendChild(img);
            break;
        case 19:
            img.src = "magic8ball_20.png";
            block.appendChild(img);
            break;
        default:
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

