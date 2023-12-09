function solution(numList) {

  if (numList.length <= 5) {
    return [];
  }


  const sortedNums = numList.slice().sort((a, b) => a - b);


  const result = sortedNums.slice(5);

  return result;
}