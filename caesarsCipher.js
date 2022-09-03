function rot13(str) { 
    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     let newArr = [];
     let newLetter = "";
     let reg = /\W/g
      for(let i = 0; i <= str.length-1; i++){
        if(str[i].match(reg)){newArr.push(str[i])
        }
       for(let j = 0; j <= abc.length-1; j++){
         if(str[i] == abc[j]){
             if(j <= 12){
               newLetter = abc[j+13];
               }else if(j > 12){
               newLetter = abc[j-13];
             }    
             newArr.push(newLetter)
           }
         }
        }
      let str1 =  newArr.join("")
    
      
      return str1
     }
  
console.log(rot13("SERR CVMMN!"));
