import {UseState} from 'react'
import { FilterBar } from './FilterBar'
import { Headers } from './Headers'
import { Fruits } from './Fruits'
import { Legumes } from './Legumes'

export const PRODUIT = 
[
  {category:"Fruits",price:"$2",stocked:true,nom:"fraise"},
  {category:"Fruits",price:"$4",stocked:false,nom:"Avocat"},
  {category:"Fruits",price:"$3",stocked:true,nom:"Pêche"},
  {category:"Fruits",price:"$5",stocked:false,nom:"Avocat"},
  {category:"Légumes",price:"$1.23",stocked:true,nom:"courgette"},
  {category:"Légumes",price:"$6",stocked:false,nom:"carrote"},
  {category:"Légumes",price:"$1.23",stocked:true,nom:"pomme de terre"},
  {category:"Légumes",price:"$6",stocked:false,nom:"poivron"},


  
]

function App() 
{
   return (
    <>
     
      <Headers/>
      <Fruits produits={PRODUIT} />
      <Legumes produits={PRODUIT} />
     
    </>
   )
}


export default App

