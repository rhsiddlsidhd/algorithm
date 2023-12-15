function solution(num_list) {
    
    if (num_list.length < 5) {
        return "Input list should have at least 5 elements.";
    }

    num_list.sort(function(a, b) {
        return a - b;
    });

    return num_list.slice(0, 5);
}