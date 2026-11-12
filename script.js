var lampada = document.getElementById("lamp");
var inter = false


lampada.addEventListener("click", function () {
    if (!inter) {
        lampada.src = "assets/lamp_on.png";
        lampada.alt = "Lampada acesa";
        document.body.style.background = "radial-gradient(circle, white 8%, yellow 100%)";
        inter = true;
    }
    else{
        lampada.src = "assets/lamp_off.png"
        lampada.alt = "Lampada apagada"
        document.body.style.background = "radial-gradient(circle, white 8%, black 100%)";
        inter = false;
    }
})  