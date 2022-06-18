import NewsFeed from "./components/NewsFeed"
import CurrencyConverter from "./components/CurrencyConverter"

function App() {
  return (
    <div className="app">
        <h1>Crypto Reference Converter</h1>
        <div className="app-wrapper">
          <CurrencyConverter/>
          <NewsFeed/>
        </div>

    </div>
  )
}

export default App