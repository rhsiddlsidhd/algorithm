function solution(num_list) {
    if (num_list.length >= 11) {

        const sum = num_list.reduce((acc, curr) => acc + curr, 0);
        return sum;
    } else {
      
        const product = num_list.reduce((acc, curr) => acc * curr, 1);
        return product;
    }
}
