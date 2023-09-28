function solution(n) {
  const numStr = n.toString();
  let sum = 0;
  
  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i], 10);
  }
  
  return sum;
}