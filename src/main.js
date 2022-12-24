const readlineSync = require('readline-sync');
const { decodeUplink } = require('./payloadScript');
const fs = require('fs');

function saveStringAsJson(str) {
    // Transforma a string em JSON
    const data = JSON.parse(str);
  
    // Gera um nome de arquivo com o timestamp atual
    const fileName = `${Date.now()}.json`;
  
    // Escreve o JSON no arquivo com o nome gerado
    fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) => {
      if (err) throw err;
      console.log(`Arquivo ${fileName} salvo com sucesso!`);
    });
  }

function main(){
    //get a entrada do usuario via console
    const input = readlineSync.question("Insera a entrada:\n");
    //chama a funcao decode

    var output = decodeUplink(input);
    //mostra o tipo de resultado
    
    console.log(typeof output);

    //cria um arquivo json com o resultado
    saveStringAsJson(output);
}

main()