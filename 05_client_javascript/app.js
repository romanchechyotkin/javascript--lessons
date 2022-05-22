// чтение и нахождение элементов за счет DOM

const htmlEl = document.documentElement
const headEl = document.head
const bodyEl = document.body

console.log(htmlEl);
console.log(headEl);
console.log(bodyEl);
console.log(bodyEl.firstChild, bodyEl.lastChild)

const childNodes = bodyEl.childNodes
console.log(childNodes);

for(let node of childNodes){
    console.log(node);
}

console.log(bodyEl.children);

const elemsOne = document.querySelectorAll('.header')
console.log(elemsOne);
const elemsTwo = document.querySelectorAll('li')
console.log(elemsTwo);
const elemsThree = document.querySelectorAll('li.list-item')
console.log(elemsThree);


const elems = document.querySelectorAll('li')
console.log(elems[2]);
for(let item of elems){
    console.log(item);
}


// создание элементов

const textElement = document.querySelector('.list-item')
const textElementContent = textElement.innerHTML
textElement.innerHTML = 'Greate text'
console.log(textElementContent);


const newElement = document.createElement('div')
newElement.innerHTML = 'Hello world'
const headerEl = document.querySelector('.header')
headerEl.after(newElement)