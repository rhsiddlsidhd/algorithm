function solution(num_str) {
    var answer = 0;
    for (var i = 0; i < num_str.length; i++) {
        
        answer += parseInt(num_str[i]);
    }
    return answer;
}