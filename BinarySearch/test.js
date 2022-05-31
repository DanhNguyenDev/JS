
// const compare3ngoi = (age)=>{
//   let beverage = (age >= 21) ? "Beer" : "Juice";
  
//   // console.log(beverage);  
// }

// const compareIfelse = (age)=>{
//   let danh = '';
//   if(age>=21){
//     danh = 'Beer';
//   }
//   else{
//     danh = 'Juice'; 
//   }
//   // console.log(danh)
// }
// var age = new Array(10000)
// console.time('ForOriginal')
// for(let i=0;i<age.length;i++){
//   age[i] = 0
// }
// console.timeEnd('ForOriginal')

// console.time('ForEach')
// age.forEach((item)=>{item=0})
// console.timeEnd('ForEach')
console.time('3ngoi')
let a = 10;
let b=10;
let c = 0
for(let i=0;i<100;i++){
  c = a<i?10:20
}
console.timeEnd('3ngoi')

console.time('Ifelse')
for(let i=0;i<1000;i++){
  if(a<i) c = 10;
  else c =20
}
console.timeEnd('Ifelse')




