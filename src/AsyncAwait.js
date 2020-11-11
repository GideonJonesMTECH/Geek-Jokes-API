function resolveAfter2Seconds(x) {
 return new Promise(resolve => {
  setTimeout(() => {
   resolve(x);
  }, 2000)
 });
}

async function add1(x) {
 const a = await resolveAfter2Seconds(20);
 const b = await resolveAfter2Seconds(30);
 return x + a + b;
}

async function add2(x) {
 const pA = resolveAfter2Seconds(20);
 const pB = resolveAfter2Seconds(30);
 return x + await pA + await pB;
}

add1(10).then(v => {
 console.log(v); //prints "60" after 4 seconds.
})
add2(10).then(v => {
 console.log(v); //prints "60" after 2 seconds.
})


const makeRequest = () => {
 return promise1().then(value1 =>{
  //do something
  return promise2(value1).then(value2 => {
   //do something
   return promise3(value1, value2);
  })
 })
}

//OR

const makeRequest = async () => {
 const value1 = await promise1();
 const value2 = await promise2(value1);
 await promise3(value1,value2);
}