import React from 'react'
type ProductByIdReviewId={params:{reviewId:string;productId:string}}
export default function ProductByIdReviewsId(props:ProductByIdReviewId) {
  return (
    <div>product of id:{props.params.productId} and  reviews by id:{props.params.reviewId}</div>
  )
}
