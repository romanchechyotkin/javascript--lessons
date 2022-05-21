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