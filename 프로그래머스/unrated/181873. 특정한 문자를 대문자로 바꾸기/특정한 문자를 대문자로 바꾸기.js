function solution(my_string, alp) {
  const regex = new RegExp(alp, 'g');
  const result = my_string.replace(regex, alp.toUpperCase());
  
  return result;
}