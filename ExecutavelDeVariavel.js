console.log("Trabalhando com variáveis");
console.log("--------------------------");

var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Qual e o seu nome\n", function(answer) {
    var resp = answer;
    console.log("\nSeu nome e '" + resp +"'");
    leitor.close();
});