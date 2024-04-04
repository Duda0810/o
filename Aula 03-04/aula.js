const nome = 'Maria Eduarda'
const idade = 16
const cidade = 'SãoGabriel'

console.log('Meu nome é' ,nome,',tenho',idade,'anos e sou de',cidade,'.')
console.log(`Meu nome é ${nome}, tenho${idade}anos e sou de ${cidade}.`)    

// propriedades length
const nome2 = " Maria Eduarda"
console.log(nome.length) //13 letras

// método toLowerCase()
const frase = "OieeEeEee!"
const fraseMinuscula = frase.toLocaleLowerCase()

// método ToUpperCase()
const frase2 = "OieEeEee!"
const fraseMaiuscula = frase.toUpperCase()


// método trim()
const email = "  mariacosta@gmail.com    "
console.log(email.trim())


// includes(caracteres)
const frase3 = "Hoje comi cenoura"
frase.includes("Cenoura") //true
frase.includes("batata") //false


//método replaceAll(chars1, chars2)
const frase4 = "Hoje comi cenoura, adoro cenoura"
const novaFrase = frase.replaceAll("cenoura" , " batata")
//nova frase = hoje comi batata, adoro batata


