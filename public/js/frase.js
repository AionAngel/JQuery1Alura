

$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria () {
    
    $("#spinner").show();
    
    $.get("https://cursojqueryalura-aionangel.c9users.io:8080/frases", trocaFraseAleatoria).fail( function () {
        
        $("#erro").toggle();
        
        setTimeout(function() {
            $("#erro").toggle();
        },2000);
        
    }).always(function () {
      
      $("#spinner").hide();
        
    });
}

function trocaFraseAleatoria (data) {
    
    var frase = $(".frase");
    
    var numeroAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numeroAleatorio].texto);
    atualizaTexto();
    atualizaTempo(data[numeroAleatorio].tempo);
}