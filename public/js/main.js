
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

    let nome = "Lucas xD";
    let noPalavras = $("#contador-palavras").text();
    //var botaoRemover = "<a href='#'><i class='small material-icons'>delete</i></a>";
    var botao = criaBotaoRemove();
    
    var tabela = document.querySelector("#tabela");
    var dadosTr = criaTr(noPalavras, nome, botao);

    
    tabela.appendChild(dadosTr);
}


function criaTd (dado) {
    var td = document.createElement("td");
    td = dado;

    return td;
}

function criaTr (num,nome,botao) {
    var tr = document.createElement("tr");
    tr.appendChild(criaTd(nome));
    tr.appendChild(criaTd(num));
    tr.appendChild(criaTd(botao));

    return tr;
}

function criaBotaoRemove() {

    var a = document.createElement("a");
    a.setAttribute('href', '#');
    var i = document.createElement("i");
    i.classList.add("small");
    i.classList.add("material-icons");
    i.textContent = "delete";
    a.appendChild(i);
    
    return a;
}





