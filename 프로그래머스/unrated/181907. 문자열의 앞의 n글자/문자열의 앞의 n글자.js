function solution(my_string, n) {
    if (n >= 0 && n <= my_string.length) {
        return my_string.slice(0, n);
    } else {
        return "n은 0 이상이고 문자열 길이 이하여야 합니다.";
    }
}