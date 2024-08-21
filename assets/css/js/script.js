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
for (let i = 0; i < piecesImages.length; i++) {
    piecesImages[i].setAttribute("draggable", false);
  }

function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
    const piece = ev.target;
    const pieceColor = piece.getAttribute("color");
    const pieceType =piece.classList[1];
    const pieceId = piece.id;
}