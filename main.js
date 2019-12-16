var nbetage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"); 
if (nbetage <25) { 
  console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
  console.log(nbetage);
  function pyramid(n){
    for (var i = 0; i < n; i++){
    
    var spaces = '';
    var symbols = '';
    
     for (var j = 1; j < (n - i); j++){
      spaces += ' ';
     }
    
      for (var x = 1; x <= (2*i + 1); x++){
      symbols +=  '#';
       
      }
    console.log(spaces + symbols)
    }
   }
  console.log('Voici la pyramide :'
  )
pyramid(nbetage)
}