// массив 
let numberList = [1, 2, 3, 5, 66, 100]
console.log(numberList[0], numberList[4], numberList[5]); // 1 66 100
console.log(numberList.length); // длина массива
numberList.push(0) // добавляет элемент в массив 
numberList.push(11)
console.log(numberList);
console.log(numberList.pop()); // удаляет последний в массиве элемент
console.log(numberList);

// объект
let day1 = {
    squirrel: false,
    events: ['работал', 'бегал', 'ел', 'трогал дерево']
}

console.log(day1.events);
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = true // записав имя объекта и через точку имя нового свойства, создается заданное свойство 
console.log(day1.wolf);
delete day1.squirrel // удаляет свойство из объекта
console.log(day1.squirrel);
console.log('squirrel' in day1); // проверка на наличие в объекте
console.log('wolf' in day1);

let obj1 = {
    value: 10
}
let obj2 = obj1
let obj3 = {
    value: 10
}

console.log(obj1 == obj2); // true
console.log(obj1 == obj3); // false
obj1.value = 15
console.log(obj2.value); // 15
console.log(obj3.value); // 10



const score = {
    home: 0,
    visitors: 0
}
score.visitors = 1 // не смотря на const таким образом можно изменять значение свойства
console.log(score.visitors);


let text = '21414234324'
for(let res of text){
    console.log(res);
}


let numList = [1, 2, 34, 2, 0]
console.log(numList.indexOf(2)); // 1        выводит индекс заданного элемента, начиная с переда массива 
console.log(numList.lastIndexOf(2)); // 3    выводит индекс заданного элемента, начиная с конца массива 

console.log([0, 1].concat([123]));
console.log([0, 1, 2, 3, 4, 5].slice(2, 5));
console.log('    sndw   '.trim());

let sentence = 'awdmafasf awsf a etfsf e'
let words = sentence.split(" ")
console.log(words);
console.log(words.join(' '));


// функция создает рандомную точку в окружности

function randomPointOnCircle(radius){
    let angle = Math.random() * 2 * Math.PI
    return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
    }
}
console.log(randomPointOnCircle(2));