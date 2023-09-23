function solution(numbers, num1, num2) {
    // num1과 num2가 배열의 범위를 벗어나지 않도록 확인합니다.
    if (num1 < 0) {
        num1 = 0;
    }
    if (num2 >= numbers.length) {
        num2 = numbers.length - 1;
    }

    // 배열을 num1번째 인덱스부터 num2번째 인덱스까지 자릅니다.
    const result = numbers.slice(num1, num2 + 1);

    return result;
}