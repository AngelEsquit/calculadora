import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('Calculadora', () => {
  it('esperando nuevo numero', () => {
    render(<App />)
    fireEvent.click(screen.getByText('9'))
    fireEvent.click(screen.getByText('÷'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('='))
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('2'))

    const display = screen.getByTestId('display')
    expect(display.textContent).toBe('12')
  })
})