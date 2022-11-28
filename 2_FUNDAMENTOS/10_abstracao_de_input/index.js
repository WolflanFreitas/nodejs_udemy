import inquirer from "inquirer";

inquirer.prompt([{
    name: 'p1',
    message: 'Qual seu nome?'
},{
    name: 'p2',
    message: 'Qual sua idade?'
}, {
    name: 'p3',
    message: 'Qual sua profissão?'
}]).then( (answers) => {
    console.log(answers);
}).catch( error => console.log(error));