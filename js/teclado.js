document.querySelector(".teclado").addEventListener("click", usarTecladoVirtual);
window.addEventListener("keydown", usarTecladoFisico);

const linhas = [
    [],
    [],
    [],
    [],
    [],
    []
];

let z = 0;

for (let i = 0; i < linhas.length; i++) {
    for (let j = 0; j < 5; j++) {
        linhas[i][j] = document.querySelectorAll("span")[z];
        z++
    }
}

let i = 0;
let j = 0;

linhas[i][j].parentElement.classList.add("destaque");

function usarTecladoVirtual(event) {
    var alvo = event.target;

    if (j < linhas[i].length) {
        linhas[i][j].parentElement.classList.remove("destaque");
    }

    if (alvo.classList.contains("key") && j < linhas[i].length-1) {
        linhas[i][j].innerText = alvo.innerHTML;
        j++;
    } else if (alvo.classList.contains("key") && j == linhas[i].length-1) {
        linhas[i][j].innerText = alvo.innerHTML;
    }

    if (alvo.classList.contains("backspace") && j > 0 && j == linhas[i].length-1 && !linhas[i][j].innerText == "") {
        linhas[i][j].parentElement.classList.remove("animado")
        linhas[i][j].innerText = "";
        j--;
    } else if (alvo.classList.contains("backspace") && j == 0) {
        linhas[i][j].parentElement.classList.remove("animado")
        linhas[i][j].innerText = "";
    } else if (alvo.classList.contains("backspace") && j > 0 && j < linhas[i].length) {
        linhas[i][j].parentElement.classList.remove("animado")
        linhas[i][j].innerText = "";
        j--;
        linhas[i][j].innerText = "";
    }
    
    if (alvo.classList.contains("enter")) {
        verificarPalpite();
    }
    
    if (j < linhas[i].length) {
        linhas[i][j].parentElement.classList.add("destaque");
    }
}

function usarTecladoFisico(event) {
    if (j < linhas[i].length) {
        linhas[i][j].parentElement.classList.remove("destaque");
    }

    if(event.keyCode >= 65 && event.keyCode <= 90 && j < linhas[i].length-1) {
        linhas[i][j].innerText = event.key.toUpperCase();
        j++;
    } else if(event.keyCode >= 65 && event.keyCode <= 90 && j == linhas[i].length-1){
        linhas[i][j].innerText = event.key.toUpperCase();
    }
    
    if (event.key == "Backspace" && j > 0 && j == linhas[i].length-1 && !linhas[i][j].innerText == "") {
        linhas[i][j].parentElement.classList.remove("animado")
        linhas[i][j].innerText = "";
        j--;
    } else if (event.key == "Backspace" && j == 0) {
        linhas[i][j].parentElement.classList.remove("animado")
        linhas[i][j].innerText = "";
    } else if (event.key == "Backspace" && j > 0 && j < linhas[i].length) {
        linhas[i][j].parentElement.classList.remove("animado")
        linhas[i][j].innerText = "";
        j--;
        linhas[i][j].innerText = "";
    }
    
    if (event.key == "Enter") {
        verificarPalpite();
    }

    if (j < linhas[i].length) {
        linhas[i][j].parentElement.classList.add("destaque");
    }
}