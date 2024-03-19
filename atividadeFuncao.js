function calcularImc (peso, altura) {
    return peso / (altura * altura);
}

function classificarImc (imc){
    
    if (imc <= 18.5){
    return "Abaixo do Peso";
    }else if (imc > 18.5 && imc <= 25){
        return "Peso Normal";
    }else if (imc > 25 && imc <= 30){
        return "Acima do Peso";
    } else if (imc > 30 && imc <= 40){
        return "Obesidade";
    } else {
        return"Obesidade Grave";
    }
}

let peso = 78;
let altura = 1.62;
let imc = calcularImc(peso, altura);
console.log (classificarImc (imc));

