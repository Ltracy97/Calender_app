const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const dateElement = document.querySelector('.datetime');

const date = new Date();

let day = date.getDate();

let month = date.getMonth() + 1;

let year = date.getFullYear();



let currentDate = `${day}-${month}-${year}`;

document.addEventListener('DOMContentLoaded', function(){

    dateElement.textContent = `${currentDate}`;

    let hexColor = '#';
    for(let i = 0; i<6; i++){

        hexColor += hex[getrandnum()];
    }

    document.body.style.backgroundColor = hexColor;

});

function getrandnum(){
return Math.floor(Math.random()*hex.length);

}