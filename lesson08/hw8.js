/* 1. Написать функцию, которая будет записывать в массив ряд фибоначчи начиная с N члена с длинной массива M.
В функцию надо передать номер числа фибоначчи с которого начинается массив (N) и длину, 
которой должен быть массив (M).*/

const fibonachiArray = (N, M) => {                        // Передаем число и длину массива
    let result = [];                                      // Создаем пустой массив для результата

    const fibonachi = (number) => {                       // Создаем внутреннюю функцию, передаем число
        if (number <= 1) {
            return number;
        } else {
            return fibonachi(number - 1) + fibonachi(number - 2);     // Вычисляем число Фибоначчи для этого числа
        }
    }

    for (let i = 0; i < M; i++) {                         // Создаем цикл на длину массива
        result.push(fibonachi(N + i));                    // Добавляем число Фибоначи пока не получим массив указанной длины 
    }

    return result;
}
console.log(fibonachiArray(5, 7));


/* 2. Напишите функцию, которая вставит данные в массив с заданного места в массиве.
Например дан массив [1, 2, 3, 4, 5] в функцию передается место 3 и [ 'a', 'b', 'c']
получается массив [1, 2, 3, 'a', 'b', 'c', 4, 5]. */

function insertArray(arr, index, data) {
  return arr.slice(0, index).concat(data, arr.slice(index));
}

let arr = [1, 2, 3, 4, 5];                          // Массив
let dataToInsert = ['a', 'b', 'c'];                 // Данные для вставки
let index = 3;                                      // Индекс

let resultArr = insertArray(arr, index, dataToInsert);
console.log(resultArr); 
