function speriamo() {
    const accetati = ['spiega', 'come','aiuto','aiutami', 'vuol dire', 'correggi', 'capire', capisco]
document.getElementById('aiuto').addEventListener('click', () => {
    const frase = document.getElementById("frase")
    
    if (frase == accetati){
        console.log('non è vero')
    }

    console.log('bravo hai ragione')

})

}
    
}
