/* O IMC - Índice de Massa Corporal, é um critério da OMS para dar uma indicação sobre a condição de peso de uma pessoa.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritimo que, dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo:

- Menor de 18.5 = Abaixo do peso;
- Entre 18.5 e 25 = Peso normal;
- Entre 25 e 30 = Sobrepeso;
- Entre 30 e 40 = Obeso;
- Acima de 40 = Obesidade Mórbida
*/

let peso = 50;
let altura = 1.70;

let imc = peso / (altura * altura);

console.log(imc.toFixed(2));

if (imc < 18.5) {
    console.log('Abaixo do peso');
}else if (imc >= 18.5 && imc < 25.00){
    console.log('Peso normal');
}else if (imc >= 25.00 && imc < 30.00){
    console.log('Sobrepeso');
}else if (imc >= 30.00 && imc < 40.00){
    console.log('Obeso');
}else {
    console.log('Obesidade mórbida');
}