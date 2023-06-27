//  1.
//  console.log(__dirname);
//  setInterval(()=>{
//     console.log('hello world')
//  },1000);


//  2. Modules: encapsulated code(share minimum)
// const john='john';
// const peter='peter';
// const sayHi = (name)=>{
//     console.log(`Hello there ${name}`);
// }
// sayHi('susan');
// sayHi(john);
// sayHi(peter);

// local
const secret = 'SUPER SECRET'
// share
const john = 'john'
const peter = 'peter'

module.exports = { john, peter }