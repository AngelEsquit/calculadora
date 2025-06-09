// src/components/Teclado.jsx
import Boton from './Boton'

function Teclado ({ onNumberClick, onOperationClick, onEqualsClick, onDecimalClick, onClearClick, onBackspaceClick }) {
  return (
    <div className="teclado">
      {['C', 'CE', '%', '÷', 7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', '+/-', 0, '.', '='].map((key) => (
        <Boton key={key} value={key}
          onClick={() => {
            if (typeof key === 'number') {
              onNumberClick(String(key))
            } else if (['+', '-', '*', '÷', '%', '+/-'].includes(key)) {
              onOperationClick(key)
            } else if (key === '=') {
              onEqualsClick()
            } else if (key === '.') {
              onDecimalClick()
            } else if (key === 'C') {
              onClearClick()
            } else if (key === 'CE') {
              onBackspaceClick()
            }
          }} 
        />
      ))}
    </div>
  )
}

export default Teclado