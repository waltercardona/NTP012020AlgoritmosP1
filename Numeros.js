let pares =1;
let impares =1;

for (let n = 1; n <=100; n++) {
    if (n % 2 ==0){
        pares = pares * n;
    }else{
        impares=impares * n;
    }
    
}
document.write("la multiplicacion es:"+ impares);
