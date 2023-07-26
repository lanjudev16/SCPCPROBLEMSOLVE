const reversedString=(inputString)=>{
        let reversedString =[];
        for (let i = inputString.length - 1; i >= 0; i--) {
          reversedString.push(inputString[i])
        }
        return reversedString.join('');
}
console.log(reversedString("Lanju"))