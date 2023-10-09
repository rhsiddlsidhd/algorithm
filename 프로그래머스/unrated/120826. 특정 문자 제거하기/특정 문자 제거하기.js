function solution(my_string, letter) {
  
  const newString = my_string.split(letter).join('');
  return newString;
}