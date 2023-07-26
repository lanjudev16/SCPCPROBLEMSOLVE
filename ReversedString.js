const reversedString=(inputString)=>{
        let reversedString =[];
        for (let i = inputString.length - 1; i >= 0; i--) {
          reversedString.push(inputString[i])
        }
        return reversedString.join('');
}
// console.log(reversedString("hello world"))
const sumOfAllPositiveNumber=(inputNumber)=>{
    let sum=0;
    for (const number of inputNumber) {
        
        if(number>0){
            sum+=number
        }
    }
    return sum
}
// console.log(sumOfAllPositiveNumber([2, -5, 10, -3, 7]))

