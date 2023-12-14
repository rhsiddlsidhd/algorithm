function solution(my_string, num1, num2) {
  
  if (num1 >= 0 && num1 < my_string.length && num2 >= 0 && num2 < my_string.length) {
  
    const charArray = my_string.split('');

 
    [charArray[num1], charArray[num2]] = [charArray[num2], charArray[num1]];

  
    return charArray.join('');
  } else {
   
    return my_string;
  }
}