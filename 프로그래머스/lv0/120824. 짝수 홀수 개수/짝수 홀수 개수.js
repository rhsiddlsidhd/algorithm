function solution(numList) {
    let evenCount = 0; 
    let oddCount = 0;   
    
   
    for (let i = 0; i < numList.length; i++) {
        if (numList[i] % 2 === 0) {  
            evenCount++;
        } else {  
            oddCount++;
        }
    }
    
   
    const result = [evenCount, oddCount];
    return result;
}
