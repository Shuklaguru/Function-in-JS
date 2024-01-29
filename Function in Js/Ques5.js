function factorial(num){
    if(num == 1)
      return 1;
    let result = num * factorial(num - 1);
    return result;
}
const ans = factorial(5);
console.log("factorial of number is",ans);