let pares;
let impares;

for (let n = 1; n <=100; n++) {
    if (n % 2 ==0){
        pares = pares + n;
    }else{
        impares=impares + n;
    }
    
}
document.write("la suma de impares es:"+ impares);
document.write("la suma de pares es:"+ pares);