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