const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question("Qual sua linguagem de programação preferida? ", (language) => {
    console.log(`A linguagem escolhida foi: ${language}`);
    readLine.close();
});