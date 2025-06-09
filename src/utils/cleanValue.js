export function cleanValue (value) {
  return String(value)
    .replace(/\+/g, 'mas')
    .replace(/-/g, 'menos')
    .replace(/\*/g, 'por')
    .replace(/÷/g, 'dividido')
    .replace(/%/g, 'mod')
    .replace(/\+\/-/g, 'signo')
    .replace(/\W/g, '')
}