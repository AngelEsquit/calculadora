import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('Calculadora', () => {
  it('limite digitos operacion', () => {
    render(<App />)
    const botones = ['9', '0', '0', '0', '0', '0', '*', '7', '6', '5', '4', '3', '=']
    botones.forEach(boton => {
      fireEvent.click(screen.getByText(boton))
    })
    const display = screen.getByTestId('display')
    expect(display.textContent).toBe('ERROR')
  })
})