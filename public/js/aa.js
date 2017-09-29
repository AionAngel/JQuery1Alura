var digitado = campo.val();
var comparavel = frase.substr(0, digitado.length);

if (digitado == comparavel) {

    campo.addClass("borda-verde");
    campo.removeClass("borda-vermelha");

}else{
    campo.addClass("borda-vermelha");
    campo.removeClass("borda-verde");
}


function inserePlacar () {
    
        let nome = "Lucas xD";
        let noPalavras = $("#contador-palavras").text();
        var botaoRemover = "<a href='#'><i class='small material-icons'>delete</i></a>" ;
        
        var tabela = document.querySelector("#tabela");
        var dadosTr = criaTr(noPalavras, nome, botaoRemover);
    
        
        tabela.appendChild(dadosTr);
    }
    
    
    function criaTd (dado) {
        var td = document.createElement("td");
        td.textContent = dado;
    
        return td;
    }
    
    function criaTr (num,nome,botao) {
        var tr = document.createElement("tr");
        tr.appendChild(criaTd(nome));
        tr.appendChild(criaTd(num));
        tr.appendChild(criaTd(botao));
    
        return tr;
    }
    
    