
var frase = $('.frase').text();

var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-palavras");

tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");

campo.on("click", function(){
    console.log("ola mundo");
});
