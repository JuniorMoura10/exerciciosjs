/*Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Classificação:
- Média menor que 5: Reprovado;
- Média entre 5 e 7: Recuperação;
- Média acima de 7: Aprovado.
*/

let nota1 = 8;
let nota2 = 8;
let nota3 = 8;

let media = (nota1 + nota2 + nota3) / 3;

if (media < 5){
    console.log(media);
    console.log('Reprovado');
} else if (media >= 5 && media <= 7){
    console.log(media);
    console.log('Recuperação');
}else {
    console.log(media);
    console.log('Aprovado');
}