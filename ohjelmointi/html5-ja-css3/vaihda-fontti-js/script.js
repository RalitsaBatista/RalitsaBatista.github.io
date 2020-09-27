var size = 0;
const fontSizes = [20,24,28,32];
function changeFontSize() {    
    
    lista = document.getElementById("lista");
    lista.style.fontSize = fontSizes[size]+"px";

    if(size>=fontSizes.length-1){
        size = 0;
    } else {
        size++;
    }
}

var type = 0;
const fontTypes = ["Roboto, sans-serif","Mansalva, cursive","Grenze, serif","Turret Road, cursive","Courier New"];
function changeFontStyle() {

    lista = document.getElementById("lista");
    lista.style.fontFamily = fontTypes[type];

    if(type>=fontTypes.length-1){
        type = 0;
    } else {
        type++;
    }
}


function changeFontStyle111() {
    if(type == 6){
        type = 1;
    }
    console.log("changeFontStyle, type: " + type);
    type = type + 1;
    lista = document.getElementById("lista");
    if (type == 1) {
        lista.style.fontFamily = "Roboto, sans-serif";
    }

    else if (type == 2) {
        lista.style.fontFamily = "Mansalva, cursive";
    }
    
    else if (type == 3) {
        lista.style.fontFamily = "Grenze, serif";
    }

    else if (type == 4) {
        lista.style.fontFamily = "Turret Road, cursive";
    }

    else if (type == 5) {
        lista.style.fontFamily = "Courier New";
    }
}