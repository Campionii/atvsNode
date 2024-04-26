var http = require("http");

http.createServer(function(requisicao,resposta){
    resposta.end("<h1>Bem vindo ao 3 B!</h1><h4>Turma: Desenvolvimento de Sistemas</h4><h2>Bruno Campioni de Oliveira!</h2>");
}).listen(3000);

console.log("Meu servidor está rodando!");