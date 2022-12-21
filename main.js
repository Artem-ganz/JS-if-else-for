/*
Мінімум

 1.Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59)
 або пенсіонером (60 ...), передбач можливість введення невірних даних.
*/
const age = +prompt('Введіть свій вік', '');

if (age && age >=0) {
    switch (true) {
        case (age >= 0 && age <= 11):
            alert ('дитина');
            break;
        case (age >= 12 && age <=17):
            alert ('підліток');
            break;
        case (age >= 18 && age <=59):
            alert ('дорослий');
            break;
        case (age >=60):
            alert ('пенсіонер');
            break;
    }
}else alertError();


// 2.Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let value = +prompt('Введіть число від 0 до 9', '');

if (value >= 0 && value <= 9) {
    switch (value) {
        case 0:
            alert (')');
            break;
        case 1:
            alert ('!');
            break;
        case 2:
            alert ('@');
            break;
        case 3:
            alert ('#');
            break;
        case 4:
            alert ('$');
            break;
        case 5:
            alert ('%');
            break;
        case 6:
            alert ('^');
            break;
        case 7:
            alert ('&');
            break;
        case 8:
            alert ('*');
            break;
        case 9:
            alert ('(');
            break;         
    }
}else {
    alert ('Цифра не вказана!');
}


// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.
const firstNumber = +prompt('Введіть перше число', '');
const lastNumber = +prompt('Введіть останнє число', '');

if (firstNumber && lastNumber) {
    sum = 0;

    for (i = firstNumber; i <= lastNumber; i++) {
        sum += i;
    }

    alert (`Сумма чисел в діапазоні від ${firstNumber} до ${lastNumber} дорівнює ${sum}`);
}


// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.
let x = +prompt('Введіть перше число', '');
let y = +prompt('Введіть друге число', '');

function NOD (x, y) {
	if (y > x) return NOD(y, x);
	if (!y) return x;
	return NOD(y, x % y);
}
alert (`Найбьший спільний дільник числа ${x} та числа ${y} = ${NOD(y, x % y)}`);


// Норма
// 1. Запитай у користувача число і виведи всі дільники цього числа.


// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
//     від 200 до 300 - знижка буде 3%; 
//     від 300 до 500 - 5%;
//     від 500 і вище - 7%. 

let sumProduct = +prompt('Введіть сумму покупки', '');

if (sumProduct && sumProduct > 0) {
 let discountPercent = 0;

    if (sumProduct >=200 && sumProduct <=300) {
        discountPercent = 3;
    }

    if (sumProduct >= 300 && sumProduct <=500) {
        discountPercent = 5;
    }

    if (sumProduct >= 500) {
        discountPercent = 7;
    }

    sum = sumProduct - (sumProduct / 100 * discountPercent);

    alert(`Сумма до оплати зі знижкою ${discountPercent}% = ${sum}`);
}


// 3.Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. 
//   Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.


// 4. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » 
//    і так до тих пір, поки користувач натискає OK.
let choice;

week = ['Понеділок','Вівторок','Середа','Четверг','Пятниця','Субота','Неділя'];

i = 0;

do {
    choice = confirm(week[i] + '. Хочешь побачити наступний день?');
    i++;
    if (i > 6 ) i = 0;
}while (choice);