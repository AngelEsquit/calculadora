import { cleanValue } from '../utils/cleanValue'

function Boton ({ value, onClick }) {
  const esOperador = ['+', '-', '*', '÷', '%', '+/-'].includes(value)
  const esClear = value === 'C'
  const esBackspace = value === 'CE'
  const esIgual = value === '='
  const esDecimal = value === '.'
  const esNumero = !isNaN(value) || value === '0'

  const className = `
    boton
    ${esOperador ? 'operador' : ''}
    ${esClear ? 'clear' : ''}
    ${esBackspace ? 'backspace' : ''}
    ${esIgual ? 'igual' : ''}
    ${esDecimal ? 'decimal' : ''}
    ${esNumero ? 'numero' : ''}
  `.trim()

  return (
    <button className={className} onClick={onClick} data-testid={`boton-${cleanValue(value)}`}>
      {value}
    </button>
  )
}

export default Boton