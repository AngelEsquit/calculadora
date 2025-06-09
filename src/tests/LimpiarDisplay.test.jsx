import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('Calculadora', () => {
  it('limpiar display', () => {
    render(<App />)
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('C'))

    const display = screen.getByTestId('display')
    expect(display.textContent).toBe('0')
  })
})