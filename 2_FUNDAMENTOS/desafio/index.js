import inquirer from "inquirer";
import chalk from "chalk";

inquirer.prompt([{
    name: "nome",
    message: "Qual seu nome?"
},{
    name: "idade",
    message: "Qual sua idade?"
}]).then((answers) => {
    console.log(chalk.bgYellow.black(`Nome: ${answers.nome}`));
    console.log(chalk.bgRed.black(`Idade: ${answers.idade}`));  
}).catch( (error) => console.log(error));