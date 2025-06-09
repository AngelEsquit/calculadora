import Boton from '../components/Boton'

export default {
  title: 'Componentes/BotonClear',
  component: Boton,
  argTypes: {
    onClick: { action: 'clicked' }
  }
}

export const Clear = {
  args: {
    value: 'C'
  }
}