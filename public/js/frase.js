

$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria () {
    $.get("https://cursojqueryalura-aionangel.c9users.io:8080/frases", trocaFraseAleatoria);
}

function trocaFraseAleatoria (data) {
    
    var frase = $(".frase");
    
    var numeroAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numeroAleatorio].texto);
    atualizaTexto();
}