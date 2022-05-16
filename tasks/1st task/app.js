/* 
Если выписать все натуральные числа меньше 10, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих чисел равна 23.
Найдите сумму всех чисел меньше 1000, кратных 3 или 5.
*/


let sumary = 0
for(let number = 1; number < 1000; number++){
    if(number % 3 == 0 || number % 5 == 0){
        sumary = sumary + number
    }
}
console.log(sumary);