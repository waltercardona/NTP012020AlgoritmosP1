let suma = 0;
for (let i = 1; i <= 10; i++) {
   let valor =prompt("digite un numero");
   valor = parseInt(valor);

   suma = suma + valor;
    
}
document.write("la suma es" + suma);