"use strict";

let counter = 0;
let items = [];

function addItem() {
 let durationElement = document.getElementById('duration');
 let duration = durationElement.value;

 console.log(duration);
 
 let descriptionElement = document.getElementById('description');
    let description = descriptionElement.value;
    console.log(description);

    count += 1;

    items.push( `<tr><td>${count}</td><td>${duration}</td><td>${description}</td></tr>` );


}
