const personagens = ["enola", "blair", "dan", "vanessa", "chuckbass", "regina"];

function qualPersonagem(array){
    const indiceAleatorio = Math.floor(Math.random() * array.lentgh);
    return array[indiceAleatorio];
}

const personagemEscolhido = qualPersonagem(personagem);
console.log("você é", personagemEscolhido);


