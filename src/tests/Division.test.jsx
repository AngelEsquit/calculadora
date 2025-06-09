import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('Calculadora', () => {
  it('dividir 9 / 3', () => {
    render(<App />)
    fireEvent.click(screen.getByText('9'))
    fireEvent.click(screen.getByText('÷'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('='))

    const display = screen.getByTestId('display')
    expect(display.textContent).toBe('3')
  })
})