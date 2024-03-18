// console.log(`Hello world`)
// console.error(`This is an error `)
// console.warn(`This is a warning`)
///////////////console////////////////

// let age = 30///////////with let you can reassign values//////
// console.log(age)//////////
//you can use const but use let when you know you will reassign the value like a score in a game
///////////////////////////variables///////////////////////////////


//////////////////////data stypes///////////////////////
// const name ="john";//string
// const age = 30;//number
// const rating = 4.5;//number/decimal//
// const iscool = true;//boolean
// const x = null;//shows object//but its a null////
// const y = undefined;///undefined
// let z;//undefined//

// console.log('My name is ' + name + 'and I am ' + age)

// console.log(`My name is ${name} and I am ${age}`)

// const hello= (`My name is ${name} and I am ${age}`)

// console.log(hello)
////////////////////////data types///////////////////


////////////sting methods//////////
// const s= "hiiiii, byeeeee, hola, heyyy"
// console.log(s.length)//tells you how much characters are in it including spaces 

// console.log(s.toLocaleLowerCase())
// console.log(s.toLocaleUpperCase())

// console.log(s.substring(3,11))//it stops and starts where you want it to
// console.log(s.substring(3,11).toLocaleUpperCase)// you can chain
// console.log(s.split(`, `))

////////////sting methods//////////

/////////////////arrays hold multiple value//////////////

// const numbers = new Array(1,2,3,4,5)
// console.log(numbers)

// const fruits = ['apples', 'oranges', 'pears']; ////have to block each off with 'each'//////

// fruits[3]='grapes'
// fruits.push('mangos')//put something on the end 
// fruits.unshift('strawberries')//to add the the beginning 
// fruits.pop(0)//removes the last 1
// console.log(fruits [4])
// console.log(fruits)
// console.log(Array.isArray(fruits))//to check if it is an array and it would pop up true if not false///

// console.log(fruits.indexOf('oranges'))//just to show what number it is on the list//
// console.log('therse are fruits' + [fruits])//concatenated 

/////////////////arrays hold multiple value//////////////

//////////////////////object literals///////////////////

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: '30',
//     hobbies: ['music','movies','sport'],
//     adress: {                      //object
//         street: '50 main st',
//         city : 'Boston',
//         state: 'MA'
//     }
// }

// console.log(person);
// console.log(person.lastName, person.firstName);
// console.log(person.hobbies[1])
// console.log(person.adress.city)
////////////////////////////////////////v/////embedding 
// const {firstName, lastName, address: {city} } = person //destructuring
// console.log(firstName)//destructuring
// console.log(city)

// person.emails = 'john@gmail.com'///////////adding something////////////

// console.log(person);

//////////////////////object literals///////////////////


////////////////arrays of objects/////////////////

// const todos = [
//     {
//       id:1 ,
//       text:'Take out trash',
//       iscompleted: true 
//     },
//     {
//       id: 2,
//       text:'Meeting with boss ',
//       iscompleted: true 
//     },
//     {
//       id: 3,
//       text:'Dentist appt',
//       iscompleted: false 
//     }
// ];

// console.log(todos[1].text)
////////////////www.freeformatter.com//////////////
// const todosJSON =JSON.stringify(todos)
// console.log(todos)


//////////////for loop/while loop//////////////

// for(let i = 0; i <= 10; i++){
// //   console.log(i);
//   console.log(`For Loop Number ${i}`)
// }
// let i= 0 
// while(i <= 10){
//     console.log(`while Loop Number ${i}`)
//     i++
// }

// for (i = 0; i < todos.length; i++ )////foe loop of arrays
// console.log(todos[i])//to loop through//

// for(let todo of todos){
// console.log(todo.text, todo.id);////////todo of //////
// }

// todos.forEach(function(todo) {//////for each method/////
// console.log(todo.text);//////for each method/////
// })
// const todoText = todos.map(function(todo) {   //////map method/////
//     return todo.text;   //////map method/////
//     });
// console.log(todoText)

// const todocompleted = todos.filter(function(todo) {   //////filter method/////
//     return todo.iscompleted === true;   //////filter method/////
//     }).map(function(todo) {
//         return todo.text;
//     })
// console.log(todocompleted)
/////////////////////////////////////////////////////////////////////////////////

////////////////////////////////conditionals//////////////////////////////

// const x = 4
// const y = 11

// if(x > 5 || y > 10 ){
//     console.log('x is more than 5 or y is more than 10')
// }
// }else {
//     console.log('x is NOT 10')
// }else if(x > 10) {
// console.log('x is greater than 10')
// }else{
//     console.log('x is less than 10')
// }


// const color = 'green'
// const x = 1
// ////////////statement//then////else///////
// // const color = x > 10 ? 'red': 'blue'
//  ///////////if its true^///////not^true
// switch(color){///////switch method////////
//  case 'red':
// console.log('color is red')
// break
// case 'blue':
//     console.log('color is blue')
//     default:
//         console.log('color is not blue or red') 
// }


///////////////////////////////function////////////////////////
// function addNums(num1 = 1, num2 = 2){
//     return num1 + num2
// }
// console.log(addNums(5,5))



// const addNums = (num1 = 1, num2 = 2) =>{
//     console.log(num1 + num2)///arrow function
// }

// addNums(5,5)


// const addNums = (num1 = 1, num2 = 2) => num1 + num2;///arrow function
// console.log(addNums(5,5))//return without putting return

///////////////////////////////function////////////////////////

// /////////////////////////constructor function/////////////////////////////should start with capital
// function Person(firstName, lastName, dob){
// this.firstName = firstName;
// this.lastName = lastName;
// this.dob = new Date(dob);
// this.getBirthYear = function(){
//         return this.dob.getFullYear();
// }
// this.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`
// }
// }

// ///////////prototypes//////////////
// Person.prototype.getBirthYear=function(){
//     return this.dob.getFullYear();

// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`

// }
// ///////////prototypes//////////////


////////class/////////////cleaner/easier
// class Person{
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }



// /////instantiate v object//////
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-6-1970');

// // console.log(person1.getBirthYear())
// // console.log(person1.dob.getFullYear())
// console.log(person1.getFullName())

// console.log(person1)




///////////////DOM////////////////document object model//////
// document.getElementById('my-form')
// console.log(document.getElementById('my-form'))


// const form = document.getElementById('my-form')
// console.log(form)





// console.log(window)//parent object of the browser 

// window.alert(1)//or//
// alert('hi')// //alert(1)

///////////////single element////////////////regularly use querySelectorAll//querySelector
//document
// console.log(document.querySelector('my-form'));
// console.log(document.querySelector('.container'))




///////////////single element////////////////regularly use querySelectorAll//querySelector

///////////////multi element////////////////regularly use querySelectorAll//querySelector
// console.log(document.querySelectorAll('.item'))///gives nodelist / you can run array methods on it
// console.log(document.getElementsByClassName('item'));//htmlcollection/cant run array methods/ have to convert 
// console.log(document.getElementsByTagName('ul'));//html collection


///////////////multi element////////////////regularly use querySelectorAll//querySelector


/////////////loop through///////////////////////

// const items = document.querySelectorAll('.item')

// items.forEach((item) => console.log(item));
/////////////loop through///////////////////////

/////////changing thing in the DOM/////////////user interface

// const ul = document.querySelector('.items')

// // ul.remove();//calling on it and removing 

// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent= 'Hello'
// ul.children[1].innerText ='Brad'//is a nodelist so you can use[]
// ul.lastElementChild.innerHTML= '<h1>Hello</h1>'

// const btn = document.querySelector('.btn')
// btn.style.background = 'red'////changing the style

/////////changing thing in the DOM/////////////user interface

//////////////events////////////////

// const btn = document.querySelector('.btn')
// btn.addEventListener('mouseout', (e) =>{
// // btn.addEventListener('click', (e) => {
// e.preventDefault ();//prevent the default bahavior
// // console.log('click')
// // console.log(e.target.className)///tells you the attributes///
// // document.querySelector('my-form').style.background = '#ccc';
// // document.querySelector('body').classList.add('bg-dark');\
// document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// })

//////////////events////////////////

const myForm =document.querySelector('#my-form')
const nameInput =document.querySelector('#name')
const emailInput =document.querySelector('#email')
const msg =document.querySelector('.msg')
const userList =document.querySelector('#users')

myForm.addEventListener('submit', onsubmit) ;

function onsubmit(e){
e.preventDefault()

if(nameInput.value === '' || emailInput === ''){
    msg.classList.add('error')////better way//////
    msg.innerHTML = 'Please enter all fields'
    // alert('Please enter fields')//standard allert

    setTimeout(() => msg.remove(), 3000)
}else {
    const li = document.createElement('li')
    li.appendChild(Document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
    // console.log('Success')

    userList.appendChild(li)
    //clear fields 
    nameInput.value = ''
    emailInput.value = ''


}
}

// console.log(nameinput.value)