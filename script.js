const accetati = ['spiega', 'come','aiuto','aiutami', 'vuol dire', 'correggi', 'capire', 'capisco'];
const butt = document.getElementById("aiuto");
const scritta = document.getElementById("frase");
butt.addEventListener("click", function funziona(){
    const frase = scritta.value.split(" ");
   if(frase.some(p => accetati.includes(p))){
    console.log("non so")
   }
   console.log("funziona")
})
    