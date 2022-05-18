function sqrt(number){
    return Math.sqrt(number)
}

console.log(sqrt(4));


let text = 'hello world'
console.log(text);
console.log(text.length); // длина строки
console.log(text.substring(0, 6));  // выводит строку от первого заданнаго символа до второго заданнаго
console.log(text.indexOf(' ')); // определяет позицию символа
console.log(text.charAt(0)); // определяет символ по позиции


let n1 = 11, n2 = 12, n3 = 13
console.log(typeof n1, typeof n2, typeof n3); //number
n1 = n1 + 'wdadad'
n2 = n2.toString()
n3 = String(n3)
console.log(typeof n1, typeof n2, typeof n3); //string

