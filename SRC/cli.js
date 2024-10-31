import fs from 'fs'
import trataErros from './erros.js'
import { contaPalavras } from './index.js';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3]

fs.readFile(link, 'utf-8', (erro, texto) => {
    try{
        if(erro) throw erro;
        const resultado = contaPalavras(texto);
        criaArquivo(resultado, endereco)
    }catch(erro){       
        console.log(trataErros(erro));
    }
})

async function criaArquivo(lista, end){
    const arquivoNovo = `${end}/result.txt`;
    const textoPalavras = JSON.stringify(lista);
    try{
        await fs.promisses.writeFile(arquivoNovo, textoPalavras);
        console.log('Arquivo criado');
    }catch(erro){
        throw erro;
    }
}