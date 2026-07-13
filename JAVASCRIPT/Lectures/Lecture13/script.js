// Access Methods

//1. Using Id


//2. Using Class

//3. Using element name

//4. Using Query Selector 

//5. Using Query SelectorAll

//6. Using $0


let mydiv = document.querySelector('#mydiv');

let newElement = document.createElement('span');
newElement.textContent = 'Hello, World!';

// mydiv.insertAdjacentElement('beforebegin', newElement);

// mydiv.insertAdjacentElement('afterbegin', newElement);

// mydiv.insertAdjacentElement('beforeend', newElement);

mydiv.insertAdjacentElement('afterend', newElement);

let parent =document.querySelector('#mydiv');
let child = document.querySelector('#fpara');
parent.removechild(child);