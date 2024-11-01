export function contaPalavras(texto){
    const paragrafos = extraiparagrafos(texto)
    const contagem = paragrafos.flatMap((paragrafo) => {
        if(!paragrafo) return [];
        return palavraDuplicada(paragrafo);
    })
    console.log(contagem);
    return contagem;
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