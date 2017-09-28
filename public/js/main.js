
var tempoInicial = $("#tempo").text();
var campo = $(".campo-digitacao");


$(document).ready(function(){

    atualizaTexto();
    atualizaCampo();
    tempoDeJogo();
    $("#botao-reiniciar").click(reiniciaJogo);

});

function atualizaTexto() {
    var frase = $('.frase').text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-palavras");
    tamanhoFrase.text(numPalavras);
}

function atualizaCampo(){
    campo.on("input", function(){
        var tamanhoPalavras = campo.val().split(/\S+/).length - 1;
        var tamanhoCaracteres = campo.val().length;
        $("#contador-caracteres").text(tamanhoCaracteres);
        $("#contador-palavras").text(tamanhoPalavras);
    });
}


function tempoDeJogo() {

    campo.one("focus", function(){
        var tempo = $("#tempo").text();
        var cronometroID = setInterval(function(){
            tempo--;
            $("#tempo").text(tempo);
            console.log(tempo);
    
            if(tempo < 1){
                campo.attr("disabled", true);
                clearInterval(cronometroID);
            }
    
        },1000);
        
    });

}

function reiniciaJogo (){

    campo.attr("disabled",false);
    campo.val("");
    $("#contador-caracteres").text("0");
    $("#contador-palavras").text("0");
    $("#tempo").text(tempoInicial);
    tempoDeJogo();
    
}
