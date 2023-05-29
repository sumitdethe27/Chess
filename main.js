const gameBoard=document.querySelector("#gameboard");
const player=document.querySelector("#player");
const infoDisplay=document.querySelector("info-display")
 
const startPieces=[
    rook ,knight,bishop,queen,king,bishop,knight,rook,
    pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
    rook,knight,bishop,queen,king,bishop,knight,rook
]

function createBoard(){
    startPieces.forEach((piece,i)=>{
        const square=document.createElement('div')
        square.classList.add("square")
        square.setAttribute("square-id",i);
        square.innerHTML=piece
        if(square.firstChild){
            
            square.firstChild.setAttribute('draggable',true)
        }
        const row=Math.floor((63-i)/8)+1;
        if(row%2===0 ){
            
           square.classList.add(i%2===0?'beige': 'brown')
        }else{
            square.classList.add(i%2===0?'brown': 'beige')
            
        }
        if(i<=15){
            square.classList.add("black")
        }
        
        if(i>=48){
            const svg = square.querySelector("svg"); 
            svg.classList.add("white"); 
        }


        gameBoard.append(square)
        

    })
}
createBoard()
const allsquare=document.querySelectorAll(".square")

allsquare.forEach((item)=>{
    item.addEventListener('dragstart',dragst)

})
function dragst(e){
console.log(e.target.parentNode.getAttribute("square-id"))

}