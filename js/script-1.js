// const age = 10;
// const totalPrice = 200.74;
// const userName = 'Chelsy';
// const isOpen = true;
// const shouldConfirm = false;



// const type = typeof age;
// console.log(type);

// console.log('до');
// alert('fdfd');
// console.log('Gjffdf');


// ====================================

// const message = 'Хотите пролить подписку?';
// const shouldRenew = confirm(message);
// console.log(shouldRenew);

// ====================================

// let quantity = prompt('fdfdsf');
// quantity = Number (quantity);
// console.log(quantity);
// console.log(typeof quantity);

// =====================================

let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth:', elementWidth, 'px');

//========================================

let elementHeight = '220.323px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHight:', elementHeight, 'px');

//=================== Матрёшка ==================

// let salary = 1300.23244;
// // salary = Number(salary.toFixed(2));

// // // salary = Number(salary);

// // console.log(salary);
// console.log(Number(salary.toFixed(2)));

//=================================================

// let quantity = '30';
// let value = 'Эту строку невозможно привести к числу';

// console.log(Number(quantity)); - 30
// console.log(Number(value)); - NaN

//=============================================

// const base = 5;
// const power = 5;

// // const result = Math.pow(base, power);

// // console.log(result);
// console.log(Math.pow(base, power));
// console.log(2 ** 5);

//=============================================

/* напиши скрипт который просит пользователя ввести число и степень,
*  возводит число и эту степень и выводит результат в консоль
*/

// // 1. попросить ввести число и сохранить в переменную
// let base = prompt('Давай число');
// base = Number(base);

// console.log(base);

// // 2. попросить ввести степень и сохранить в переменную
// let power = prompt('Давай степень');
// power = Number(power);

// console.log(power);

// // 3. возвести введённые данные в степень и вывести
// const result = base ** power;

// console.log(result);

//==========================================

/* генерим псевдослучайные числа
* - Math.random()
* - Math.round()
*/

// Math.random() * (max - min) + min


// const max = 150;
// const min = 30;
// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);
// // console.log(Math.round(6.5));

//================ длина стоки, свойство length ======================

// const massege = 'dfjsfdsjdfljslfdk';
// console.log(massege.length);

//===================== конкатенация строк =======================

const firstName = 'Chelsy';
const lastName = 'dfddf';

// console.log(firstName + ' ' + lastName);

//================== задачка + шаблонная строка ==========================
/* напииш скрипт который выведет строку в формате
* "Гость х y поселяется в z номер q",
*/

// const room = 732;
// const type = "VIP";

// // const welcomeMsg = "Гость " + firstName + ' ' + lastName + " поселяется в " + type + " номер " + room;
// const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
// console.log(welcomeMsg);

// const quantity = 15;
// const orderMsg = `Вы заказываете ${quantity} холодильников`;
// console.log(orderMsg);

//===================== нормализация с методом =================

let brand = 'SamsuNg';
// brand = brand.toLowerCase();

// console.log(brand[4]);
// console.log(brand.slice(1).toLowerCase());

brand = brand[0] + brand.slice(1).toLowerCase();


// console.log(brand);



//==================== поиск в строке includes ===================

const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

// const string1 = 'Привет, я принц Абдул, это не спам, предлогаю тебе миллион!';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
// const string3 = 'рРекламная кампания #fatlivesmatter';

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));

// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));