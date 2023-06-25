// let hello = document.querySelector('.hello');
let name = ' Usman'
let names = JSON.stringify(name)
const pase = JSON.parse(names)
console.log(pase)
//////parsing JSON
const obj =  '{"name":"John", "age":30, "city":"New York"}'
const parses = JSON.parse(obj);
document.querySelector('.parse').innerHTML=parses.name +' ' + parses.age + ' ' + parses.city;
/////Array parsing
const text1 =  '["Ford", "BMW", "Audi", "Fiat"]';
const arrayparse = JSON.parse(text1)
document.querySelector('.arrayparse').innerHTML=arrayparse;
////Exceptions
const dates = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj$ = JSON.parse(dates);
obj$.birth = new Date(obj$.birth)
document.querySelector('.except').innerHTML=obj$.name + ' ' + obj$.birth + ' ' + obj$.city;
/////or
const reviver =  '{"name":"John Doe", "birth":"1986-12-14", "city":"New York"}';
const paseRevive = JSON.parse(reviver, function(key,value){
    if(key == 'birth'){
        return new Date(value)
    }else{
        return value;
    }
});
document.querySelector('.reviver').innerHTML=paseRevive.name + ' ' + paseRevive.birth +' ' + paseRevive.city;
/////Parsing Functions()
///You should avoid using functions in JSON, the functions will lose their scope, and you would have to use eval() to convert them back into functions.

////JSON Stringify()
const obj$$ =  {name: "John", age: 30, city: "New York"};
const stris = JSON.stringify(obj$$)
document.querySelector('.srtiJson').innerHTML=stris;
////Storing Data:
const object$$ =  {name: "John", age: 30, city: "New York"};
const sringy = JSON.stringify(object$$)
localStorage.setItem('userInfo', sringy)
/////get the data
let get$ = localStorage.getItem('userInfo')
let prae = JSON.parse(get$)
document.querySelector('.storing').innerHTML=prae.name + ' ' + prae.age +' ' + prae.city;
/////Looping through an Array using for()
const myJSON =  '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
const myOb = JSON.parse(myJSON);
///loop
let text = ''
for(let i = 0; i < myOb.cars.length; i++){
    text += myOb.cars[i] +' '
}
document.querySelector('.looArr').innerHTML=text;