// задания на функции

/*
    создать функцию, которая возвращает мин значения из двух чисел
*/

function min(num1, num2){ 
    if(num1 > num2){
        return num2;
    }
    else if(num2 == num1){
        return 'Числа равны'
    }
    else{
        return num1
    }
}

console.log(min(1, 2));
console.log(min(2, 2));
console.log(min(3, 2));

// написать функцию, которая принимает одно положительное число и проверяет его на четность

function isEven(number){
    if(number > 0 && Number.isInteger(number)){
        if(number % 2 == 0){
            return true
        }
        else{
            return false
        }
    }
    else{
        return false
    }
}

console.log(isEven(75));
console.log(isEven(50));
console.log(isEven(-1));
console.log(isEven(44));


// написвать функцию, которая принимает строку и выводит кол-во символов 'B'


function countBs(text){
    
    let counter = 0
    let result = 0

    while(counter < text.length){
        if(text.charAt(counter) == 'B'){
            result++
        }
        counter++
    }

    return result
}

console.log(countBs('BbbbbBaasbBBB')); // 5
console.log(countBs('                ')); // 0



function countChar(text, char){
    let counter = 0
    let result = 0

    while(counter < text.length){
        if(text.charAt(counter) == char){
            result++
        }
        counter++
    }

    return result
}

console.log(countChar('qwahduihafaf', 'f'));
console.log(countChar('     dsfds ', ' '));
console.log(countChar('abcbac', 'a'));