const accetati = ['spiega', 'come','aiuto','aiutami', 'vuol dire', 'correggi', 'capire', 'capisco'];
const riufiutati = ['crea', 'fai', 'metti']
const butt = document.getElementById("aiuto");
const scritta = document.getElementById("frase");
butt.addEventListener("click", function funziona(){
    const frase = scritta.value.split(" ");
    const casualità = Math.floor(Math.random() * 10)
    const casualità2 = Math.floor(Math.random() * 10)
   if(frase.some(p => accetati.includes(p) && casualità2 >=4 ) ) {
    console.log("non so")
    
   } else if(frase.some(l => riufiutati.includes(l))){
    console.log("funziona")
   } else{
        if(casualità <= 5){
            console.log('no')
        }else{
            console.log('si')
        }
   }
   console.log(casualità)
   console.log (casualità2)
   
})
    