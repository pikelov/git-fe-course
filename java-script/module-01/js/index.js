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
else {
    if (taba >= userInput) {
        let isTaba = confirm('We found places in Taba group. Would you like to join Taba trip?')
        if (isTaba === true) {
            taba = taba - userInput
            alert('Have fun in Taba!')
            console.log('Free places in Taba: ', taba)
        }
        
        else {
            alert('We are very sorry. Hope to see you soon!')
        }
    }
//sharm
    else if (sharm >= userInput) {
        let isSharm = confirm('Do you want to have fun in Sharm?')
        if (isSharm = true) {
            sharm = sharm - userInput
            alert('Congrat\'s your trip is booked!')
            console.log('Free places in Sharm: ', sharm);
        }
        
        else {
            alert('We are very sorry. Hope to see you soon!')
        }
    }
    //hugarda
    else if (hugarda >= userInput) {
        let isHugarda = confirm('We found places in Hugarda group. Would you like to join Hugarda trip?')
        if (isHugarda === true) {
            hugarda = hugarda - userInput
            alert('Have fun in Hugarda!')
            console.log('Free places in Hugarda: ', hugarda)
        }
        
    else {
            alert('We are very sorry. Hope to see you soon!')
        }
    }

    //hugarda


    //other
    else {
        alert('Sorry there are no enough availeble places. Try other date!')
    }
};