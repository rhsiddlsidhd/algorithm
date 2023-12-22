function solution(arr) {
  if (arr.length === 0) {
    return 0; 
  }

  var sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  var average = sum / arr.length;

  return average;
}