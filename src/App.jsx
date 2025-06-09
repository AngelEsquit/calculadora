// src/App.jsx
import './App.css'
import Display from './components/Display'
import Teclado from './components/Teclado'
import useCalculadora from './hooks/useCalculadora'

function App () {
  const {
    displayValue,
    onNumberClick,
    onOperationClick,
    onEqualsClick,
    handleDecimalClick,
    onClearClick,
    handleBackspace
  } = useCalculadora()

  return (
    <div className="app-container">
      <div className="calculadora">
        <Display value={displayValue} />
        <Teclado
          onNumberClick={onNumberClick}
          onClearClick={onClearClick}
          onOperationClick={onOperationClick}
          onEqualsClick={onEqualsClick}
          onDecimalClick={handleDecimalClick}
          onBackspaceClick={handleBackspace}   
        />
      </div>
    </div>
  )
}

export default App