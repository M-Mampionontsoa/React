import 'bootstrap/dist/css/bootstrap.min.css';

export function FilterBar({ onStockOnlyChange }) {
    return ( 
        <>
            
            <div className='container'>
                <input 
                    type="checkbox" 
                    name="checking" 
                    id="checksome"
                    onChange={(e) => onStockOnlyChange(e.target.checked)}
                />
                <label htmlFor="checksome">N'Afficher que les produits en stocks</label>
            </div>
        </>
    )
}