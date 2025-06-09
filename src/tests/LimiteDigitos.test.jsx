import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('Calculadora', () => {
  it('limite digitos', () => {
    render(<App />)
    for (let i = 9; i >= 0; i--) {
      fireEvent.click(screen.getByText(i.toString()))
    }

    const display = screen.getByTestId('display')
    expect(display.textContent).toBe('987654321')
  })
})