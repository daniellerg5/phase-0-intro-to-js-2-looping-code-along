// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }

//     return gifts;
// }
// wrapGifts(gifts)

function writeCards(arr,eventName){
    let messages = [];
    for (let i = 0; i <arr.length; i++){
        const message = "Thank you, " + arr[i] + ", for the wonderful " + eventName + " gift!";
        messages.push(message);
    }
    return messages;
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(i){
    while (i >=0) {
        console.log(i--)
    }
}

countDown(10);