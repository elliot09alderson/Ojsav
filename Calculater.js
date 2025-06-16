function calculate(num1, num2, operator) {
    let result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
    }
  
    return result;
  }
  console.log(calculate(10, 5, '+'));
  console.log(calculate(10, 5, '-'));
  console.log(calculate(10, 5, '*'));
  console.log(calculate(10, 5, '/'));
