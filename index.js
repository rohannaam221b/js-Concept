// // // //...arr <= spread operator


// // // arr = [1, 2, 3];
// // // function avg(a, b, c) {
// // //     return (a + b + c) / 4;
// // // }

// // // let a = avg(...arr);
// // // // let a = [1, 2, 3, 4, ...arr, 55, 55];
// // // // let a2 = [5, 6, 7];
// // // // let a = [...arr, ...a2]; //concatenate

// // // console.log(a);


// let obj1 = {
//     name1: "rohan",
//     class1: "D",
//     favLang: "Javascript"
// }

// // let obj2 = {
// //     ...obj1, favLang: "Python"
// // }
// // console.log(obj2);

// //destructuring

// let { name1, class1, favLang } = obj1;
// console.log(obj1);


//AsyncJs

// console.log("1");

// setTimeout(() => {
//     console.log("2");

// }, 1000);

// console.log("3");
// let fs = require("fs");

// fs.readFile("file.txt", "utf-8", (err, data) => {
//     console.log(err, data);
// })


// console.log("this is end of file");


//for the problem of callback hell we use promises.


//here there will be no problem of call back hell
// const readThree = asunc(file1, file2, file3)=> {
//     let a1 = fs.readFile(file1, "utf-8");
//     let a2 = fs.readFile(file2, "utf-8");
//     let a3 = fs.readFile(file3, "utf-8");

//     let c2 = await a2;
//     console.log(c2);
//     let c1 = await a1;
//     console.log(c1);
//     let c3 = await a3;
//     console.log(c3);


// }
// readThree("file1.txt", "file2.txt", "file3.txt");

// let fs = require("fs/promises");

// let a = fs.readFile("file.txt", "utf-8");
// a.then((data) => {
//     console.log(data);
// });

// console.log("this is end of file");



//map . filter , reduce


//map

// let a = [1, 2, 3, 4, 5];
// let a2 = a.map((value) => {
//     return value * 2;
// });
// console.log(a2);

//filter

// let a = [1, 2, 3, 4, 5, 7, 8, 9, 67, 667];
// let a2 = a.filter((value) => {
//     return value >= 4;
// });
// console.log(a2);


//reduce 

// let a = [1, 2, 3, 4];
// let a2 = a.reduce((val1, val2) => {
//     return val1 * val2;
// })

// console.log(a2);


// if (1 === "1") {
//     console.log("this is true");
// } else {
//     console.log("it is false");
// }