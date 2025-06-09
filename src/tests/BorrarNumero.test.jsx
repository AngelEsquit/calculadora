import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('Calculadora', () => {
  it('borrar numero', () => {
    render(<App />)
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('CE'))
    fireEvent.click(screen.getByText('4'))

    const display = screen.getByTestId('display')
    expect(display.textContent).toBe('124')
  })
})