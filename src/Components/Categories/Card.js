import React from 'react'
import { Card } from 'antd'
import { useHistory } from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import FavoriteIcon from '@material-ui/icons/Favorite'
import VisibilityIcon from '@material-ui/icons/Visibility'
import { connect } from 'react-redux'
import { addToCart } from '../../redux/action/shoppingAction'
import { addToWishlist } from '../../redux/action/whislistAction'

const ProductCard = ({ product, addToCart, addToWishlist }) => {
  const history = useHistory()

  const SwitchToProductDetails = () => {
    history.push(
      `/details/${product.id}/${product.data.categoryId}/${product.data.subCategoryId}`,
    )
  }

  return (
    <>
      <Card
        className="product-card"
        hoverable
        cover={
          <>
            <img
              className="cart-image-size"
              alt="example"
              src={product.data.imageUrl}
            />
          </>
        }
      >
        <div className="price-container">
          <b>{product.data.name}</b>
          <div className="product-description">{product.data.description}</div>
          <hr />
          <p>
            {`${product.data.moreThanFivePieces} FRW - ${product.data.LessFivePieces} FRW`}{' '}
          </p>
        </div>
        <div className="shop-fav-icons">
          <ol className="product-action-btn-list">
            <li>
              {' '}
              <ShoppingBasketIcon
                className="shoping-cart"
                onClick={() => addToCart(product.id, product)}
              />
            </li>
            <li>
              <FavoriteIcon
                className="Favorites"
                onClick={() => addToWishlist(product.id, product)}
              />
            </li>
            <li>
              {' '}
              <VisibilityIcon
                className="details-icon"
                onClick={SwitchToProductDetails}
              />
            </li>
          </ol>
        </div>
      </Card>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, product) => dispatch(addToCart(id, product)),
    addToWishlist: (id, product) => dispatch(addToWishlist(id, product)),
  }
}
export default connect(null, mapDispatchToProps)(ProductCard)
