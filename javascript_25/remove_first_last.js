function removeChar(str){
  
     let newString = ''
       for(let i = 0; i < str.length; i++){
           if(i !== 0 && i !== str.length -1) {
               newString += str[i]
           }
       }
       return newStr
   
   };