
$("#botao-placar").click(mostraPlacar);

function mostraPlacar () {
    $(".placar").stop().slideToggle(600);
}

function scrollPlacar () {
    var posicaoPlacar = $(".placar").offset().top;
    
     $("html, body").animate(
    {
        scrollTop: posicaoPlacar + "px"
    }, 1000);
}

function inserePlacar () {

    var tabela = $("#tabela");
    let nome = "Lucas xD";
    let noPalavras = $("#contador-palavras").text();
   
    var linha = novaLinha(nome, noPalavras);
    linha.find(".botao-remover").click(removeLinha);
    
    tabela.prepend(linha);
    
    $(".placar").slideDown(600);
    
    scrollPlacar();
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
    var linha = $(this).parent().parent();
    linha.fadeOut(1000);
    
    setTimeout(function(){
        linha.remove();
    },1000);
}
