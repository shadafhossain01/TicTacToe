let gameContainer=document.querySelector(".game-container");
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".resetBtn");
let newBtn=document.querySelector(".newBtn");
let textContainer=document.querySelector(".text-container");
let winnerText=document.querySelector(".winnerText")

let trueX=true;
let count=0;
let winningPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box)=>{
 box.addEventListener("click",()=>{
    if(trueX){
        box.innerText="X"
        trueX=false
    }
    else{
        box.innerHTML="O"
        trueX=true
    }
    box.disabled=true;
    count++;
    winnerCheck();
    if(count==9){
        winnerText.innerText=`Match is draw`;
textContainer.classList.remove("hide")
gameContainer.classList.add("hide")
    }
 })
    
})

function winnerCheck(){
    for(let pattern of winningPattern){
let value1=boxes[pattern[0]].innerText
let value2=boxes[pattern[1]].innerText
let value3=boxes[pattern[2]].innerText

if(value1!="" && value2!="" && value3!=""){
    if(value1==value2 && value2==value3){
            winnerMsg(value1)
            disableBox()
    }
}
 }
}

function winnerMsg(winner){
winnerText.innerText=`congratulation ${winner} is Won`;
textContainer.classList.remove("hide")
gameContainer.classList.add("hide")
}

function disableBox(){
    for(let box of boxes){
        box.disabled=true
    }
}
function enableBox(){
    for(let box of boxes){
        box.disabled=false
        box.innerText = "";
    }
}

function reset(){
    trueX=true;
    count=0;
    enableBox()
}

function againStart(){
    trueX=true;
    count=0;
    enableBox()
    textContainer.classList.add("hide")
gameContainer.classList.remove("hide")
}

newBtn.addEventListener("click",againStart)
resetBtn.addEventListener("click",reset)