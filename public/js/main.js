
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
    
            if(tempo < 1){
                campo.attr("disabled", true);
                clearInterval(cronometroID);
                campo.addClass("campo-desativado");
            }
    
        },1000);
        
    });

}

function reiniciaJogo (){
    var palavras = $("#contador-palavras").text();
    console.log(palavras);
    if(palavras > 0){
        
        inserePlacar();
    }
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

function inserePlacar () {

    var tabela = $("#tabela");
    let nome = "Lucas xD";
    let noPalavras = $("#contador-palavras").text();
   
    linha = novaLinha(nome, noPalavras);
    linha.find(".botao-remover").click(removeLinha);
    
    tabela.prepend(linha);
}

$(".botao-remover").click(removeLinha);


function novaLinha(usuario,palavras){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").attr("href","#").addClass("botao-remover");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}



function removeLinha(event) {
    event.preventDefault();
    $(this).parent().parent().remove();
}




