// // Declaring variable
// var juan = 'juan';
// console.log("Juan");
// console.log(juan);

// let sarah = 'sarah'; // this a loca/block scope variabel that belongs to the scope it is in only

// if(1 == 1){
//     var cc = 66;
// }

// console.log(cc);

// if(1 == 1){
//     let bb = 23;
// }

// // console.log(bb); // this causes an error because it is a local variable not global

// // variable hoisting: when you reference the variable later in the code

// console.log(junior);
// var junior = "junibeans";

// // Functions are hoisted...not the expressions

// hoistedFunction();

// function hoistedFunction(){
//     console.log("I am hoisted");
//}

// notHoisted();
// var notHoisted = function(){    // the '=' means it is an expression which it not allowed for hoisting
//     console.log("I am not hoisted")
// }

// JS data types: boolean, null,  undefined, number, string, symbol, and object

// try {
//     notHoisted = function(){
//         console.log("I am not hoisted");
//     }
// } catch (error) {
//     console.error(error);
// }

// var ret = function(){
//     try {
//         throw 'order 77';
//     } catch (e) {
//         console.log('enter catch');
//         return 'catch return';
//     } finally{
//         console.log('Enter finally...');
//         return 'finally return';
//     }

// };

// // JS function
// function addItems(items){
//     var sum = 0;
//     for(var val of items){
//         sum += val;
//     }

//     return sum;
// }

// var p = addItems([1,2,3]);  // you can either assign the return value to a var
// console.log(addItems([1,2])); // or you can return it in a log

// Function expression like above with var p...
// usefull when you need to pass functions as args

// Functons can not globally change global args but they can change
// args that are objects

// // Defaul parameters
// function pepper(x = 1, t,y){ // where x is the default arg
//     return x * t * y;
// }

// rest parameters
// function pepper(x,...y){
//     return y.map(val => x * val); // val iterates y and returns the items
// }

// console.log(pepper(1,2,3,4));

// Arrow functions: shorter but they are anonymous functions
// var selected = allJobs.filter(funcion(job){
//     return job.isSelected
// });
// ES6
// var selected = allJobs.filter(job=> job.isSelected());

// Closure: a nested function that inherits from the outer function


// function squareList(list){
//     function square(x){
//         return x * x;
//     }
//     for(var i = 0; i < list.length; i++){
//         list[i] = square(list[i]);
//     }
//     return list;
// }

// console.log(squareList([1,2,3,4]));

// function leftOperand(lop){
//     function rightOperand(rop){
//         return lop + rop;
//     }
//     return lop;
// }

// console.log(leftOperand(2));
// console.log(leftOperand(3)(5)); // second arg sets the closure

// var makePerson = function(ssn, name){
//     return{
//         setName: function(nName){   // label to use in order to call function?
//             name = nName;
//         },

//         getName:() => {
//             return name;
//         }, 
        
//         setSSN: function (nSSN){
//             ssn = nSSN;
//         },

//         getSSN: () => {
//             return ssn;
//         }
//     }
// }

// var p = makePerson('1234', 'juan');
// console.log(p);

// p.setSSN('3333');
// p.setName('juaaa');

// console.log(p.getName() + ' ' + p.getSSN()); // the return from the outer function is alread dead but the closure/inner function keeps the outer alive in a way through inheritance
// !! var shadowing could be in an issue with preserving the outer function

// JS object: collection of properties and values
// properties are vars attached to object

// var car = new Object(); // means it is a new object
// car.engine = 'v8';
// car.transmission = '8-speed';
// car.color = 'black';
// car.style = 'truck';
// car.toString = function(){ // all objects have the toString function...this was taken from java
//     return this.engine + "," + this.transmission + "," + this.color + "," + this.style;
// }

// console.log(car.toString());

// creating js object where the constructor is when creating an expression
// this refers to a new instance in js

// function Desk(wood, weight, height, color){
//     this.wood = wood;
//     this.weight = weight;
//     this.height = height;
//     this.color = color;
// }

// // constructor
// var cc = new Desk('mohog', '222', '20', 'red');
// console.log(cc);


// you can have properties inside of a variable instead of a function
// var Course = {
//     name: "Intor to Web Dev",
//     number: "317",
//     dept: "csc",
//     id: 1233,

//     toString: function() {
//         return this.dept + " " + this.number + " " + this.name;
//     },
//     toStr(params){}
 
// };

// var cr = Object.create(Course); // will delegate to another object if failed lookups
// cr.newFunc = function(params){return 'help'};
// JS Objects-Methods
// ? Method are functions inside of an object
// LIKE how we did above with the label toString

// Prototype: js is prototype based and not class
// prototype property mostly implemented for inheritance purposes in js


// Prototype Chain: connection of js objects ...or think of it as link instead of extends from java

// Prototypical Inheritance

// function Person() { // object can be declared as a function
//     this.ssn = 'SSN';
//     this.name = 'NAME';

//     Person.prototype.getSSN = function(){   // creating the prototype here
//         return this.ssn;
//     }
// }

// function Employee() {
//     Person.call(this); // calls a method of an object
//     this.id = 'ID';
//     this.dept = 'DEPT';
//     this.pay = 'PAYs';
// }

// // Prototype chain
// Employee.prototype = Object.create(Person.prototype); // this links/extends
// Employee.prototype.constructor = Employee; // must be done on constructor with current

// JS Classes: created to do whata prototype does but in a simpler manner
// ... they have declarations and expressions
// Declarations: class declarations are not hoisted but the functions declaration can be

// class Course{
//     constructor(name,number,dept){
//         this.name = name; // this.name is the local var in a way
//         this.number = number;
//         this.dept = dept;

//     }
// }

// let c = new Course('Into', 317, 'cdc');
// console.log(c.name);

// JS Expressions: you can include a class name if you would like
// let course = class{
//     constructor(name){
//         this.name = name;
//     }
// }

// Class body: here you put methods, properties, constructors, or prototype methods
// the error checking here is more strict

// Class Constructor: used for creating and initializing an object...there can only be one constructor
// super...used to call the constructor of the parent class
//...we've seen the syntax above before

// Class/prototype methods

// Class static methods: do not belong to an instance and can be called directly but not through an instance 
// if not assigned a value then it will return undefined

// class properties: instance properties must be inside of a method

// Promisses: used to handle asynchronous operations and it's return value...
// passing a function as an args...don't use ()...
// 3 parts: executor is code that will run, resolve executes if fulfilled
// reject executes if failed

// promisses remove nested call backs...where you pass functions as args and wait till the inner funcs are done to call the outer functions
// circumvent using if-then chaining

// callback mountain

// event1(function(result1){
//     event2(function(result,result2){
//         event3(function(result2,results){
//             console.log('all events completed');
//         },func_failed);
//     },func_failed);
// },func_failed);

// event(function(args){ event2(function(args){}, failed); }, failed);

// The callback is a Function as an arg, followed by a failed as the second arg
// the function is declared inside of the parameter and has a body using {}...
// inside of these {} could be another function to call back

// Example using Promises: advantage is easier and cleaner clode

// general syntax
// event1()
//     .then()
//     .then()
//     .catch(); 


// more detailed syntax
// event1()
//     .then( function(data){

//     })
    
//     .then( function(data){

//     })

//     .catch( function(err){

//     })

// Using fat-arrow in order to use anonymous functions
// event1()
//     .then( () => {})
//     .then( () => {})
//     .catch( (err) => {});

// Creating a Promise

// let p0 = new Promise((resolve,reject) => {
//     console.log('executor code');

//     if(sucessful) {
//         resolve(results);
//     }else {
//         reject(reason);
//     }
    
//  }); // anonymous function with args inside the main functions params

// above...create a new functions expression inside the params is an anonymouse  function and within
// it's body add statements...as a result there is a } bracket prior to last );

// a promise is a nested function that promises to return control back to it's outter function
// a promise has a .then which both a then and a catch in order to fulfill or reject
// catch() is sugar for then(null,reject_function) 

// attaching resolve and reject functions: where there is a promise expression !! which is anonymous
// and inside this are a resolve and reject...then there is a .then and catch attached to the var is assigned the expression

// let p0 = new Promise((resolve, reject) => { // the anonymous function is in the params of the anonymous promise 
//     console.log('executor code');

//     if(getRandomInt() % 2 == 0) { // added the () in getRandomInt in order to get return and not the structure representation of the function
//         resolve({'status': 'even'}); // executes if successful...looks like json here...just strings
//     } else {
//         reject({'status': 'number is odd'});
//     }

// });

// // attaching the callbacks
// p0.then(function(data) { 
//     console.log(data); // the resolve
// }) .catch(function(err) {
//     console.log(err);   // the reject
// })

// // testing hoisting...to be used above 
// function getRandomInt(){
//     return Math.floor(Math.random() * 10);
// }

// Promise Chaining: used to exec multiple async functions one after another
// uses  the .then()...make sure the links return a promise...don't break the chain
// .then() is used to return a promise

// Promise Chaining: ...using the fetch api to get resources
// ...fetch returns a promise
// 

// using the giphy API with fetch
// fetch(url)
//     .then(data => {return data.json}) // if successful
//     .then(data_json => {
//         let url = data_json.images['fixed_width'].url;
//         console.log(url);
//         document.getElementById('example').innerHTML = '<img src="' + url + '"></img';
//     })
//     .catch(err => console.log(err));

// Promise All: used to run multiple promises that are similar
// Promise.all() takes in an array of promise objects
// return a promise when all promises are resolved...even if out of order

//Promise All
// Fulfillment: if empty, fulfilled already or not promises...with return of array containing all interables
// Reject: rejects with value of the pormises 

// ex...of Promise All
// let p0 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('1'), 1500);
// });

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('2'), 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('3'), 500);
// });

// Promise All taking in an array of [p0, p1, p2] promises
// keep in mind that the promise expression has the keywords 'new Promise'

// Promise.all([p0, p1, p2])
//     .then((values) => { // param is from the .all(###) ...I think? why else would we be able to iterate it as an array
//         for(v of values) {
//             console.log(v);
//         }
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// because of promise...we get the order 1,2,3 which disregards the time out
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('1'), 1500);
// });

// let p4 = new Promise((resolve, reject) => {
//     setTimeout(() => reject('2'), 1000);
// });

// let p5 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('3'), 500);
// });

// Promise.all([p3,p4,p5])
//     .then((values) => {
//         for(v of values){
//             console.log(v);
//         }
//     })
//     .catch((err) => {
//         console.log("The rejected value is " + err); // this value is returned if rejected
//     });

// Multiple rejected promises cannot occur because the first reject triggers the stop

// Way to handle multiple rejected in which each reject is triggered and returned

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => reject('reject 1'), 1500);
// });

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject('reject 2'), 1000);
// });

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('3', 500));
// });

// Promise.all([
//     p1.catch((err) => {'p1 error' + console.log(err)}),
//     p2.catch((err) => {'p2 error' + console.log(err)}),
//     p3.catch((err) => {'p3 error' + console.log(err)})
// ])
//     .then(
//         (values) => {
//             let i = 0;
//             for(v of values){
//                 console.log(i + '==> ' + v);
//                 i++;
//             }
//         }
//     );

// above...enter the rejects as a catch with a display of their err
// then use a .then() and iter to display the contents
// undefined is for the functions that were rejected 


// Sugar w/ await and async
// async returns an implicit Promise object
// Async can contain await keyword which is used to pause for the passed promises
// await can only be used inside of async

// Promise chain using async/await
// Promise Chain from before
// fetch(url)
//     .then(data => {return data.json()})
//     .then(data_json => {
//         let url = data_json.data.images['fixed_width'].url;
//         document.getElementById('example').innerHTML = 
//         '<img src="' + url + '"></img>';
//     })
//     .catch(err => console.log(err));

// // Promise chain using async/await
// async function getGIF(url){ // takes in a url as a function
//     try{
//         let data = await fetch(url); // wait to get the fetched url
//         let data_json = await data.json(); // this the sugar...notice how we don't need an anonymous

//         let img_url = data_json.data.images['fixed_width'].url;
//         console.log('<img src="' + img_url + '"></img>');
//     }   catch(err) {
//         console.log(err);
//     }
// }

// getGIF(baseurl);


// Front-End JS
// code run on the client side where the client can see 
// Back-end is where the client cannot see, like a server,...using node
// JS can manipulate the DOM...document object model by adding, removing, or altering elements
// ...JS can alter Html and css
// You can use ajax to make async js calls
// using ajax, xmlhttprequest, fetch api, and axios api
// DOM: is the structure of the html page with all the elements

// DOM allows the manipulation of the DOM through an api...'document.###'
// document.write("This text comes from an external script."); // testing connection to html

// There are different type of nodes, there is one for the document, elements, attributes, and text

// Property allows to update the value of a text node

// nodeValue can only be used on text node
// some functions will only work on certain types of nodes

// DOM-Access/Update node
// !!pitfall...does not change other children following the targeted child
// !!pitfall...remember to include defer so that js waits for the page to load before trying to access elements

// var juanito = document.getElementsByClassName("title")[0];
// document.getElementById("title").append(juanito);

//----------!!! UNCOMMMENT WHEN YOU HAVE INTERNET CONNECTION !!!//
// fetch('https://jsonplaceholder.typicode.com/albums/2/photos')
//     .then(response => response.json()) // respnse is the return from the promist but it is just and object that must be converted to json
//     .then(data => {
//         console.log(data);
//         for(var i = 0; i < data.length; i++){
//             var object = data[i];
//             console.log(i + "%");
//             for(var property in object){
//                 console.log(property + ": " + object[property]);
//             }
//         }
//     });

    var jsonArray = [
        {
          "albumId": 2,
          "id": 51,
          "title": "non sunt voluptatem placeat consequuntur rem incidunt",
          "url": "https://via.placeholder.com/600/8e973b",
          "thumbnailUrl": "https://via.placeholder.com/150/8e973b"
        },
        {
          "albumId": 2,
          "id": 52,
          "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
          "url": "https://via.placeholder.com/600/121fa4",
          "thumbnailUrl": "https://via.placeholder.com/150/121fa4"
        },
        {
          "albumId": 2,
          "id": 53,
          "title": "soluta et harum aliquid officiis ab omnis consequatur",
          "url": "https://via.placeholder.com/600/6efc5f",
          "thumbnailUrl": "https://via.placeholder.com/150/6efc5f"
        },
        {
          "albumId": 2,
          "id": 54,
          "title": "ut ex quibusdam dolore mollitia",
          "url": "https://via.placeholder.com/600/aa8f2e",
          "thumbnailUrl": "https://via.placeholder.com/150/aa8f2e"
        },
        {
          "albumId": 2,
          "id": 55,
          "title": "voluptatem consequatur totam qui aut iure est vel",
          "url": "https://via.placeholder.com/600/5e04a4",
          "thumbnailUrl": "https://via.placeholder.com/150/5e04a4"
        },
        {
          "albumId": 2,
          "id": 56,
          "title": "vel voluptatem esse consequuntur est officia quo aut quisquam",
          "url": "https://via.placeholder.com/600/f9f067",
          "thumbnailUrl": "https://via.placeholder.com/150/f9f067"
        },
        {
          "albumId": 2,
          "id": 57,
          "title": "vero est optio expedita quis ut molestiae",
          "url": "https://via.placeholder.com/600/95acce",
          "thumbnailUrl": "https://via.placeholder.com/150/95acce"
        },
        {
          "albumId": 2,
          "id": 58,
          "title": "rem pariatur facere eaque",
          "url": "https://via.placeholder.com/600/cde4c1",
          "thumbnailUrl": "https://via.placeholder.com/150/cde4c1"
        },
        {
          "albumId": 2,
          "id": 59,
          "title": "modi totam dolor eaque et ipsum est cupiditate",
          "url": "https://via.placeholder.com/600/a46a91",
          "thumbnailUrl": "https://via.placeholder.com/150/a46a91"
        },
        {
          "albumId": 2,
          "id": 60,
          "title": "ea enim temporibus asperiores placeat consectetur commodi ullam",
          "url": "https://via.placeholder.com/600/323599",
          "thumbnailUrl": "https://via.placeholder.com/150/323599"
        },
        {
          "albumId": 2,
          "id": 61,
          "title": "quia minus sed eveniet accusantium incidunt beatae odio",
          "url": "https://via.placeholder.com/600/e403d1",
          "thumbnailUrl": "https://via.placeholder.com/150/e403d1"
        },
        {
          "albumId": 2,
          "id": 62,
          "title": "dolorem cumque quo nihil inventore enim",
          "url": "https://via.placeholder.com/600/65ad4f",
          "thumbnailUrl": "https://via.placeholder.com/150/65ad4f"
        },
        {
          "albumId": 2,
          "id": 63,
          "title": "facere animi autem quod dolor",
          "url": "https://via.placeholder.com/600/4e557c",
          "thumbnailUrl": "https://via.placeholder.com/150/4e557c"
        },
        {
          "albumId": 2,
          "id": 64,
          "title": "doloremque culpa quia",
          "url": "https://via.placeholder.com/600/cd5a92",
          "thumbnailUrl": "https://via.placeholder.com/150/cd5a92"
        },
        {
          "albumId": 2,
          "id": 65,
          "title": "sed voluptatum enim eaque cumque qui sunt",
          "url": "https://via.placeholder.com/600/149540",
          "thumbnailUrl": "https://via.placeholder.com/150/149540"
        },
        {
          "albumId": 2,
          "id": 66,
          "title": "provident rerum voluptatem illo asperiores qui maiores",
          "url": "https://via.placeholder.com/600/ee0a7e",
          "thumbnailUrl": "https://via.placeholder.com/150/ee0a7e"
        },
        {
          "albumId": 2,
          "id": 67,
          "title": "veritatis labore ipsum unde aut quam dolores",
          "url": "https://via.placeholder.com/600/1279e9",
          "thumbnailUrl": "https://via.placeholder.com/150/1279e9"
        },
        {
          "albumId": 2,
          "id": 68,
          "title": "architecto aut quod qui ullam vitae expedita delectus",
          "url": "https://via.placeholder.com/600/e9603b",
          "thumbnailUrl": "https://via.placeholder.com/150/e9603b"
        },
        {
          "albumId": 2,
          "id": 69,
          "title": "et autem dolores aut porro est qui",
          "url": "https://via.placeholder.com/600/46e3b1",
          "thumbnailUrl": "https://via.placeholder.com/150/46e3b1"
        },
        {
          "albumId": 2,
          "id": 70,
          "title": "quam quos dolor eum ea in",
          "url": "https://via.placeholder.com/600/7375af",
          "thumbnailUrl": "https://via.placeholder.com/150/7375af"
        },
        {
          "albumId": 2,
          "id": 71,
          "title": "illo qui vel laboriosam vel fugit deserunt",
          "url": "https://via.placeholder.com/600/363789",
          "thumbnailUrl": "https://via.placeholder.com/150/363789"
        },
        {
          "albumId": 2,
          "id": 72,
          "title": "iusto sint enim nesciunt facilis exercitationem",
          "url": "https://via.placeholder.com/600/45935c",
          "thumbnailUrl": "https://via.placeholder.com/150/45935c"
        },
        {
          "albumId": 2,
          "id": 73,
          "title": "rerum exercitationem libero dolor",
          "url": "https://via.placeholder.com/600/1224bd",
          "thumbnailUrl": "https://via.placeholder.com/150/1224bd"
        },
        {
          "albumId": 2,
          "id": 74,
          "title": "eligendi quas consequatur aut consequuntur",
          "url": "https://via.placeholder.com/600/65ac19",
          "thumbnailUrl": "https://via.placeholder.com/150/65ac19"
        },
        {
          "albumId": 2,
          "id": 75,
          "title": "aut magni quibusdam cupiditate ea",
          "url": "https://via.placeholder.com/600/a9ef52",
          "thumbnailUrl": "https://via.placeholder.com/150/a9ef52"
        },
        {
          "albumId": 2,
          "id": 76,
          "title": "magni nulla et dolores",
          "url": "https://via.placeholder.com/600/7644fe",
          "thumbnailUrl": "https://via.placeholder.com/150/7644fe"
        },
        {
          "albumId": 2,
          "id": 77,
          "title": "ipsum consequatur vel omnis mollitia repellat dolores quasi",
          "url": "https://via.placeholder.com/600/36d137",
          "thumbnailUrl": "https://via.placeholder.com/150/36d137"
        },
        {
          "albumId": 2,
          "id": 78,
          "title": "aperiam aut est amet tenetur et dolorem",
          "url": "https://via.placeholder.com/600/637984",
          "thumbnailUrl": "https://via.placeholder.com/150/637984"
        },
        {
          "albumId": 2,
          "id": 79,
          "title": "est vel et laboriosam quo aspernatur distinctio molestiae",
          "url": "https://via.placeholder.com/600/c611a9",
          "thumbnailUrl": "https://via.placeholder.com/150/c611a9"
        },
        {
          "albumId": 2,
          "id": 80,
          "title": "et corrupti nihil cumque",
          "url": "https://via.placeholder.com/600/a0c998",
          "thumbnailUrl": "https://via.placeholder.com/150/a0c998"
        },
        {
          "albumId": 2,
          "id": 81,
          "title": "error magni fugiat dolorem impedit molestiae illo ullam debitis",
          "url": "https://via.placeholder.com/600/31a74c",
          "thumbnailUrl": "https://via.placeholder.com/150/31a74c"
        },
        {
          "albumId": 2,
          "id": 82,
          "title": "voluptate voluptas molestias vitae illo iusto",
          "url": "https://via.placeholder.com/600/88b703",
          "thumbnailUrl": "https://via.placeholder.com/150/88b703"
        },
        {
          "albumId": 2,
          "id": 83,
          "title": "quia quasi enim voluptatem repellat sit sint",
          "url": "https://via.placeholder.com/600/a19891",
          "thumbnailUrl": "https://via.placeholder.com/150/a19891"
        },
        {
          "albumId": 2,
          "id": 84,
          "title": "aliquam dolorem ut modi ratione et assumenda impedit",
          "url": "https://via.placeholder.com/600/b5205d",
          "thumbnailUrl": "https://via.placeholder.com/150/b5205d"
        },
        {
          "albumId": 2,
          "id": 85,
          "title": "ullam delectus architecto sint error",
          "url": "https://via.placeholder.com/600/eb7e7f",
          "thumbnailUrl": "https://via.placeholder.com/150/eb7e7f"
        },
        {
          "albumId": 2,
          "id": 86,
          "title": "qui vel ut odio consequuntur",
          "url": "https://via.placeholder.com/600/fd5751",
          "thumbnailUrl": "https://via.placeholder.com/150/fd5751"
        },
        {
          "albumId": 2,
          "id": 87,
          "title": "eos nihil sunt accusantium omnis",
          "url": "https://via.placeholder.com/600/224566",
          "thumbnailUrl": "https://via.placeholder.com/150/224566"
        },
        {
          "albumId": 2,
          "id": 88,
          "title": "inventore veritatis magnam enim quasi",
          "url": "https://via.placeholder.com/600/75334a",
          "thumbnailUrl": "https://via.placeholder.com/150/75334a"
        },
        {
          "albumId": 2,
          "id": 89,
          "title": "id at cum incidunt nulla dolor vero tenetur",
          "url": "https://via.placeholder.com/600/21d35",
          "thumbnailUrl": "https://via.placeholder.com/150/21d35"
        },
        {
          "albumId": 2,
          "id": 90,
          "title": "et quae eligendi vitae maxime in",
          "url": "https://via.placeholder.com/600/bfe0dc",
          "thumbnailUrl": "https://via.placeholder.com/150/bfe0dc"
        },
        {
          "albumId": 2,
          "id": 91,
          "title": "sunt quo laborum commodi porro consequatur nam delectus et",
          "url": "https://via.placeholder.com/600/40591",
          "thumbnailUrl": "https://via.placeholder.com/150/40591"
        },
        {
          "albumId": 2,
          "id": 92,
          "title": "quod non quae",
          "url": "https://via.placeholder.com/600/de79c7",
          "thumbnailUrl": "https://via.placeholder.com/150/de79c7"
        },
        {
          "albumId": 2,
          "id": 93,
          "title": "molestias et aliquam natus repellendus accusamus dolore",
          "url": "https://via.placeholder.com/600/2edde0",
          "thumbnailUrl": "https://via.placeholder.com/150/2edde0"
        },
        {
          "albumId": 2,
          "id": 94,
          "title": "et quisquam aspernatur",
          "url": "https://via.placeholder.com/600/cc12f5",
          "thumbnailUrl": "https://via.placeholder.com/150/cc12f5"
        },
        {
          "albumId": 2,
          "id": 95,
          "title": "magni odio non",
          "url": "https://via.placeholder.com/600/9cda61",
          "thumbnailUrl": "https://via.placeholder.com/150/9cda61"
        },
        {
          "albumId": 2,
          "id": 96,
          "title": "dolore esse a in eos sed",
          "url": "https://via.placeholder.com/600/1fb08b",
          "thumbnailUrl": "https://via.placeholder.com/150/1fb08b"
        },
        {
          "albumId": 2,
          "id": 97,
          "title": "labore magnam officiis nemo et",
          "url": "https://via.placeholder.com/600/e2223e",
          "thumbnailUrl": "https://via.placeholder.com/150/e2223e"
        },
        {
          "albumId": 2,
          "id": 98,
          "title": "sed commodi libero id nesciunt modi vitae",
          "url": "https://via.placeholder.com/600/a77d08",
          "thumbnailUrl": "https://via.placeholder.com/150/a77d08"
        },
        {
          "albumId": 2,
          "id": 99,
          "title": "magnam dolor sed enim vel optio consequuntur",
          "url": "https://via.placeholder.com/600/b04f2e",
          "thumbnailUrl": "https://via.placeholder.com/150/b04f2e"
        },
        {
          "albumId": 2,
          "id": 100,
          "title": "et qui rerum",
          "url": "https://via.placeholder.com/600/14ba42",
          "thumbnailUrl": "https://via.placeholder.com/150/14ba42"
        }
      ];

      /* TRYING TO ADD IMG INTO FLEXBOX */
      // var elementTitle = document.getElementById("title");
      // elementTitle.append(jsonArray[49].url);

      // var elementPostAuthor = document.getElementsByClassName("postAuthor")[0];
      // elementPostAuthor.append(jsonArray[49].id);


      // var today = new Date();
      // var date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
      // var elementCreationTime = document.getElementsByClassName("creationTime")[0];
      // elementCreationTime.append(date);

      // const para = document.createElement("p");
      // const node = document.createTextNode("This is new.");
      // para.appendChild(node);
      // const element = document.getElementById("image-container");
      // element.appendChild(para);

      

      /* ADD EVENTLISTENER LATER .addEventListener("eventType", function(){other functions}) */
      function registrationValidator() {
        let usernameRegex = /^(?=.{3})[a-zA-Z]+([a-zA-Z]|[0-9])/;
        let username = document.getElementById('username').value;
        var flag = true;
        if(usernameRegex.test(username)) {
          document.querySelector("#usernameError").style.cssText = "visibility: hidden; max-height: 0";
        }
        else {
          console.log("Invalid Username, length is " + username.length);
          document.querySelector("#errorMessages").style.cssText = "visibility: visible; max-height: 100%";
          document.querySelector("#usernameError").style.cssText = "visibility: visible; max-height: 100%";

          flag = false;
        }

        let pswdRegex = /(?=.*\d)(?=.*[A-Z])(?=.*[*-+!@#$^&*]).{8,}/;
        let pswd = document.getElementById('password').value;
        
        if(pswdRegex.test(pswd)) {
          document.querySelector("#passwordError").style.cssText = "visibility: hidden; max-height: 0";
        }
        else {
          console.log("Invalid Password, length is " + pswd.length);
          document.querySelector("#errorMessages").style.cssText = "visibility: visible; max-height: 100%";
          document.querySelector("#passwordError").style.cssText = "visibility: visible; max-height: 100%";

          flag = false;
        }

        if(pswd != document.getElementById('confirm_password').value){
          console.log("Invalid Password match: " + pswd + " and "+ document.getElementById('confirm_password').value);
          document.querySelector("#errorMessages").style.cssText = "visibility: visible; max-height: 100%";
          document.querySelector("#passwordNotMatch").style.cssText = "visibility: visible; max-height: 100%";
          flag = false
        }

        else{
          document.querySelector("#passwordNotMatch").style.cssText = "visibility: hidden; max-height: 0";
        }


        if(flag == true){
          document.querySelector("#errorMessages").style.cssText = "visibility: hidden; max-height: 0";
        }
        return flag;
      }

      // function acceptAgeValidator() {
      // let acceptAge = document.getElementById('acceptAge').checked;
      //   if(acceptAge)
      //     console.log("Checkbox clicked success");
      //   else
      //     console.log("Invalid! Must Click checkboxes!")
      //     return false;
        
      // }

      // function rulesValidator() {
      //   let rules = document.getElementById('rules').checked;
      //     if(rules)
      //       console.log("Checkbox clicked success");
      //     else
      //       console.log("Invalid! Must Click checkboxes!");
      //       return false;
          
      //   }
      