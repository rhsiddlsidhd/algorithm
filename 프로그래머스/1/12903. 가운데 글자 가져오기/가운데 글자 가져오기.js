function solution(s) {
    var length = s.length;
    var middleIndex = Math.floor(length / 2);

    if (length % 2 === 0) {
      
        answer = s.substring(middleIndex - 1, middleIndex + 1);
    } else {
      
        answer = s.charAt(middleIndex);
    }

    return answer;
}