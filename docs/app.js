"use strict";

let count = 0;
let items = [];

function addItem() {
 let durationElement = document.getElementById('duration');
 let duration = durationElement.value;

 console.log(duration);
 
 let descriptionElement = document.getElementById('description');
    let description = descriptionElement.value;
    console.log(description);

    count += 1;

    items.push( `<tr><th>${count}</td><th>${duration}</td><th>${description}</td></tr>` );

    let todosElement = document.getElementById('todos');
    todosElement.innerHTML = items.join('');

}

    function clearList() {
        count = 0;
        items = [];
        let todosElement = document.getElementById('todos');
        todosElement.innerHTML = items.join('');
    }

