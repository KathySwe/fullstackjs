console.log("hello world");
var x=1;
console.log(typeof(x));
x="kaythi";
console.log(typeof(x));
console.log(x);


function make1(x,y){
    console.log(x);
}

function make2(x,y,z){
    make1(x+1);
    console.log(z);
}

make2(null,null,1);

function make3(fn1){
    console.log(fn1);
    fn1();
}

function fn1(){
    console.log("Hello World");
}

make3(fn1);

str1="Apple"
console.log(str1);

str2="An "+str1;

console.log(str2);

str2=`
xxx An ${str1}
\n test gello !
`
console.log(str2);


x=100;
function make5(){
    let x=10;
    console.log(`x inside > ${x}`);
}
make5();
console.log(`x from outside > ${x}`);


var fruit=['Apple',false];
console.log(fruit[0]);
console.log(fruit[1]);

fruit.push('Pineapple')

console.log(fruit);

fruit.pop();

console.log(fruit);

fruit.unshift('Watermelon');

console.log(fruit);

fruit.shift();

console.log(fruit);

var number1=[4,7,8,9,1];
number1.sort(function(a,b){
    console.log("a "+a);
    console.log("b "+b);
    console.log(b-a);
return b-a;
});

console.log(number1);

var person={
firstName : 'Kay',
lastName : 'Thi',
age:18,
gender: 'M',
'my house':'clementi'
}
console.log(person.age);

console.log(person.gender);

console.log(person['age']);
console.log(person['my house']);

person.age=15;
console.log(person['age']);

console.log(person.postalcode);

delete person.postalcode;


setTimeout(()=>
{
    console.log(1+1);
},5000);

setTimeout(function()
{
    console.log(1+1);
},5000);




// name as x
function xf(){
    console.log(1+1);
}
setTimeout(xf,5000);

/*
setInterval(()=>{
    console.log(1+1);
},5000);*/


function throwError() {
    throw new Error('This is an error!');
}
try{
throwError();
}
catch(e){
console.log(e)
}finally{
    console.log("finally execute");
}
x5=4;
switch (x5) {
    case 1:
console.log('1')
        break;
        case 2:
        console.log('2')
        break;
        case 4:
console.log('4')
        break;
    default:console.log("this is default switch");
        break;
}
var yy=0;
while(yy <= 5){
    console.log(yy);
yy++;
}

var t=[1,3,4,5,8,9];

t.forEach((result,index)=>{
    console.log("Result > "+result);
    console.log("Index > "+index);
});

for(var i=0;i<t.length;i++){
    console.log(t[i]);
}

var months=['Jan','feb','Mar','Apr','May'];
console.log(months);

//first param remove from the front, second param is remove from behind
copyMonths=months.slice(1,4);


//index. deletecount, value
months.splice(4,2,'June','July');
console.log(months);



console.log(copyMonths);


//translate the fun to js obj
function Person1(firstn,lastn,age,gender) {
    this.firstn=firstn;
    this.lastn=lastn;
    this.age=age;
    this.gender=gender;
}
var personp={
firstName : 'Kay',
lastName : 'Thi',
age:18,
gender: 'M',
'my house':'clementi'
}

var p2=new Person1('Kenneth','Pang',42,'M');
console.log(p2.age);

class Animal{
    constructor(noOfLegs,color,shape){
this.noOfLegs=noOfLegs;
this.color=color;
this.shape=shape;
    }

    getAdditionalNoOflegs(){
        return this.noOfLegs+2;
    }
}


var c=new Animal(4,'brown','dog');
console.log(c.noOfLegs);
console.log(c.color);
console.log(c.getAdditionalNoOflegs());

class cat extends Animal{
    constructor(noOfLegs,color,shape){

        super(noOfLegs,color,shape);

    }

    getAdditionalNoOflegs(){
        return this.noOfLegs+2;
    }
}


var c=new cat(4,'brown','dog');
console.log(c.noOfLegs);
console.log(c.color);
console.log("cat "+c.getAdditionalNoOflegs());


const words=['spray ','comb','limit','chocolate','coffee'];


const longwords=words.filter(word => word.length > 6);
console.log(longwords);
//filter accept callback function

const total=[1,4,5,6].reduce((sum,value)=> sum+value,0);
console.log(total);

///can dyamically create obj
person.breakfast='rice';

console.log(person.breakfast)
//http call
Promise.resolve('Success').then(function(value){
    console.log(value);
},function(value){
        //not valled
});

