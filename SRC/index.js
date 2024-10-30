const fs = require('fs');
const trataErros = require('./erros');

const arquivo = process.argv;
const link = arquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    try{
        if(erro) throw erro;
        contaPalavras(texto);
    }catch(erro){       
        console.log(trataErros(erro));
    }
})

function contaPalavras(texto){
    const paragrafos = extraiparagrafos(texto)
    const contagem = paragrafos.flatMap((paragrafo) => {
        if(!paragrafo) return [];
        return palavraDuplicada(paragrafo);
    })
    console.log(contagem);
}

function extraiparagrafos(texto){
    return texto.toLowerCase().split('\n');
}

function limpaPalavras(palavra){
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function palavraDuplicada(texto){
    const listaPalavras = texto.split(' ');
    const result = {};
    listaPalavras.forEach(palavra => {
        if(palavra.length >= 3){
            const palavraLimpa = limpaPalavras(palavra);
            result[palavraLimpa] = (result[palavraLimpa] || 0) + 1; 
        }
    });
    return result;
}

console.log(link);