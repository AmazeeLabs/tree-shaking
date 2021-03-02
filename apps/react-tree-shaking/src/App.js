import logo from "./logo.svg"
import "./App.css"
import reduce from "lodash/reduce"

const items = Array.from({
  length: 1000
}).map((_, index) => index)

const getTotal = (items) => reduce(items, (total, item) => {
  total += item
  return total
}, 0)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Tree shaking</h1>
      <p>Result is {getTotal(items)}</p>
    </div>
  )
}

export default App
