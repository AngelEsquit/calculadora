import Boton from '../components/Boton'

export default {
  title: 'Componentes/BotonNumero',
  component: Boton,
  argTypes: {
    onClick: { action: 'clicked' }
  }
}

export const Numero = {
  args: {
    value: '7'
  }
}