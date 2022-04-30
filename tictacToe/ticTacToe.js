window.addEventListener('DOMContentLoaded',()=>{
    const tiles = Array.from(document.querySelectorAll(".tile"));
    const currentPlayer = document.querySelector("#displayPlayer"); 
    const reset = document.querySelector('#reset');
//winning condition
let board = ['','','','','','','','',''];
let cp ='X';

const winningCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const isValid = (tile) => {
    if(tile.innerHTML === 'X' ||tile.innerHTML === 'O'){
        return false;
    }
    return true;
}
//updating board array
const update =(index) => {
    board[index] = cp;
}

const playerChange = () => {
    cp = cp ==='X'? 'O': 'X';
    currentPlayer.innerHTML = cp;
}

async function handleResult(){
    let roundWon = false;
    for(i=0;i<7;i++){
        const winCondition = winningCondition[i];
        const v1= board[winCondition[0]];
        const v2= board[winCondition[1]];
        const v3= board[winCondition[2]];
        if(v1 === '' || v2 === '' || v3 === '')
        {
            continue;    
        }
        if(v1 == v2 && v2 == v3){
            roundWon = true;
            break;
        }
    }
    if(roundWon){
        if(cp == 'X')
        alert("X Won!");
        else{
            alert("O Won!");
        }
        playerChange();
    }
}
const resetBoard = () =>{
    let board =['','','','','','','','',''];
    if(cp === 'O'){
        cp='X';
    }
    tiles.forEach(tile =>{
        tile.innerHTML = '';
    });
 }

const userAction = (tile,index) => {
    if(isValid(tile)){
        tile.innerHTML = cp;
        update(index);
    }
     handleResult();
     playerChange();        
}
tiles.forEach((tile,index) =>{
    tile.addEventListener('click',()=> userAction(tile,index));
    });
    reset.addEventListener('click',()=>resetBoard());
});



