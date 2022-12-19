// Q.1  Write one example explaining how you can write a callback function ?

    // const name =(Name, callback)=>{
    //     console.log(Name)
    //     callback()
    // }
    // const lname=()=>{
    //     console.log("Raut")
    // }

    // name("Abhi", lname)

// Q.2Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7

// const fun = ()=>{
//    setTimeout(() => {
//         console.log("1")
//         setTimeout(() => {
//             console.log("2")
//             setTimeout(() => {
//                 console.log("3")
//                 setTimeout(() => {
//                     console.log("4")
//                     setTimeout(() => {
//                         console.log("5")
//                         setTimeout(() => {
//                             console.log("6")
//                             setTimeout(() => {
//                                 console.log("7")
//                             }, 1000);
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//    }, 1000);
// }

// fun()

// Q.3 "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7

