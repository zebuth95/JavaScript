function IVA (price) {
    let iva = price*0.21;
    let total = price + iva;
    let result = `El valor sin IVA es de: ${price}, con IVA: ${iva} y el Total es: ${total}`;
    return result;
}

function test_IVA(){
    const result = IVA(10);
    alert(result);
}
