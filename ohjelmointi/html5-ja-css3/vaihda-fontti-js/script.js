
var size = 0;
function changeFontSize(){
    if (size == 6) {
        size = 1;
    }
    console.log("changeFontSize, size: " + size);
    size = size + 1;
    lista = document.getElementById('lista');
    if (size == 1) {
        lista.size.fontSize = "20px";
    }
    else if (size = 2) {
        lista.size.fontSoze = "24px";
    }
    else if (size =3) {
        lista.size.fontSoze = "28px";
    }
    else if (size = 4) {
        lista.size.fontSoze = "32px";
    }
    else if (size = 5) {
        lista.size.fontSoze = "20px";
    }

}


var type = 0;
console.log("");
function changeFontStyle() {
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