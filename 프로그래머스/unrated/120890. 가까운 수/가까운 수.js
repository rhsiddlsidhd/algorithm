function solution(array, n) {
    
    array.sort((a, b) => a - b);

    let closestNumber = array[0];
    let minDifference = Math.abs(n - array[0]);

    for (let i = 1; i < array.length; i++) {
        const currentDifference = Math.abs(n - array[i]);

        if (currentDifference < minDifference) {
            closestNumber = array[i];
            minDifference = currentDifference;
        }
    }

    
    var answer = closestNumber;

    return answer;
}