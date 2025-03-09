let boxes= document.querySelectorAll(".box");
let turn = true;
let res = document.getElementById("reset");
let msg= document.querySelector(".msg-container hide");
let p = document.getElementById("demo");
let neBtn = document.getElementById("new-btn");

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
];

// reset the  game
const reset = () => {
    turn =true;
    enableBox();
    p.classList.add("hide");

} 
// use for click on the box
  boxes.map((box)  => {
box.addEventListener("click", () => {
    console.log("box was clicked");
    if(turn){
        box.innerText="0";
        turn= false;
    }
    else{
        box.innerText="x";
        turn=true;  
    }

box.disabled = true;
checkWinner();


});   
  }); 

// for disable the boxes
  const disableBox = () =>{
    for(box of boxes){
        box.disabled=true;
    }
  }
  // for enable and empty the box
  const enableBox = () =>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
  }
  // printing winner
  function showWinner(win){
    let p = document.getElementById("demo");
    p.innerHTML= `Congratulation the winner is ${win}`;
    p.classList.remove("hide");
  }
  // main code for checking the position of boxes
  const  checkWinner = () => {
    for( let pattern of winPatterns){
        
         let posval0 = boxes[pattern[0]].innerText;
         let posval1 =boxes[pattern[1]].innerText;
         let posval2 = boxes[pattern[2]].innerText;
         if(posval0!="" && posval1 != "" && posval2!="" ){
            if(posval0==posval1 && posval1==posval2){
                console.log("winner");
                showWinner(posval0);
                disableBox();
            }
         }
    }
  }
//for reset and new game
  neBtn.addEventListener("click", reset);
  res.addEventListener("click",reset);