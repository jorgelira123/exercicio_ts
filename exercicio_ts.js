function multi(num1, num2) {
    return num1 * num2;
}
function mostraMulti() {
    var resultado = multi(2, 3);
    console.log("Resultado da multiplica\u00E7\u00E3o: ".concat(resultado));
}
function imprimeSaudacao(nome) {
    console.log("Ol\u00E1 ".concat(nome));
}
mostraMulti();
imprimeSaudacao('Jorge');
//-------------------------------------------------------------------
function multi2(num1, num2, callback) {
    var resultadoMulti = num1 * num2;
    callback(resultadoMulti);
}
function mostraMulti2(resultado) {
    console.log("Resultado da multiplica\u00E7\u00E3o: ".concat(resultado));
}
function imprimeSaudacao2(nome) {
    console.log("Ol\u00E1 ".concat(nome));
}
multi2(2, 3, mostraMulti2);
imprimeSaudacao2('Jorge');
