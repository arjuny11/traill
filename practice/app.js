// function one(){
//     return 1;
// }
// function two(){
//     return one()+ one();
// }
// function three(){
//     let ans = two()+one();
//     console.log(ans);
// }
// three(); ////breakpoints

// h1= document.querySelector("h1");
// function changColor(color , delay , nextCOlorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         nextCOlorChange();
//     }, delay);
// }
//  changColor("red", 1000,()=>{
//     changColor("yellow",1000,()=>{
//         changColor("green", 1000 ,()=>{
//             changColor("blue", 1000, ()=>{

//             });
//         });
//     });

//  });
 //callbacks nestiing->   callback hell
//   function saveDb(data , success, failure){
//     let internetSpeed = Math.floor(Math.random()*10) +1;
//  if (internetSpeed>4){
//     success();
//  }
//     else{
//         failure();
//     }
 
//   }
//   saveDb("apnaCollege", 
//   ()=>{
//     console.log("Success: your data saved" );
//     saveDb("hello world",
//     ()=>{
//         console.log("success2");
//         saveDb("Arjun",
//         ()=>{
//             console.log("succes3");
//         },
//         ()=>{
//             console.log("fail3");
//         });
//     },
//     ()=>{
//         console.log("fail2"); 
//     });
//   },
//   ()=>{
//     console.log("faile hogya");
//   });


//   function saveDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10) +1;
//         if (internetSpeed>4){
//            resolve("succes done");
//         }
//            else{
//                reject("fail weak connection");
//            }

//     });
// }
// let request= saveDb("apna college")
// request.then(()=>{
//     console.log("problem resolved");
//     console.log(request);
    
// })
// .catch(()=>{
//     console.log("rejectes");

// });  
//promises chaining 
// saveDb("hello world")
// .then((result)=>{
//     console.log("data1 resolve");
//     console.log("resultn is", result);
//     return saveDb("apna college");
// })
// .then((result)=>{
//     console.log("data2 saved");
//     console.log("result of 2 is ", result);
//     return saveDb("arjun yadav");
// })
// .then((result)=>{
//     console.log("data3 saved");
//     console.log("resulen is ", result);
// })
// .catch((error)=>{
   
//     console.log("fail connection ");
//     console,log("erroe is ", error);
// });




// refactoring h1 style
// let h1 = document.querySelector("h1");
// function changeColor(color , delay){
// return new Promise((resolve ,reject)=>{
//     setTimeout(() => {
//         h1.style.color=color;
//         resolve("color changed");
        
//     }, delay);
// });
// }
// changeColor("red",1000)
// .then(()=>
// {
//     console.log("red color");
//     return changeColor("orange", 1000)
// })
// .then(()=>{  

// })
// let h1 = document.querySelector("h1");
// function changeColor(color , delay){
// return new Promise((resolve ,reject)=>{
//     setTimeout(() => {
//         h1.style.color=color;
//         resolve("color changed");
        
//     }, delay);
// });
// }
// async function demo(){
//    await changeColor ("red", 1000);
//    await changeColor ("yellow", 1000);
//     await changeColor ("green", 1000);
//     await changeColor ("blue", 1000);
// }
// demo();




// asyc and await 

 