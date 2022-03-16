var palavra = "LUCAS";


function verificarPalpite() {
    var palpite = '';
    let n = 0;

    for (x of linhas[i]) {
        palpite += x.innerText;
    }

    let letrasUsadas = [];

    for (x of palpite) { // verificar verde
        if (x == palavra[n]) {
            linhas[i][n].parentElement.classList.add("verde");
            letrasUsadas.push(x);
        } else if(!palavra.includes(x)) {
            linhas[i][n].parentElement.classList.add("cinza")
        }
        n++
    }

    n = 0;
    for (x of palpite) { // verificar amarelo
        let duplicatasPalpite = verificarDuplicatas(x, palavra, letrasUsadas);

        if (palavra.includes(x) && duplicatasPalpite>0 && !linhas[i][n].parentElement.classList.contains("verde")) {
            linhas[i][n].parentElement.classList.add("amarelo")
            letrasUsadas.push(x);
        } else if(duplicatasPalpite<=0
                && !linhas[i][n].parentElement.classList.contains("amarelo")
                && !linhas[i][n].parentElement.classList.contains("verde")) {
            linhas[i][n].parentElement.classList.add("cinza")
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