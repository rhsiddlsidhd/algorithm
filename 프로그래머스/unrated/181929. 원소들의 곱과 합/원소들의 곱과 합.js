function solution(num_list) {
  
  const product = num_list.reduce((acc, num) => acc * num, 1);

  
  const sum = num_list.reduce((acc, num) => acc + num, 0);

  
  const sumSquared = sum * sum;

  
  if (product < sumSquared) {
    return 1;
  } else {
    return 0;
  }
}
