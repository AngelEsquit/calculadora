export function handleNumberClick (number, displayValue, esperandoNuevoNumero, setDisplayValue,
  setEsperandoNuevoNumero) {
  if (esperandoNuevoNumero) {
    setDisplayValue(number)
    setEsperandoNuevoNumero(false)
  } else {
    if (displayValue.length < 9) {
      setDisplayValue(displayValue === '0' ? number : displayValue + number)
    }
  }
}
