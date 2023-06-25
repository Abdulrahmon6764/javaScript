document.querySelector('#demo1').innerHTML='javaScript Object';
document.querySelector('.demo2').innerHTML='Object are Variables';
let myName= 'Usman Abdulrahmon';
document.querySelector('.demo3').innerHTML=myName + ' ' + 'this is javaScript variables';

const per$Info = {
    fullName:'Usman Timiley',
    age:20
}
document.querySelector('.demo4').innerHTML=per$Info.fullName + ' ' + per$Info['age'];
const details = {}
details.firstName = 'Usman';
details.lastName = 'Abdul';
details.age = 20;
details.id = 1;
details.dream = 'Big dream'
document.querySelector('.demo5').innerHTML=details.firstName + details.lastName + '<br>'+ details.age + '<br>' + details.id + '<br>' + details.dream;

const currency = {
    dollor$:464,
    naira:1000,
    pounds:200

}
const y = currency
y['pounds'] = 850;
document.querySelector('.demo6').innerHTML=currency.pounds + '<br>' +currency['dollor$']+'<br>' +currency['naira'];

const inpu =  document.querySelector('.inpu');
const eyes =  document.querySelector('.eyes');
  eyes.addEventListener('click', (e)=>{
    e.preventDefault()
    if(inpu.getAttribute('type') == inpu.setAttribute('type','text')){
    inpu.setAttribute('type','password')
    }else{
       inpu.setAttribute('type','text')
    }
  })

  let che = document.querySelector('.che');
  let icon = document.querySelector('.icon');
  icon.addEventListener('click',(e)=>{
    e.preventDefault()
    if(che.getAttribute('type') == 'password'){
        che.setAttribute('type', 'text')
        icon.setAttribute('class','fa-solid fa-eye-slash')
    }else{
       che.setAttribute('type','password')
        icon.setAttribute('class','fa-regular fa-eye')
    }
  })
//   function showd(){

//   }

const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
// let x = ''
// for(let y in myObj.cars){
//   x += '<h2>' + myObj.cars[y].name + '</h2>'
//   for(let g in myObj.cars[y].models){
//     x += myObj.cars[y].models[g] + '<br>'
//   }
// }
// document.querySelector('.nestedObj').innerHTML=x;
let u = ''
for(let y in myObj.cars){
  u += '<h2>' + myObj.cars[y].name + '</h2>'
  for(let g in myObj.cars[y].models){
    u += myObj.cars[y].models[g] +'<br>'
  }
}
document.querySelector('.nestedObj').innerHTML=u;

// create object
const person2 = {
  firsN:'Usman',
  lasN:'Timileyin',
  age:'55yrs',
  id:6612,
  fullDetails:function(){
    return this.firsN + ' ' + this.lasN + ' ' + this.age + ' ' + this.id
  } 
}
document.querySelector('.details3').innerHTML=person2.fullDetails();

//// Adding Method to an Object
const users = {
  fullN:'Usman Abdul',
   pass:'Grandmom$6764',
   email:'abdulrahmon@gmail.com'
}
users.user1 = function(){
  return this.fullN + ' ' + this.pass + ' ' + this.email
}
document.querySelector('.user1').innerHTML=users.user1();
/////Use built-In in Object
const users2 = {
   firsN2:'Adekola',
   lasN2:'Damola',
   pass2:'adekola122',
   email2:'adekola2@gmail.com'
}
users2.user2 = function(){
  return this.firsN2 + ' ' + this.lasN2 + ' ' + ' ' + this.email2 + ' ' + this.pass2
}
document.querySelector('.user2').innerHTML=users2.user2();
////Displaying the object properties by name... 
const person322 = {
  name:'Abdulahi',
  lastNamw$:'Oluwaseun',
  age$:20
}
document.querySelector('.propername').innerHTML=person322.name + ' ' + person322.lastNamw$ + ' ' + person322.age$;
///Displaying the object in a loop...
const person32 = {
  firstN:'Maryam',
  seconN:'Ote',
  age$$:23
}
let dis = '' 
for(let h in person32){
  dis += person32[h] + ' '
}
document.querySelector('.loopobj').innerHTML=dis;
//////using object.values()
const Info$ = {
  addr:'Oke ayepe',
  city:'Agunbelewo',
  state:'Osogbo State'
}
const myArray = Object.values(Info$)
document.querySelector('.objvalue').innerHTML=myArray;
////Using JSON.stringify()
const Infor = {
  adress:'23 street',
  city:'Olaide',
  state:'Lagos'
}
let myStringify = JSON.stringify(Infor);
document.querySelector('.jsontri').innerHTML=myStringify;
////stringify Date()
let datess = new Date()
const dates = {
  names$$:'Baddycode',
  today:datess
}
let dateStringify = JSON.stringify(dates)
document.querySelector(".striDate").innerHTML=dateStringify;
/////stringify functions()
const progr = {
  fir1$:'javaScript',
  sec1$:function(){
    return 30;
  }
}
progr.fir1$ = progr.fir1$.toUpperCase();
progr.sec1$ = progr.sec1$.toString();
let proStringify = JSON.stringify(progr);
document.querySelector('.strifunc').innerHTML=proStringify;
//////stringify() arrays
let fru = 'apple'
const data = ['mango','orange','banana'];
 data[1] = data[1].concat(' ', fru)
let arr = JSON.stringify(data);
const strings = JSON.parse(arr)
console.log(strings)
console.log(strings[2])
document.querySelector('.striarray').innerHTML=arr;



// function quiz(){
//   const alldata = [
//     {
//       QU1:'wHAT IS MY name?',
//       A:'Usman',
//       B:'Abdulrahmon',
//       C:'Lolala'
//     }
//   ]
//   if(alldata.QU1 == alldata.B){
//     alert('incorrect')
//   }else{
//     alert('corec')
//   }
//   console.log(alldata);
// }

// console.log(alldata.q.ans)
let ope = 'Ope'

console.log(ope.slice(0,2))
