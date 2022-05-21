// Напишите функцию range, которая принимает два аргумента, start и end,
// и возвращает массив, содержащий все числа от start до end включительно. 

function range(start, end){
    let list = []
    if(start < end){
        for(let counter = start; counter <= end; counter++){
            list.push(counter)
        }
    }
    else if(start > end){
        for(let counter = end; counter <= start; counter--){
            list.push(counter)
        }
    }
    return list
}
console.log(range(1, 4));
console.log(range(-5, 1));
console.log(range(-10, 0));

/*
    В качестве дополнительного задания: измените функцию range так, чтобы
    она принимала необязательный третий аргумент, который указывал бы
    значение шага, используемое при построении массива. Если шаг не задан,
    элементы увеличиваются на единицу, что соответствует старому поведению.
    Вызов функции range(l, 10, 2) должен возвращать [1, з, 5, 7, 9). Убедитесь,
    что функция также работает и с отрицательными значениями шага, так что
    результатом range(5, 2, -1) является [5, 4, з, 2). 
*/













/*
    напишите двe функции: reverseArray и reverseArrayinPlace. 
    Первая функция, reverseArray, принимает массив в качестве аргумента и создает новый массив, содержащий
    те же элементы в обратном порядке. 
    Вторая, reverseArrayinPlace, делает то же, что и метод reverse: преобразовывает массив, заданный в качестве
    аргумента, меняя порядок следования его элементов на обратный. Не используйте для этого стандартный метод reverse. 
*/ 

function reverseArray(list){
    let reverseArray = []
    for(let counter = 1; counter <= list.length; counter++){
        reverseArray.push(list[list.length - counter])
    }
    return reverseArray
}
console.log(reverseArray([1, 2, 4, 5]));
console.log(reverseArray([10, 2, 41, 0]));
console.log(reverseArray([-1, 22, 0, 0, 11, 2]));


function reverseArrayinPlace(list){
    for(let counter = 0; counter < list.length; counter+=2){
        list.unshift(list[counter])
    }
    let length = list.length
    for(let counter = 1; counter <= length / 2; counter++){
        list.pop()
    }
    return list
}
console.log(reverseArrayinPlace([1, 2, 4, 5]));
console.log(reverseArrayinPlace([11, 20, 24]));
console.log(reverseArrayinPlace([1, 2, 4, 5, 2, 4, 6]));
console.log(reverseArrayinPlace([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));



/*
    Напишите функцию deepEqual, которая принимает два значения и возвращает true, 
    только если эти объекты имеют одинаковое значение или являются объектами с одинаковыми свойствами и значения свойств равны
    при сравнении с рекурсивным вызовом deepEqual.
    Чтобы выяснить, нужно сравнивать значения напрямую (для этого используйте оператор ===) или их свойства, 
    можете использовать оператор typeof.
    Если его результатом для обоих значений является "object", то требуется
    выполнить глубокое сравнение. Но вам следует принять во внимание одно
    глупое исключение: исторически сложилось так, что результатом typeof
    null также будет "object".
    Для перебора и сравнения свойств объекта  вам также пригодится функция
    Object.keys. 
*/