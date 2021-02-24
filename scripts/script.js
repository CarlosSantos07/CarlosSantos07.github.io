function qtd(){
    var q = parseInt(document.getElementById(`inumero`).value);
    tot = q * 15;

    d = 0;
    for (i = 5; i <= q; i++){
        if (i % 5 === 0){
            d = d + 5;
        }
    }
    tot = tot - d;

    document.getElementById(`iprice`).value = tot;
    tot.innerText = `${tot}`
    
}
