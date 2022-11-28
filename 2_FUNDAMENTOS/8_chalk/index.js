import chalk from "chalk";

const nota = 6;

if (nota >= 7) {
    console.log(chalk.green('Parabéns! Você está aprovado!'));
} else {
    console.log(chalk.magenta('Infelizmente você não foi aprovado!'));
}