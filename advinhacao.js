function numeroaleatorio(){
    const readline = require("readline-sync")
    let max = 5
    let min = 1
    let tentativas = 0
    let acertar = false 
    const numberandom = Math.floor(Math.random() * (max - min + 1)) + min;
    
  
    while(!acertar){
  
  
     
      const readline = require("readline-sync")
      const resposta = parseInt(readline.question("qual seu palpite? "))
      tentativas++
      
      
      if(resposta > 5 || resposta < 1){
        console.log("digite apenas numeros de 1 a 5 ")
        continue;
      }else if (resposta == ""){
        
      }
      
  
  
      if(resposta === numberandom){
        console.log("parabens vc acertou o palpite com este numero de tentativas: " + (tentativas))
      acertar = true  
       
  
  
      }else if (resposta < numberandom){
        console.log("tente um numero maior")
      
        
      }else{
        console.log("tente um numero menor")
      }
  
    }
  
    while(resposta === numberandom){
      console.log("deseja continuar")
    }
  
   return numberandom
  
   
  
  }
  
  console.log(numeroaleatorio());