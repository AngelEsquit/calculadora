import Teclado from '../components/Teclado'

export default {
  title: 'Componentes/Teclado',
  component: Teclado,
  argTypes: {
    onNumberClick: { action: 'número presionado' },
    onOperationClick: { action: 'operador presionado' },
    onEqualsClick: { action: 'igual presionado' },
    onDecimalClick: { action: 'decimal presionado' },
    onClearClick: { action: 'clear presionado' },
    onBackspaceClick: { action: 'backspace presionado' }
  }
}

export const Completo = {}