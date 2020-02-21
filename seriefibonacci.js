//serie fibonacci

let num = 0;
let num2 = 1;
let num3 ;
let contador = 3;
let serie = prompt("seria fibonaccio¿");
document.write(num);
document.write(num2);

while(contador <= serie){

    num3 = num + num2;
    num = num2;
    num2 = num3;

    document.write(num3);
    contador++;
}
