const arr = [
  1, 1, 1, 4, 5, 6, 7, 8, 9, 7, 3, 2, 2, 1, 3, 4, 5,

  66, 4, 1089984578, 0,
];

function getMin(arr) {return Math.min(...arr);}
console.log(getMin(arr));

/* 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
с двумя методами: increment и decrement. Метод increment должен увеличивать
значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
на 1. Значение счетчика должно быть доступно только через методы объекта,
а не напрямую. */


function createCounter() {
  let count = 0; 

  return {
    increment: function() {
      count += 1; 
    },
    decrement: function() {
      count -= 1;
    },
    getCount: function() {
      return count; 
    }
  };
}

const counter = createCounter();
counter.increment(); 
counter.increment(); 
console.log(counter.getCount()); 
counter.decrement(); 
console.log(counter.getCount()); 




