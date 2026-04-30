num="java  ${20+20}"
console.log(num);
num='javascript ${20+20}'
console.log(num);
num=50;
num=`addition 
of 10 and 20 : ${20+20}`
console.log(num);

num=true
console.log(num)

class SampleExample{
    display(){
        console.log("this is non-static display method in SampleExample class");
    }
    test(){
        console.log("test method");
}
}
s1=new SampleExample()
s1.display()
s1.test()


function additionExample(){
    console.log(10+20);
}
additionExample()

num=333
result=num%2==0?"even" : "odd"
console.log(result);

a=10;
b='10'
console.log(a===b);
console.log(a==b);


a=10;
b=`10`
c=null
d=Symbol(10);
e=28628784634024790990
let f;
console.log("TYpe of variable a",typeof a);
console.log("TYpe of variable a",typeof b);
console.log("TYpe of variable a",typeof c);
console.log("TYpe of variable a",typeof d);
console.log("TYpe of variable a",typeof e);
console.log("TYpe of variable a",typeof f);


let a=10;
a=20;
let a=20;