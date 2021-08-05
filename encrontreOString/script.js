const filme = {
    titulo: 'Guadiões da galaxia',
    ano: 2014,
    diretor: 'James Gunn',
    personagem: 'Senhor das Estrelas'
}
exibirPropriedades(filme);

function exibirPropriedades(obj){
    for ( prop in obj){
        if ( typeof obj[prop] === 'string'){
            console.log(prop, obj[prop]);
        }
    }
}