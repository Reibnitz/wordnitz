function verificarPalpite() {
    let palpite = gerarPalpite().toLowerCase();
    console.log(palpite)
    if (listaSemAcento.includes(palpite)) {
        alterarCores();
        voltarAcentos();
        i++;
        j = 0;
    } else { 
        for (x of linhas[i]) {
            x.parentElement.classList.add("animado");
        }
        setTimeout(function(){
            for (x of linhas[i]) {
                x.parentElement.classList.remove("animado")
            }
        }, 100);
        }
}

function gerarPalpite() {
    let palpite = '';    

    for (x of linhas[i]) {
        palpite += x.innerText;
    }
    return palpite;
}

function alterarCores() {
    let palpite = gerarPalpite();

    let letrasUsadas = [];
    let n = 0;
    for (x of palpite) { // verificar verde
        if (x == palavra[n]) {
            linhas[i][n].parentElement.classList.add("verde");
            document.querySelector(`#${linhas[i][n].innerText}`).classList.add("botao-verde");
            letrasUsadas.push(x);
        } else if(!palavra.includes(x)) {
            linhas[i][n].parentElement.classList.add("cinza");
            document.querySelector(`#${linhas[i][n].innerText}`).classList.add("botao-cinza");
        }
        n++
    }

    n = 0;
    for (x of palpite) { // verificar amarelo
        let duplicatasPalpite = verificarDuplicatas(x, palavra, letrasUsadas);

        if (palavra.includes(x) && duplicatasPalpite>0 && !linhas[i][n].parentElement.classList.contains("verde")) {
            linhas[i][n].parentElement.classList.add("amarelo")
            document.querySelector(`#${linhas[i][n].innerText}`).classList.add("botao-amarelo");
            letrasUsadas.push(x);
        } else if(duplicatasPalpite<=0
                && !linhas[i][n].parentElement.classList.contains("amarelo")
                && !linhas[i][n].parentElement.classList.contains("verde")) {
            linhas[i][n].parentElement.classList.add("cinza");
            document.querySelector(`#${linhas[i][n].innerText}`).classList.add("botao-cinza");
        }
        n++
    }
}

function verificarDuplicatas(letra, palavra, letrasUsadas) {
    let contaDuplicatas = 0;

    for (y of palavra) {
        if (y == letra) {
            contaDuplicatas++;
        }
    }

    for (y of letrasUsadas) {
        if (letrasUsadas.length>0 && y == letra){
            contaDuplicatas--;
        }
    }

    return contaDuplicatas;
}

