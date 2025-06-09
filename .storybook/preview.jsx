import '../src/App.css'

export const decorators = [
  (Story) => (
    <div className="app-container">
      <div className="calculadora">
        <Story />
      </div>
    </div>
  )
]