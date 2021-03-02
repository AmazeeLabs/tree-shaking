import logo from "./logo.svg"
import "./App.css"
import _ from "lodash"

const items = Array.from({
  length: 1000
}).map((_, index) => index)

const getTotal = (items) => _.reduce(items, (total, item) => {
  total += item
  return total
}, 0)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>No tree shaking</h1>
      <p>Result is {getTotal(items)}</p>
    </div>
  )
}

export default App
