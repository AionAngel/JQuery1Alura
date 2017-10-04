
console.log("Ola fui importado");

$("#dropdown").mouseenter(function() {
    $("#opcoes").stop().slideToggle();
});

$("#dropdown").mouseleave(function() {
    $("#opcoes").stop().slideToggle();
});