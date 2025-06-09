import { useState } from 'react'
import { handleNumberClick } from '../handlers/handleNumberClick'
import { handleClear } from '../handlers/handleClear'
import { handleEqualsClick } from '../handlers/handleEqualsClick'
import { handleOperationClick } from '../handlers/handleOperationClick'
import { performOperation } from '../utils/performOperation'

function useCalculadora () {
  const [displayValue, setDisplayValue] = useState('0')
  const [firstOperand, setFirstOperand] = useState(null)
  const [operator, setOperator] = useState(null)
  const [esperandoNuevoNumero, setEsperandoNuevoNumero] = useState(false)

  const onNumberClick  = (number) => {
    handleNumberClick(number, displayValue, esperandoNuevoNumero, setDisplayValue, setEsperandoNuevoNumero)
  }

  const handleDecimalClick = () => {
    if (!displayValue.includes('.') && displayValue.length < 9) {
      setDisplayValue(displayValue + '.')
    }
  }

  const onClearClick = () => {
    handleClear(setDisplayValue, setFirstOperand, setOperator, setEsperandoNuevoNumero)
  }

  const handleBackspace = () => {
    setDisplayValue(prev =>
      prev.length <= 1 || prev === 'ERROR' ? '0' : prev.slice(0, -1)
    )
  }

  const onOperationClick = (newOperator) => {
    handleOperationClick(
      newOperator, operator, esperandoNuevoNumero, displayValue,
      firstOperand, setDisplayValue, setFirstOperand, setOperator,
      setEsperandoNuevoNumero, performOperation
    )
  }

  const onEqualsClick = () => {
    handleEqualsClick(operator, firstOperand, displayValue, setDisplayValue, setFirstOperand, setOperator,
      setEsperandoNuevoNumero, performOperation)
  }

  return {
    displayValue,
    onNumberClick,
    onOperationClick,
    onEqualsClick,
    handleDecimalClick,
    onClearClick,
    handleBackspace
  }
}

export default useCalculadora