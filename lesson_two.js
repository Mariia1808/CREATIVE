//Написать 3 примера замыкания 
//первое
const spisok = (num) => {
    return (name) => {
       return `${name} учится в ${num} классе`
    }
   }
   const class3 = spisok(3)
   console.log(class3('Паша'))
   console.log(class3('Игорь'))
   const class4 = spisok(4)
   console.log(class4('Саша'))
   console.log(class4('Ваня'))
   console.log('----------------------------')
   
   //второе
   const zarplata = (nalog) => {
       return start =>{
           return `Ваша зарплата ${start * (100-nalog) / 100}`
       }
   }
   const result = zarplata(13)
   console.log(result(20000))
   console.log(result(60000))
   console.log('----------------------------')
   
   //третье
   const square = (pi = 3.14) => {
       return (r) => {
           return `Площадь круга с радиусом ${r} равна ${pi * Math.pow(r, 2)}`
       }
   }
   const S = square(3.14)
   console.log(S(3))
   console.log('--------------map--------------')
   
   //Написать примеры использования методов массивов: map, filter, reduce
   const S1 = square()
   const radius = [1, 10, 3, 8, 9]
   radius.map(i => 
       console.log(S1(i)))
   
   console.log('--------------filter--------------')
   let even = radius.filter(i => i%2==0);
   console.log(even)
   
   console.log('--------------reduce--------------')
   let res = radius.reduce((sum, current) => sum + current, 0);
   console.log(res);
   console.log('----------------------------')
   
   //Вывести все ключи Объекта в виде массива то есть из {name: 'Bob', age: 16}  нужно получить ['name', 'age]
   const obj = {name: 'Мария', lastname: 'Банникова', age: 21, num: [1, 2, 3]}
   const array = Object.keys(obj)
   console.log(array)
   //а для значение используется Object.values();
   
   console.log('----------------------------')
   //Сделать функцию и использовать параметры по умолчанию 
   function f([a, b] = ['Hello', 'world'], d = '', {c: c} = {c: 5} ) {
       return `${a}, ${b}. Я ${d} программирую уже ${c} лет`
     }
   console.log(f()) 
   console.log(f(['Привет', 'мир'], 'не', {c: 0})) 
   console.log(f(undefined, '', {c: 0})) 
   
   console.log('----------------------------')
   //Создать класс Human, расширить его фукницональность у его дочерних классов(Врач, Программист и т.д). Поработать с this
   class Human {
       constructor(name, lastname, age) {
           this.name = name
           this.lastname = lastname
           this.age = age
       }
   
       hello() {
           console.log(`Привет, меня зовут ${this.name} ${this.lastname}, мне ${this.age}`)
       }
   }
   
   class Student extends Human {
       constructor(name, lastname, age, curs) {
           super(name, lastname, age)
           this.curs = curs
       }
       about_student() {
           this.curs !== 0 ? console.log(`Я студент ${this.curs} курса`) : console.log(`Я не учусь в институте`)         
       }
       hello() {
           super.hello()
           this.about_student()
       }
   }
   
   class Programmer extends Human {
       constructor(name, lastname, age, language, experience, language0) {
           super(name, lastname, age)
           this.language = language
           this.language0 = language0
           this.experience = experience
       }
       about_programmer() {
           console.log(`Я программирую на ${this.language} уже больше ${this.experience} лет`)
       }
       hello_programmer() {
           super.hello()
           this.about_programmer()
           console.log(`Также я пишу на ${this.language0}`)
       }
   }
   
   const human = new Human('Иван', 'Петров', 19)
   human.hello()
   const student = new Student('Петя', 'Иванов', 19, 0)
   student.hello()
   const programmer = new Programmer('Коля', 'Сидоров', 19, 'Python', 2, 'React, PHP, C#')
   programmer.hello_programmer()
   
   //Создать экземпляры каждого класса и превратить в JSON
   console.log('----------------------------')
   console.log(JSON.stringify(human))
   console.log(JSON.stringify(student))
   console.log(JSON.stringify(programmer))