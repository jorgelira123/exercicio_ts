function multi(num1: number, num2: number): number {
    return num1 * num2; 
}

function mostraMulti() {
    const resultado: number = multi(2,3);
    console.log(`Resultado da multiplicação: ${resultado}`);
}

function imprimeSaudacao(nome: string): void {
    console.log(`Olá ${ nome}`);
    
}

mostraMulti();
imprimeSaudacao('Jorge');

//-------------------------------------------------------------------

function multi2(num1: number, num2: number, callback: (resultadoMulti: number) => void): void {
    const resultadoMulti = num1 * num2;
    callback(resultadoMulti);
}

function mostraMulti2(resultado: number): void {
    console.log(`Resultado da multiplicação: ${resultado}`);
}

function imprimeSaudacao2(nome: string): void {
    console.log(`Olá ${ nome}`);
    
}

multi2(2 , 3, mostraMulti2);
imprimeSaudacao2('Jorge');