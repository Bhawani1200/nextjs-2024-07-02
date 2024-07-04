import { notFound } from 'next/navigation';
import React from 'react'
type productByIdType={params:{productId:number}}
export default function ProductById(props:productByIdType) {
  if(props.params.productId>1000){
    notFound();
  }
  return(
  <div>Product of id:{props.params.productId}</div>
  )
}
