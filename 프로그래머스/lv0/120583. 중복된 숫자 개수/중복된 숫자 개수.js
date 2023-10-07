function solution(array, n) {
    let number = 0
    
    for(let i=0; i<array.length; i++){
       if( array[i] === n ) {
           number ++
       }
    }
    return number
}