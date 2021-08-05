
// Velocidade máxima de até 70
// A cada 5km cima do limite, a pessoa ganhar um ponto na carteira
// E caso a pessoa receba 12 pontos na carteira, a sua carteira sera "Carteira Suspendida"

verificarVelocidade(99);

function verificarVelocidade(Velocidade) {
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;
    if ( Velocidade <= velocidadeMaxima) {
        console.log('Ok');
    }
    else{
        const pontos = Math.floor(((Velocidade - velocidadeMaxima) / KmPorPonto));
        if ( pontos >= 12) {
            console.log('Carteira Suspensa');
        }
        else{
            console.log('Pontos', pontos);
        }
    }
}