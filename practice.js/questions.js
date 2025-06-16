// Write a function sumEven(numbers) that takes an array and returns the sum of all even numbers.

function sumEven(numbers){
    let sum = 0

    for ( let num of numbers ){
        if  ( num % 2 == 0 ){
         sum += num;   
        }
            
    }
    return sum ;
}


console.log(sumEven([10,30,60, 75]));
