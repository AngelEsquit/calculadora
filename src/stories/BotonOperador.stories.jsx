import Boton from '../components/Boton'

export default {
  title: 'Componentes/BotonOperador',
  component: Boton,
  argTypes: {
    onClick: { action: 'clicked' }
  }
}

export const Suma = {
  args: {
    value: '+'
  }
}

export const Resta = {
  args: {
    value: '-'
  }
}

export const Multiplicacion = {
  args: {
    value: '*'
  }
}

export const Division = {
  args: {
    value: '/'
  }
}

export const Modulo = {
  args: {
    value: '%'
  }
}