/*Elabore um alguritimo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito: 10% de desconto;
- À vista no Dinheiro ou Pix: 15% de desconto;
- Em duas vezes: preço normal de etiqueta, sem juros;
- Acima de duas vezes: Acréscimo de juros de 10%.
*/

let valorDeEtiqueta = 100.00;
let totalParcelas = 5;
let aVistaDebito = valorDeEtiqueta - (valorDeEtiqueta * 10 / 100);
let aVistaDinheiroOuPix = valorDeEtiqueta - (valorDeEtiqueta * 15 / 100);
let parceladoDuasVezes = valorDeEtiqueta / totalParcelas;
let parceladoAcimaDuasVezes = (valorDeEtiqueta + (valorDeEtiqueta * 10 / 100)) / totalParcelas;

let escolheCondicao = 4;
let condicaoPagamento = 0;

if (escolheCondicao == 1){
    condicaoPagamento = aVistaDebito;
}else if (escolheCondicao == 2){
    condicaoPagamento = aVistaDinheiroOuPix;
}else if (escolheCondicao == 3){
    condicaoPagamento = parceladoDuasVezes
} else if(escolheCondicao == 4){
    condicaoPagamento = parceladoAcimaDuasVezes;
}else {
    console.log("Condição inválida! Escolha entre: 1 - Débito à vista 2 - Dinheiro ou Pix 3 - Parcelado 2x 4 - Parcelado")
}

if (condicaoPagamento == aVistaDebito) {
    console.log("Débito à vista:");
    console.log('Valor: R$' + aVistaDebito.toFixed(2));
}else if (condicaoPagamento == aVistaDinheiroOuPix) {
    console.log("À vista: Dinheiro ou Pix:");
    console.log('Valor: R$' + aVistaDinheiroOuPix.toFixed(2));
}else if (condicaoPagamento == parceladoDuasVezes){
    console.log("Parcelado em 2x:");
    console.log('Valor de cada parcela: R$' + parceladoDuasVezes.toFixed(2));
}else if (condicaoPagamento == parceladoAcimaDuasVezes){
    console.log("Parcelado em " + totalParcelas + "x:");
    console.log('Valor de cada parcela: R$' + parceladoAcimaDuasVezes.toFixed(2));
} else {

}