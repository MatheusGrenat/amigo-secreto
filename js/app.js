let listaAmigos = [];


function adicionar(){
    let amigo = document.getElementById('nome-amigo').value;
    if(amigo === ''){
        alert('Nome do jogardor está vazio!');
    }
    
    if(listaAmigos.includes(amigo)){
        alert('Nome repitido!');
        return;
    }
    listaAmigos.push(amigo);
    let apresentarListaAmigos = document.getElementById('lista-amigos');
    apresentarListaAmigos.innerHTML = apresentarListaAmigos.innerHTML + `<p id="lista-amigos">${amigo}</p>`;
    
    document.getElementById('nome-amigo').value = '';

}

function sortear() {
    if (listaAmigos.length === 0) {
        alert("A lista de amigos está vazia!");
        return;
    } else if(listaAmigos.length === 1){
        alert("Voce precisa de pelo menos dois participantes!");
        return;
    }

    embaralhar(listaAmigos);
    console.log(listaAmigos.length);

    for(let c = 0; c < listaAmigos.length; c++){
        if(c != (listaAmigos.length - 1)){
            document.getElementById('lista-sorteio').innerHTML += `<p id="lista-amigos">${listaAmigos[c]} → ${listaAmigos[c+1]}</p>`
        }else{
            document.getElementById('lista-sorteio').innerHTML += `<p id="lista-amigos">${listaAmigos[c]} → ${listaAmigos[0]}</p>`
        }
    }
}

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca elementos
    }
    return array;
}


function reiniciar(){
    listaAmigos = [];
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-sorteio').value = '';
    
    let apresentarListaAmigos = document.getElementById('lista-amigos');
    apresentarListaAmigos.innerHTML = ``;

    document.getElementById('lista-sorteio').innerHTML = ``;

    console.log(listaAmigos);
}