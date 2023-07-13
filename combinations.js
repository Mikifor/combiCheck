function factorial(n) {
    return ((n != 1) ? n * factorial(n - 1) : 1);
}

function counting(numbers) {
    let degree = Math.pow(2, numbers)
    console.log("Два в степени количества элементов: " + degree)
    let sum = 0
    for (i = 1; i <= numbers; i++) {  //ещё можно numbers+1 и заменить <= на <
        x=numbers-i
        if (x===0) {x=1}
        sum = sum + factorial(numbers) / (factorial(i) * factorial(x))
        
    }
    console.log("Количество комбинаций из этих элементов :" + sum)
}

counting(3) //Сюда вводим число, которое хотим проверить