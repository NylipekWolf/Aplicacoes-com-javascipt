somar(10);
function somar (limite){
    let multilplosDe3 = 0;
    let multiplosDe5 = 0;
    for (i = 0; i <= limite; i++) {
        if (i % 3 === 0){
            multilplosDe3 += i;
        }
        if (i % 5 === 0){
            multiplosDe5 += i;
        }
    }
    console.log(multilplosDe3 + multiplosDe5);
}