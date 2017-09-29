
var tempoInicial = $("#tempo").text();
var campo = $(".campo-digitacao");
var frase = $('.frase').text();


$(document).ready(function(){

    atualizaTexto();
    atualizaCampo();
    tempoDeJogo();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);

});

function atualizaTexto() {
    
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
                campo.addClass("campo-desativado");
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
    campo.removeClass("campo-desativado");
    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");
    
    tempoDeJogo();
    
}

function inicializaMarcadores () {

    campo.on("input", function(){
        
            var digitado = campo.val();
            if(frase.startsWith(digitado)) {
                campo.addClass("borda-verde");
                campo.removeClass("borda-vermelha");
            }else {
                campo.addClass("borda-vermelha");
                campo.removeClass("borda-verde");
            }
        });

}




