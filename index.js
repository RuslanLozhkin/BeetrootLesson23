// ----------------------
// Запросить у пользователя число и определить, оно положительное, отрицательное или ноль.

// Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).

// Запросить у пользователя число и вывести его модуль (|7| = 7, |-7| = 7).

// Запросить у пользователя время (часы, минуты, секунды) и проверить корректность введенных данных.

// Запросить координаты точки (x, y) и определить номер четверти, в которую попала эта точка. Необходимо учесть случаи попадания точки на оси X или Y или в начало координат.

// Запросить у пользователя номер месяца и вывести на экран его название.

// Реализовать калькулятор. Пользователь вводит 2 числа и знак (+ - * /). В зависимости от введенного знака решить пример и вывести результат.

// Запросить 2 числа и вывести большее из них.

// Запросить 1 число и проверить, оно кратно 5 или нет.

// Запросить у пользователя название планеты. Если пользователь ввел «Земля» или «земля», то вывести «Привет, землянин!», в остальных случаях вывести «Привет, инопланетянин!».

//Task1
/*
const num =Number(prompt('Enter a number', 0));
if (num < 0){
    alert(`Your ${num} is lower then 0`);
} else if (num === 0){
    alert(`Your ${num} equal to 0`);
} else if (num > 0) {
    alert(`Your ${num} is higher then 0`);
} else {
    alert(`Please enter a number not ${num}`);
}
*/
//Task2
/*
const age = +prompt('Enter your age');
if (age > 0 && age <= 120){
    alert(`Your age ${age} is avaliable value`);
} else {
    alert(`Enter your age not random number`);
}
*/
//Task3
/*
const num = prompt('Enter number', -10);
alert(`the absolute value of a number ${Math.abs(num)}`);
*/

//Task4
/*
const hours = prompt('Enter current hour',0);
const minutes = prompt('Enter current minutes',0);
const seconds = prompt('Enter current seconds');
if (!(hours > 0 && hours < 24)){
    alert(`Hours  error`);
    if (!(minutes > 0 && minutes < 60)){
        alert(`Minutes error`);
        if (!(seconds > 0 && seconds < 60)) {
            alert(`Seconds error`);
        }
    }
} else {
    alert(`All correct`);
}
*/

//Task5
/*
const x= prompt('Enter a x point coordinate',0);
const y = prompt('Enter a y point coordinate',0);

if (x === 0){alert(`Your Point ${x}:${y} on the Y coordinate axis`);}
else if ( y === 0) {alert(`Your Point ${x}:${y} on the X coordinate axis`);}
else if (x === 0 && y === 0) {alert(`Your Point ${x}:${y} on the begining of coordinate axis`);}
else if (x > 0 && y > 0) {alert(`Your Point ${x}:${y} on the first quarter of the coordinate axis`);}
else if (x > 0 && y < 0) {alert(`Your Point ${x}:${y} on the second quarter of the coordinate axis`);}
else if (x < 0 && y < 0) {alert(`Your Point ${x}:${y} on the third quarter of the coordinate axis`);}
else if (x < 0 && y > 0) {alert(`Your Point ${x}:${y} on the fourth quarter of the coordinate axis`);}
*/
//Task6
/*
const month = prompt('Enter a month number', 0);
switch (month){
    case '1':
        alert('January');
        break;
    case '2':
        alert('February');
        break;
    case '3':
        alert('March');
        break;
    case '4':
        alert('April');
        break;
    case '5':
        alert('May');
    case '6':
        alert('June');
    case '7':
        alert('Jule');
        break;
    case '8':
        alert('August');
        break;
    case '9':
        alert('September');
        break;
    case '10':
        alert('October');
        break;
    case '11':
        alert('November');
        break;
    case '12':
        alert('December');
        break;
    default:
        alert('Error');
}
*/


//Task7
/*
const first = +prompt('Enter the first number',0);
const second = +prompt('Enter the first number',0);
const operator = prompt('Enter math operator');

switch (operator){
    case '+':
        alert(`The sum of two numbers is ${first + second}`);
        break;
    case '-':
        alert(`The difference of two numbers is ${first - second}`);
        break;
    case '/':
        alert(`The division of two numbers is ${first / second}`);
        break;
    case '%':
        alert(`The division with remainder of two numbers is ${first % second}`);
        break;
    case '*':
        alert(`The Multiplication of two numbers is ${first * second}`);
        break;
    default:
        alert('Error');
}
*/

//Task8
/*
const first = prompt('Enter first number ',0);
const second = prompt('Enter second number',0);

alert(`The higher of two numbers is ${Math.max(first, second)}`);
*/
//Task9
/*
const num = +prompt('Enter a number', 0);
if (isNaN(num)){
    alert('Error');
}
if (num % 5 == 0 && !(isNaN(num))){
    alert(`Number ${num} is multiply of five`);
}
else if (num % 5 != 0 && !(isNaN(num))){
    alert(`number ${num} is not multiply of five`);
}
*/

//HOME TASKS
/*
1.  Запросить у пользователя 
    его возраст и определить, 
    кем он является: 
    ребенком (0–2), подростком (12–18), взрослым (18_60) 
    или пенсионером (60– ...).

2.  Запросить у пользователя число от 0 до 9 
    и вывести ему спецсимвол, который 
    расположен на этой клавише (1–!, 2–@, 3–# и т. д).

3.  Запросить у пользователя трехзначное число и проверить, 
    есть ли в нем одинаковые цифры.

4.  Запросить у пользователя год и проверить, високосный он или нет. 
    Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

5.  Запросить у пользователя пятиразрядное число и определить, 
    является ли оно палиндромом.

6.  Написать конвертор валют. Пользователь вводит количество USD, 
    выбирает, в какую валюту хочет перевести EUR, UAN или AZN, 
    и получает в ответ соответствующую сумму.

7.  Запросить у пользователя сумму покупки и вывести 
    сумму к оплате со скидкой: от 200 до 300 – скидка 
    будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

8.  Запросить у пользователя длину окружности и 
    периметр квадрата. Определить, может ли такая 
    окружность поместиться в указанный квадрат.

9.  Задать пользователю 3 вопроса, в каждом 
    вопросе по 3 варианта ответа. За каждый 
    правильный ответ начисляется 2 балла. После 
    вопросов выведите пользователю количество набранных баллов.

10. Запросить дату (день, месяц, год) и вывести следующую 
    за ней дату. Учтите возможность перехода на следующий 
    месяц, год, а также високосный год.
*/

//Task1
/*
const age = +prompt('Enter your age',0);
if (!(isNaN(age)) || age !== null || age !== undefined){
    if(age >= 0 && age <= 2){
        alert(`Your age is ${age} and you are the kid`);
    } else if (age >=12 && age < 18){
        alert(`Your age is ${age} and you are the teenager`);
    } else if (age >= 18 && age <= 60){
        alert(`Your age is ${age} and you are the adult`);
    } else {
        alert(`Your age is ${age} and you are the senior citizen`);
    }
} else {
    alert(`Strange value for age '${age}', You are alien`);
}
*/

//Task2
/*
const num = prompt('Enter a number from 0 to 9',0);
if (num >= 0 || num <= 9 || !(isNaN(num)) || num !== null || num !== undefined){
    switch (num){
        case '0':
            alert('0 is a ")" specific symbol');
            break;
        case '1':
            alert('1 is a "!" specific symbol');
            break;
        case '2':
            alert('2 is a "@" specific symbol');
            break;
        case '3':
            alert('3 is a "#" specific symbol');
            break;
        case '4':
            alert('4 is a "$" specific symbol');
            break;
        case '5':
            alert('5 is a "%" specific symbol');
            break;
        case '6':
            alert('6 is a "^" specific symbol');
            break;
        case '7':
            alert('7 is a "&" specific symbol');
            break;
        case '8':
            alert('8 is a "*" specific symbol');
            break;
        case '9':
            alert('9 is a "(" specific symbol');
        default:
            alert('Please enter a number from 0 to 9');
    }
} else {
    alert('Error');
    console.error('Error typeof value');
}
*/

//Task3
/*
const num = +prompt('Enter a three digit integer number',0);

if (isNaN(num) || num === null || num === undefined || typeof num !== 'number'){
    alert(`Error:Your variable must be a number`);
    console.error('Error:Your variable must be a number');
} else if (num <= 100 || num >= 999 || num % 1 !== 0){
    alert(`Please enter a three digit integer number instead of ${num}`);
    console.error(`Please enter a three digit integer number instead of ${num}`);
} else {
    let num1 = num % 10;
    console.log(num1);
    let num2 =(num - num1) % 100 / 10;
    console.log(num2);
    let num3 = (num - num % 100) / 100;
    console.log(num3);
    if (num1 === num2){
        alert(`Number ${num} has the same digits ${num1} = ${num2}`);
    } else if (num1 === num3){
        alert(`Number ${num} has the same digits ${num1} = ${num3}`);
    } else if (num2 === num3){
        alert(`Number ${num} has the same digits ${num2} = ${num3}`);
    } else {
        alert(`Number ${num} has no the same digits`);
    }
}
*/

//Task4
/*
const num = +prompt('Enter year', 1900);
if (isNaN(num) || num === null || num === undefined || typeof num !== 'number'){
    alert(`Error:Your variable must be a number`);
    console.error('Error:Your variable must be a number');
} else if (num < 0 || num % 1 !== 0){
    alert(`Please enter correct number not ${num}`);
    console.error(`Please enter correct number instead of ${num}`);
} else {
    if ((num % 400 === 0 || num % 4 === 0) && num % 100 !== 0){
        alert(`This is leap year ${num}`);
    } else {
        alert(`This is not leap year ${num}`);
    }
}
*/

//Task5
/*
const num = +prompt('Enter 5 digit number', 0);
if(num > 9999 && num < 100000){
    let temp = num % 10;
    let temp1 = num % 100 - temp;
    let temp2 = temp + temp1;
    let temp3 = num - temp2;
    let num2 = 10000 * temp;
    temp = temp1 / 10;
    num2 += temp * 1000;
    temp2 = temp3 % 1000;
    num2 += temp2;
    temp3 -= temp2;
    temp = temp3 % 10000;
    num2 += temp / 100;
    temp3 -= temp;
    temp3 /= 10000;
    num2 += temp3;
    if (num2 === num){
        alert(`Your number ${num} is a polyndrom`);
    } else {
        alert(`Your number ${num} is not a polyndrom`);
    }
}else {
    alert(`Please enter a five digit number instead of ${num}`);
    console.error(`Please enter a five digit number instead of ${num}`);
}
*/

//Task6
/*
const usd = +prompt('Enter a sum of money',0);
if(isNaN(usd)){
    alert(`Please enter a number instead of ${usd}`);
    console.error(`Please enter a number instead of ${usd}`);
} else{
    const usdEur = 1.1;
    const usdUan = 15;
    const usdAzn = 20;
    const choise = prompt('Enter 1 to convert in EUR, Enter 2 to convert in UAN, Enter 3 to convert in AZN',3);
    switch (choise){
        case '1':
            alert(`${usd}usd -> ${usd * usdEur}eur`);
            break;
        case '2':
            alert(`${usd}usd -> ${usd * usdUan}uan`);
            break;
        case '3':
            alert(`${usd}usd -> ${usd * usdAzn}azn`);
            break;
        default:
            alert(`Please make a correct choise instead of ${choise}`);
    }
}
*/

//Task7
/*
const sum = +prompt('Enter a sum of buying',0);
let disc =  0;
if (isNaN(sum)){
    alert(`Please enter a number instead of ${usd}`);
    console.error(`Please enter a number instead of ${usd}`);
} else {
    if (sum >=200 && sum <=300){
        alert(`your discount is ${sum * 0.03}`);
    } else if (sum > 300 &&  sum <= 500){
        alert(`your discount is ${sum * 0.05}`);
    } else if (sum > 500) {
        alert(`your discount is ${sum * 0.07}`);
    } else {
        alert('You have no discount');
    }
}
*/
 //Task8
 /*
const circleLength = +prompt('Enter a length of circle', 0);
const squareSide = +prompt('Enter a side of a square',0);

if(isNaN(circleLength) || isNaN(squareSide) || circleLength <= 0 || squareSide <= 0){
    alert(`Please enter a correct values instead of ${circleLength} and ${squareSide}`);
    console.error(`Please enter a correct values instead of ${circleLength} and ${squareSide}`);
} else {
    const circleRadius = circleLength / (2 * Math.PI);
    if (squareSide >= circleRadius * 2){
        alert(`Square with ${squareSide} side may contain circle with ${circleLength} length`);
    } else alert(`Square with ${squareSide} side may not contain circle with ${circleLength} length`);
}
*/

//Task9
/*
let count = 0;
const questions = ['Is Earth round?', 'What is Javascript?', 'Who create a Js?'];
function check(a){
    if (isNaN(a) || a % 1 !==0 || a < 1 || a > 3){
        alert(`Please enter a correct choise instead of ${a}`);
        console.error(`Please enter a correct choise instead of ${a}`);
    }
}
function type(arr){
    let type = prompt(`${arr[0]} + ' - 1', 
${arr[1]} + ' - 2', 
${arr[2]} + ' - 3'`);
    return type;
}
alert('You need to answer three question by choising a correct variant from three ones');
alert('To give an answer you need type 1, 2 or 3');


alert('First question: '+ questions[0]);
let answers = ['No', 'Yes', 'It\'s square'];
let userType = type(answers);
check(userType);
if (userType == '2'){
    count+= 2; 
}


alert('Second question: '+ questions[1]);
answers =['Ktulhu language word', 'Part of PC', 'Programming language'];
userType = type(answers);
check(userType);
if (userType == '3'){
    count += 2; 
}

alert('Third question: '+ questions[2]);
answers =['Brendan Eich', 'Bjarne Stroustrup', 'Guido van Rossum'];
userType = type(answers);
check(userType);
if (userType == '1'){
    count += 2; 
}
alert(`You score is ${count}`);
*/

//Task10
/*
alert('Enter today\'s date D.M.YYYY');

const day = +prompt('Enter day',0);
const month = +prompt('Enter month',0);
const year = +prompt('Enter year',0);

let nextDay = 0;
let nextMonth = 0;
let nextYear = 0;
if (isNaN(day) || isNaN(month) || isNaN(year)){
    alert('Error');
    console.error('Error');
} else {
    if (day < 1 || day > 31 || day % 1 != 0){
        alert('Error');
        console.error('Error');
    } else if (year < 0 || year % 1 != 0) {
        alert('Error');
        console.error('Error');
    } else  if (month < 1 || month > 12 || month % 1 != 0){
        alert('Error');
        console.error('Error');
    } else if (month % 2 == 0 && month >= 1 && month <= 7 && day == 31){
        alert('Error');
        console.error('Error');
    } else if(month % 2 != 0 && month >= 8 && month <= 12 && day == 31){
        alert('Error');
        console.error('Error');
    } else {
            switch (month){
                case 1:
                    if (day == 31){
                        nextDay = 1;
                        nextMonth = 2;
                        nextYear = year;
                    } else {
                        nextDay = day + 1;
                        nextMonth = month;
                        nextYear = year;
                    }
                    break;
                case 2:
                    if ((year % 400 == 0 || year % 4 == 0) && year % 100 != 0){
                        if (day == 29) {
                            nextDay = 1;
                            nextMonth = 3;
                            nextYear = year;
                        } else if (day > 29) {
                            alert('Error');
                            console.error('Error');
                        } else {
                            nextDay  = day + 1;
                            nextMonth = month;
                            nextYear = year;
                        }
                    } else {
                        if (day == 28){
                            nextDay = 1;
                            nextMonth = 3;
                            nextYear = year;
                        } else if (day > 28){
                            alert('Error');
                            console.error('Error');
                        } else {
                            nextDay = day + 1;
                            nextMonth = month;
                            nextYear = year;
                        }
                    }
                    break;
                case 3:
                    if (day == 31){
                        nextDay = 1;
                        nextMonth = 4;
                        nextYear = year;
                    } else {
                        nextDay = day + 1;
                        nextMonth = month;
                        nextYear = year;
                    }
                    break;
                case 4:
                    if (day == 30){
                        nextDay = 1;
                        nextMonth = 5;
                        nextYear= year;
                    } else if (day > 30){
                        alert('Error');
                        console.error('Error');
                    } else {
                        nextDay = day + 1;
                        nextMonth = month;
                        nextYear = year;
                    }
                    break;
                case 5:
                    if (day == 31){
                        nextDay = 1;
                        nextMonth = 6;
                        nextYear = year;
                    } else {
                        nextDay = day + 1;
                        nextMonth = month;
                        nextYear = year;
                    }
                    break;
                case 6:
                    if (day == 30){
                        nextDay = 1;
                        nextMonth = 7;
                        nextYear = year;
                    } else if (day > 30){
                        alert('Error');
                        console.error('Error');
                    } else {
                        nextDay = day + 1;
                        nextMonth = month;
                        nextYear = year
                    }
                    break;
                case 7:
                    if (day == 31){
                        nextDay = 1;
                        nextMonth = 9;
                        nextYear = year;
                    } else {
                        nextDay = day + 1;
                        nextMonth = month;
                        nextYear = year;
                    }
                case 8:
                    if (day == 31){
                        nextDay = 1;
                        nextMonth = 9;
                        nextYear = year;
                    } else {
                        nextDay = day + 1;
                        nextMonth = month;
                        nextYear = year;
                    }
                    break;
                case 9:
                    if (day == 30){
                        nextDay = 1;
                        nextMonth = 10;
                        nextYear = year;
                    } else if (day > 30) {
                        alert('Error');
                        console.error('Error');
                    } else {
                        nextDay = day + 1;
                        nextMonth = month;
                        nextYear = year;
                    }
                    break;
                case 10:
                    if (day == 31){
                        nextDay = 1;
                        nextMonth = 11;
                        nextYear = year;
                    } else {
                        nextDay = day + 1;
                        nextMonth = month;
                        nextYear = year;
                    }
                    break;
                case 11:
                    if (day == 30){
                        nextDay = 1;
                        nextMonth = 10;
                        nextYear = year;
                    } else if (day > 30) {
                        alert('Error');
                        console.error('Error');
                    } else {
                        nextDay = day + 1;
                        nextMonth = month;
                        nextYear = year;
                    }
                    break;
                case 12:
                    if (day == 31){
                        nextDay = 1;
                        nextMonth = 1;
                        nextYear = year + 1;
                    } else {
                        nextDay = day + 1;
                        nextMonth = month;
                        nextYear = year;
                    }
                    break;
                default:
                    alert('Something are going wrong');
                }
    }
}
alert(`Nex day is ${nextDay}:${nextMonth}:${nextYear}`);
*/