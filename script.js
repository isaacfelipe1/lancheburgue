function pesquisou() {
    var valor=window.document.getElementById('pesquisar')
    var botao=valor.value
    if (botao=='Lanches' || botao=='lanches' || botao=="refrigerante" || botao=="Refrigerante") {
        alert('encontramos')
    }else{
        alert('Não encontramos')
    }
    

}
