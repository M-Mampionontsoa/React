import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App,{PRODUIT} from './App.jsx'
import { EnStock } from './EnStock.jsx'
import { FilterBar } from './FilterBar'



function RootComponent() {
  const [stockOnly, setStockOnly] = useState(false)

  return (
    <div>
      {/* Utilise le FilterBar existant */}
      <FilterBar onStockOnlyChange={setStockOnly} />
      
      {/* Condition pour afficher App ou EnStock */}
      {stockOnly ? <EnStock produits={PRODUIT} /> : <App />}
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootComponent />
  </StrictMode>,
)