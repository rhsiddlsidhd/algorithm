function solution(myString) {
    
    const charArray = myString.split('');

  
    for (let i = 0; i < charArray.length; i++) {
      
        if (charArray[i] < 'l') {
          
            charArray[i] = 'l';
        }
    }

    const resultString = charArray.join('');

    return resultString;
}