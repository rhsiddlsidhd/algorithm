function solution(arr) {
 
    if (arr.length > 1) {
   
        var min = Math.min.apply(null, arr);

       
        arr.splice(arr.indexOf(min), 1);

        return arr;
    } else {
        
        return [-1];
    }
}