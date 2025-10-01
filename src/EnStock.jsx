export  function EnStock({produits})
{
   const EnStockOnly = produits.filter(produit => produit.stocked === true);
    return (
        
        <>
            <div className="container">

                <div className=" mt-2 row">
                    <div className="offset-sm-3 col-sm-6 offset-2 col-6">
                        <h5>EnStock</h5>
                    </div>
                    
                    {EnStockOnly.map( (EnStock) => 
                        <div className="row border-bottom py-2">
                                <div className="col">
                                    <span style={{ color:  'green' }}>
                                        {EnStock.nom}
                                    </span>
                                </div>
                                <div className="col">
                                    {EnStock.price}
                                </div>
                        </div>
                        
                    )}

                </div> 
            </div>
        </>
    )
    
}