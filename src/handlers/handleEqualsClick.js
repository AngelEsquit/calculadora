export function handleEqualsClick (operator, firstOperand, displayValue, setDisplayValue,
  setFirstOperand, setOperator, setEsperandoNuevoNumero, performOperation) {
  if (operator && firstOperand !== null) {
    const result = performOperation(operator, firstOperand, displayValue)
    setDisplayValue(String(result).slice(0, 9))
    setFirstOperand(null)
    setOperator(null)
    setEsperandoNuevoNumero(true)
  }
}
