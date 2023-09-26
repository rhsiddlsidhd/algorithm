function solution(s1, s2) {
    
    const set1 = new Set(s1);

    let count = 0;

    
    for (const element of s2) {
        if (set1.has(element)) {
            count++;
            
            set1.delete(element);
        }
    }

    return count;
}
