import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error("Error fetching stock data:", error));
  })
  
    const [symbol, setSymbol] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")

    const handleonClick = () => {
      setSymbol("")
      setQuantity("")
      setPrice("")
    }

   return (
    <div className="financeDashboardContent">
    <h1>Finance Dashboard</h1>
    
    <div className="inputs">
    <input type="text" name="stock-symbol" placeholder="Stock Symbol" />
    <input type="text" name="quantity" placeholder="Quantity" />
    <input type="text" name="purchase-price" placeholder="Purchase Price" />
    
    <button onClick={handleonClick}>Add Stock</button>
    </div>

    <h2>Stock List</h2>
    <div className="stockList">
    </div>
    </div>
  )}

export default App
