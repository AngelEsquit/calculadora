export function handleOperationClick (
  newOperator, operator, esperandoNuevoNumero, displayValue,
  firstOperand, setDisplayValue, setFirstOperand, setOperator,
  setEsperandoNuevoNumero, performOperation
) {
  if (operator && !esperandoNuevoNumero) {
    const result = performOperation(operator, firstOperand, displayValue)
    setDisplayValue(String(result).slice(0, 9))
    setFirstOperand(result)
    setOperator(newOperator)
    setEsperandoNuevoNumero(true)
  } else if (!operator) {
    setFirstOperand(parseFloat(displayValue))
    setOperator(newOperator)
    setEsperandoNuevoNumero(true)
  } else {
    setOperator(newOperator)
  }
}