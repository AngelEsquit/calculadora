import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('Calculadora', () => {
  it('restar 70 - 45', () => {
    render(<App />)
    fireEvent.click(screen.getByText('7'))
    fireEvent.click(screen.getByText('0'))
    fireEvent.click(screen.getByText('-'))
    fireEvent.click(screen.getByText('4'))
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('='))

    const display = screen.getByTestId('display')
    expect(display.textContent).toBe('25')
  })
})