export default function trataErros(erro){
    if(erro.code === 'ENOENT'){
        // Usado para mostrar os detalhesa do erro:
        // throw new Error(`Arquivo não encontrado: ${erro.path}`);
        //usado para mostrar apenas a mensagem de erro:
        return `Arquivo não encontrado: ${erro.path}`;
    }else{
        return 'Erro na aplicação';
    }
}

  