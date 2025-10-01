export  function Legumes({produits})
{
   const LegumesOnly = produits.filter(produit => produit.category === "Légumes");
  
    return (
        
        <>
            <div className="container">

                <div className=" mt-2 row">
                    <div className="offset-sm-3 col-sm-6 offset-2 col-6">
                        <h5>Legumes</h5>
                    </div>
                    
                    {LegumesOnly.map( (Legumes) => 
                        <div className="row border-bottom py-2">
                                <div className="col">
                                    <span style={{ color: Legumes.stocked ? 'green' : 'red' }}>
                                        {Legumes.nom}
                                    </span>
                                </div>
                                <div className="col">
                                    {Legumes.price}
                                </div>
                        </div>
                        
                    )}

                </div> 
            </div>
        </>
    )
    
}