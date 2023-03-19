var box = document.querySelector("#box");
function rotateRight(){
    box.style.transform = "rotateY(-90deg)";
}
function rotateLeft(){
    box.style.transform = "rotateY(90deg)";
}
function rotateTop(){
    box.style.transform = "rotateX(-90deg)";
    box.style.transformOrigin = "center";
}
function rotateBottom(){
    box.style.transform = "rotateX(90deg)";
}
function rotateFront(){
    box.style.transform = "rotateY(0deg)";
}
function rotateBack(){
    box.style.transform = "rotateY(180deg)";
}