
var frase = $('.frase').text();

var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-palavras");

tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");

campo.on("input", function(){
    
    var tamanhoPalavras = campo.val().split(/\S+/).length - 1;
    var tamanhoCaracteres = campo.val().length;

    $("#contador-caracteres").text(tamanhoCaracteres);

    $("#contador-palavras").text(tamanhoPalavras);
    

});
