
let addButton = document.getElementById('addButton');
let toDoContainer = document.getElementById('toDoContainer');
let textInput = document.getElementById('textInput');
let title = document.getElementById('title');
let clearButton = document.getElementById('clearButton');

addButton.addEventListener('click', function(){

    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = textInput.value;
    textInput.value = "";


    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    });

    clearButton.addEventListener('click', function(){
        paragraph.remove();
    })
});






