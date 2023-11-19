function solution(my_string) {
   
    const wordsArray = my_string.split(/\s+/);

    
    return wordsArray.filter(word => word !== "");
}