'use strict'
let sharm = 15;
let hugarda = 25;
let taba = 6;

let userInput = prompt('For how many people is reservation?', 2);
//input check
if (userInput < 1 && parseInt(userInput) !== userInput) {
    alert('Ooops! Wrong input - pleace try again')
}
//taba
else if (taba >= userInput) {
    let isTaba = confirm('We found places in Hugarda group. Would you like to join Hugarda trip?')
    if (isTaba === true) {
        alert('Have fun in Taba!')
    }
    else {
        alert('We are very sorry. Hope to see you soon!')
    }
}
//sharm
else if (sharm >= userInput) {
    let isSharm = confirm('Do you want to have fun in Sharm?')
    if (isSharm = true) {
        alert('Congrat\'s your trip is booked!')
    }
    else {
        alert('We are very sorry. Hope to see you soon!')
    }
}
//hugarda
else {
    if (hugarda >= userInput) {
        let isHugarda = confirm('We found places in Hugarda group. Would you like to join Hugarda trip?')
        if (isHugarda === true) {
            hugarda = hugarda - userInput
            alert('Have fun in Hugarda!')
        }
        else {
            alert('We are very sorry. Hope to see you soon!')
        }
    }

    //other
    else {
        alert('Sorry there are no enough availeble places. Try other date!')
    }
};