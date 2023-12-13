function solution(rsp) {
  const result = [];
  
  for (let i = 0; i < rsp.length; i++) {
    const currentMove = rsp[i];
    
  
    const winningMoves = {
      '2': '0', 
      '0': '5',  
      '5': '2'   
    };
    

    const winningMove = winningMoves[currentMove];

    if (winningMove !== undefined) {
      result.push(winningMove);
    }
  }
  

  return result.join('');
}
