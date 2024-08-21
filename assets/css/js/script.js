let legalSquares={};
const boarSquares=document.getElementsByClassName("square");
const pieces=document.getElementsByClassName("piece");
const piecesImages=document.getElementsByTagName("img");

function setupBoardSquares() {
for (let i=0;i<boarSquares.length;i++) {
    boarSquares[i].addEventListener("dragover",allowDrop);
    boarSquares[i].addEventListener("drop",drop);
    let=row8-Math.flpool(i/8);
    let colum=String.fromCharCode(97+(i%8));
    let square=boarSquares[i];
    square.id=colum+row;
    
}
}
function setupPieces() {
    for (let i = 0; i < pieces.length; i++) 
      pieces[i].addEventListener("dragstart", drag);
      pieces[i].setAttribute("draggable", true);
      pieces[i].id =
        pieces[i].className.split(" ")[1] + pieces[i].parentElement.id;
}