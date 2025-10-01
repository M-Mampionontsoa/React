export  function Fruits({produits})
{
   const fruitsOnly = produits.filter(produit => produit.category === "Fruits");
    return (
        
        <>
            <div className="container">

                <div className=" mt-2 row">
                    <div className="offset-sm-3 col-sm-6 offset-2 col-6">
                        <h5>Fruits</h5>
                    </div>
                    
                    {fruitsOnly.map( (fruits) => 
                        <div className="row border-bottom py-2">
                                <div className="col">
                                    <span style={{ color: fruits.stocked ? 'green' : 'red' }}>
                                        {fruits.nom}
                                    </span>
                                </div>
                                <div className="col">
                                    {fruits.price}
                                </div>
                        </div>
                        
                    )}

                </div> 
            </div>
        </>
    )
    
}