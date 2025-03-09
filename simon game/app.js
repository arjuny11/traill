let gameSeq =[];
let userSeq =[];
let started = false; 
let level=0;
let btns=["red", "yellow", "green", "blue"];
let h2= document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 1000);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },  1000);

}
 function levelup(){
    
userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
// console.log(randIdx);
// console.log(randColor);
// console.log(randBtn);
gameSeq.push(randColor);
console.log(gameSeq);
    gameflash(randBtn);
     
 } 
 function checkAns(idx){
    // console.log("cuurent leve;" , level);
     
    if(userSeq[idx]==gameSeq[idx]) {
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
            
        }
        console.log("same value");
    }else{
        h2.innerHTML=`Game over ! <b>Your Score was ${level}</b> <br> press any key to Restart. `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor=" hsl(208, 79%, 79%)";} , 1000);
        reset();
    }
 }
 function btnPress(){
    let btn=this;
    console.log("btn was pressed");
    userflash(btn);
    userColor =btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
 }
 let allBtns = document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click", btnPress);
 }
 function reset(){
    started= false;
    gameSeq=[];
    userSeq=[];
    level=0;

 };