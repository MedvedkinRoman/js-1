// оператор ветвления if

if (записывается выражения, приведенное к true или false, если false то не выполняется, а если true - будет выполнено) {
    // тело
    console.log()
}

// оператор ветвления if ... else 

// если не выполняется первое условие, тогда переходит к следующему
if (50 > 30) {
    console.log('x > y');
} else {
    console.log('x < y');
}
 
// оператор ветвления else ... if

const salary = 1500;
 
if (salary <= 500) {
    console.log('Уровень 1');
} else if (salary > 500 && salary <= 1500) {
    console.log('Уровень 2');
} else if (salary > 1500 && salary <= 3000) {
    console.log('Ehjdtym 3')
} else {
    console.log('Уровень 4');
}

// тернарный оператор

const balance = 1000;
let messege;

if (balance >= 0) {
    messege = 'Позитывный баланс';
} else {
    messege = 'Негативный баланс';
}

// вариант проще

const messege = условие ? выражение1 : выражение2;
// при выполнении условия, будет выражение1, если будет false - выражение2;

const messege = balance >= 0 ? 'Позитывный баланс' : 'Негативный баланс';


// Блочная область видимости переменных

