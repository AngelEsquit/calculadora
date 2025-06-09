export function performOperation (operator, firstOperand, displayValue) {
  const secondOperand = parseFloat(displayValue)
  const checkLimit = (value) =>
    value > 999999999 || value < -999999999 ? 'ERROR' : value

  switch (operator) {
  case '+':
    return checkLimit(firstOperand + secondOperand)
  case '-': {
    const result = firstOperand - secondOperand
    return result < 0 ? 'ERROR' : checkLimit(result)
  }
  case '*':
    return checkLimit(firstOperand * secondOperand)
  case '÷':
    return secondOperand === 0 ? 'ERROR' : checkLimit(firstOperand / secondOperand)
  case '%':
    return secondOperand === 0 ? 'ERROR' : checkLimit(firstOperand % secondOperand)
  case '+/-':
    return checkLimit(-firstOperand)
  default:
    return secondOperand
  }
}