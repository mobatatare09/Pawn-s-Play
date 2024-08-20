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