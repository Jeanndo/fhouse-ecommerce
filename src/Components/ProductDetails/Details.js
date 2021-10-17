import React from 'react'
import { Button } from '@material-ui/core'
import { addToCart } from '../../redux/action/shoppingAction'
import { connect } from 'react-redux'

const Details = ({ product, addToCart }) => {
  return (
    <>
      <div className="Product-detail-name">
        <h2>
          <b>{product?.data?.name}</b>
        </h2>
      </div>
      <div className="product-detail-price mt-4">
        <p>{product?.data?.LessFivePieces} &nbsp; FRW Below 5 pieces</p>
        <p>{product?.data?.moreThanFivePieces} &nbsp; FRW Over 5 pieces</p>
        <p>Color:&nbsp; {product?.data?.color}</p>
        <p>Size:&nbsp; {product?.data?.size}</p>
      </div>
      <div className="product-details-add-to-cart-btn mt-4">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => addToCart(product.id, product)}
        >
          Add to Cart
        </Button>
      </div>
      <div className="product-details-seller-name mt-4">
        <p>
          Sold By:<b>Fhouse Store</b>
        </p>
      </div>
    </>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, product) => dispatch(addToCart(id, product)),
  }
}
export default connect(null, mapDispatchToProps)(Details)
