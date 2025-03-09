let url = "https://catfact.ninja/fact";
//  fetch(url)
//  .then( (res)=> {
//     console.log(res);
//     return res.json();

//  })
//  .then((data)=>{
//     console.log(data.length);
//  })
// .catch((err)=>{
//     console.log(err)
// })
async function geApi(){

try{
    let res = await fetch(url);
let data = await res.json();
console.log(res);
console.log(data);
let res2 = await fetch(url);
let data2 = await res2.json();

console.log("data 2" , data2.fact);

}
catch(e)
{
    console.log("error is :- " , e);
}
    }