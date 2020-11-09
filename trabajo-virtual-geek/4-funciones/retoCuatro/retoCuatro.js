function Calculador_De_Caja (booleano, width, padding, borde){
    if(booleano === false){
        return `${width}; ${padding}; ${borde};`;
    }else if (booleano === true){
        return `100%;`;
    }
}

function test(){
    alert(Calculador_De_Caja( true, '120px', '5px', '11px'));
    alert(Calculador_De_Caja( false, '100px', '12px', '1px'));
}