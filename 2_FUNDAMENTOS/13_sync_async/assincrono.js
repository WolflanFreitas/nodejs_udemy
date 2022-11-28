import fs from 'fs';

console.log('Início');

fs.writeFile('arquivo2.txt','Curso nodejs', function(error) {
    setTimeout(() => {
        console.log('Arquivo criado!');
    }, 1000);
});

console.log('Fim');