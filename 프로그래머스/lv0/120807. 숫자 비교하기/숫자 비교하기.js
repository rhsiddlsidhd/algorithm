function solution(num1, num2) {
    var answer = ""
    if(num1 == num2){
        answer = 1
    } else if (num1> num2 || num1 < num2 ){
        answer = -1
    } 
    return answer;
}