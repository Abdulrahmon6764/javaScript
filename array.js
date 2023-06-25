////Changing an array element
const chanEl = ['ope','ola','busayo']
chanEl[0] = 'usman'
chanEl[1] = 'abdulrahmon'
chanEl[2] = 'timileyin'
document.querySelector('.changing').innerHTML=chanEl;
////Array properties and Methods
////length property
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.querySelector('.length').innerHTML=fruits.length;
///Accessing the last array element
const frui = ["Banana", "Orange", "Apple", "Mango"];
document.querySelector('.last').innerHTML=frui[frui.length-1];
///looping array element
const $ = ["Banana", "Orange", "Apple", "Mango"];
let flen = $.length
///for loop
let text = ''
for(i=0;i<flen;i++){
text += $[i] + ' '
}
document.querySelector('.loop').innerHTML=text;
/////forEach()
let show = ''
$.forEach((value,index)=>{
    return show += value + ' '
})
document.querySelector('.foreach').innerHTML=show;
////push()
const $1 = ["Banana", "Orange", "Apple", "Mango"];
$1.push('Guava')
document.querySelector('.push').innerHTML=$1;
////join()
const $21$ = ["Banana", "Orange", "Apple", "Mango"];
document.querySelector('.join').innerHTML=$21$.join(' & ');
////pop()
const $3 =  ["Banana", "Orange", "Apple", "Mango"];
const $$5673 =  ["Banana", "Orange", "Apple", "Mango"];
document.querySelector('.pops').innerHTML=$$5673;
document.querySelector('.pop').innerHTML=$3.pop();
/////shift()
const $78 = ["Banana", "Orange", "Apple", "Mango"];
let shift = $78.shift()
document.querySelector('.shift').innerHTML=shift;
document.querySelector('.shifts').innerHTML=$78;
////unshift()
const lemon = ["Banana", "Orange", "Apple", "Mango"];
lemon.unshift('Lemon')
document.querySelector('.lemon').innerHTML=lemon;
/////concat() methods;
const boys = ["Cecilie", "Lone"];
const girls = ["Emil", "Tobias", "Linus"];
const concat = boys.concat(girls)
document.querySelector('.concat').innerHTML=concat;
///flattening array
const flatt = [[1,2,3],[4,5,6,7],[8,9,10]]
const flatte = flatt.flat()
document.querySelector('.flatt').innerHTML=flatte;
///splice()
const splice = ["Banana", "Orange", "Apple", "Mango"];
splice.splice(2,1,'carrot','watermeleon','vegetables')
document.querySelector('.splice').innerHTML=splice;
////slice()
const slice =  ["Banana", "Orange", "Apple", "Mango"];
document.querySelector('.slice').innerHTML=slice.slice(1);
/////
function random(){
    let ran = Math.floor((Math.random()*10)+1)
    let inpu = document.querySelector('.inpu').value;
    if(inpu == ran){
        document.querySelector('.demo4').innerHTML='Number predicted =  '+ inpu + '' + 'Predicted number ' + ran +' You won!!!';
    }else{
        document.querySelector('.demo4').innerHTML='Number predicted = '+ inpu +'Predicted number =' + ran +'You lose!!!';
    }
}
///sort
const sort = ["Banana", "Orange", "Apple", "Mango"];
document.querySelector('.sort').innerHTML=sort.sort();
///reversing() method
const rev =  ["Banana", "Orange", "Apple", "Mango"];
rev.reverse()
document.querySelector('.reverse').innerHTML=rev;
///decending order
const decend = [5,8,9,6,7,4,3];
decend.sort();
decend.reverse();
document.querySelector('.decend').innerHTML=decend;
////numeric sorting()
const numeic = [40, 100, 1, 5, 25, 10];
numeic.sort((n,b)=>n-b)
document.querySelector('.numeric').innerHTML=numeic;
const nums =  [40, 100, 1, 5, 25, 10];
nums.sort((w,e)=>{return e-w})
document.querySelector('.nums').innerHTML=nums;

////

function display(){
    let display = document.querySelector('.display'); 
   if(display += display.setAttribute('class','dis')){
     console.log(true)
   }else{
    console.log(false)
   }
}

function visi(){
    let visibility = document.querySelector('.visibility');
    console.log(visibility)
    if(visibility += visibility.setAttribute('class','visi')){
        console.log(true)
    }else{
        console.log(false)
    }
}
function  reset(){
    let visibility = document.querySelector('#visible');
    let display = document.querySelector('#none'); 
  if(visibility += visibility.getAttribute('id')){
   
    console.log(true)
  }else{
    console.log(false)
  }
}
