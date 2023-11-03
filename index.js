const boxElement = document.querySelectorAll(".box");
const messageBox = document.getElementById("message");
const playagainButton = document.getElementById("button");
const result = document.getElementById("result")


let winningCombination=
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]

]

var click = 0;
let xAttempts = []
let oAttempts = []
let wonTheGame = 0;

boxElement.forEach((el,i,arr)=>{
    el.addEventListener("click",()=>{
        handleClick(event)
    })
})

function handleClick(e){
// console.log(e);
// console.log(e.target);
// console.log(e.target.id)

let id = e.target.id
let p = document.createElement("p")
p.setAttribute("id","text");
boxElement[id-1].append(p)

if(click%2==0){
    p.innerHTML= "X"
    p.style.color = "yellow"
    xAttempts.push(parseInt(id-1));
    Result1(winningCombination , xAttempts , "X")

}
else{
    p.innerHTML = "O";
    p.style.color = "orange"
    oAttempts.push(parseInt(id-1))
    Result1(winningCombination , oAttempts , "O")
}
    click++

    if(click==9 && wonTheGame==0){
        result.style.visibility = "visible";
        messageBox.innerHTML = "It's a Tie!"
    }
}

// iteration 3 result function
function Result1(winningCombination,attempts,player ){
    let flag = 0
    let checker = []

    for(let i=0 ; i<winningCombination.length;i++){
        if(Array.isArray(winningCombination[i])){
            Result1(winningCombination[i],attempts,player)
        }
        else{
            if(attempts.includes(winningCombination[i])){
                checker.push(true)
                flag++
            }
            else{
                checker.push(false)
            }
        }
    }
if(checker.every(el =>el===true) && flag>2)
result.style.visibility = "visible";
messageBox.innerHTML = "The Winner is "+ player +"!";
wonTheGame = 1

}


// iteration 4 restart function

playagainButton.onclick=()=>{
location.reload()
}
