import React from 'react'
import { Card, Col, Row, Carousel } from 'antd'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import FavoriteIcon from '@material-ui/icons/Favorite'
import VisibilityIcon from '@material-ui/icons/Visibility'
import { addToCart } from '../../redux/action/shoppingAction'
import { connect } from 'react-redux'
import { addToWishlist } from '../../redux/action/whislistAction'

const CarouselSlides = ({
  addToCart,
  LatestProducts,
  LatestProductId,
  latestProductPrices1,
  latestProductPrices2,
  latestProductDesc,
  latestProductName,
  productData,
  SwitchToProductDetails1,
  SwitchToProductDetails2,
  SwitchToProductDetails3,
  SwitchToProductDetails4,
  SwitchToProductDetails5,
  SwitchToProductDetails6,
  SwitchToProductDetails7,
  SwitchToProductDetails8,
  SwitchToProductDetails9,
  SwitchToProductDetails10,
  SwitchToProductDetails11,
  SwitchToProductDetails12,
  addToWishlist,
}) => {
  return (
    <>
      <Carousel autoplay dotPosition="top" className="container">
        <div>
          <div className="container-fluid mt-4 container">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      className="cart-image"
                      alt="example"
                      src={`${LatestProducts[0]}`}
                    />
                  }
                >
                  <div className="price-container">
                    <b>{latestProductName[0]}</b>
                    <div className="product-description">
                      {latestProductDesc[0]}
                    </div>
                    <hr />
                    <p>{`${latestProductPrices2[0]} FRW - ${latestProductPrices1[0]} FRW`}</p>
                  </div>
                  <div className="shop-fav-icons">
                    <ol className="product-action-btn-list">
                      <li>
                        {' '}
                        <ShoppingBasketIcon
                          className="shoping-cart"
                          onClick={
                            () => addToCart(LatestProductId[0], productData[0])
                            //console.log(LatestProductId[0], productData[0])
                          }
                        />
                      </li>
                      <li>
                        <FavoriteIcon
                          className="Favorites"
                          onClick={() =>
                            addToWishlist(LatestProductId[0], productData[0])
                          }
                        />
                      </li>
                      <li>
                        {' '}
                        <VisibilityIcon
                          onClick={SwitchToProductDetails1}
                          className="details-icon"
                        />
                      </li>
                    </ol>
                  </div>
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      className="cart-image"
                      alt="example"
                      src={`${LatestProducts[1]}`}
                    />
                  }
                >
                  <div className="price-container">
                    <b>{latestProductName[1]}</b>
                    <div className="product-description">
                      {latestProductDesc[1]}
                    </div>
                    <hr />
                    <p>
                      {`${latestProductPrices2[1]} FRW - ${latestProductPrices1[1]} FRW`}
                    </p>
                  </div>
                  <div className="shop-fav-icons">
                    <ol className="product-action-btn-list">
                      <li>
                        {' '}
                        <ShoppingBasketIcon
                          className="shoping-cart"
                          onClick={() =>
                            addToCart(LatestProductId[1], productData[1])
                          }
                        />
                      </li>
                      <li>
                        <FavoriteIcon
                          className="Favorites"
                          onClick={() =>
                            addToWishlist(LatestProductId[1], productData[1])
                          }
                        />
                      </li>
                      <li>
                        {' '}
                        <VisibilityIcon
                          onClick={SwitchToProductDetails2}
                          className="details-icon"
                        />
                      </li>
                    </ol>
                  </div>
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      className="cart-image"
                      alt="example"
                      src={`${LatestProducts[2]}`}
                    />
                  }
                >
                  <div className="price-container">
                    <b>{latestProductName[2]}</b>
                    <div className="product-description">
                      {latestProductDesc[2]}
                    </div>
                    <hr />
                    <p>{`${latestProductPrices2[2]} FRW - ${latestProductPrices1[2]} FRW`}</p>
                  </div>
                  <div className="shop-fav-icons">
                    <ol className="product-action-btn-list">
                      <li>
                        <ShoppingBasketIcon
                          className="shoping-cart"
                          onClick={() =>
                            addToCart(LatestProductId[2], productData[2])
                          }
                        />
                      </li>
                      <li>
                        <FavoriteIcon
                          className="Favorites"
                          onClick={() =>
                            addToWishlist(LatestProductId[2], productData[2])
                          }
                        />
                      </li>
                      <li>
                        {' '}
                        <VisibilityIcon
                          onClick={SwitchToProductDetails3}
                          className="details-icon"
                        />
                      </li>
                    </ol>
                  </div>
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      className="cart-image"
                      alt="example"
                      src={`${LatestProducts[3]}`}
                    />
                  }
                >
                  <div className="price-container">
                    <b>{latestProductName[3]}</b>
                    <div className="product-description">
                      {latestProductDesc[3]}
                    </div>
                    <hr />
                    <p>{`${latestProductPrices2[3]} FRW - ${latestProductPrices1[3]} FRW `}</p>
                  </div>
                  <div className="shop-fav-icons">
                    <ol className="product-action-btn-list">
                      <li>
                        {' '}
                        <ShoppingBasketIcon
                          className="shoping-cart"
                          onClick={() =>
                            addToCart(LatestProductId[3], productData[3])
                          }
                        />
                      </li>
                      <li>
                        <FavoriteIcon
                          className="Favorites"
                          onClick={() =>
                            addToWishlist(LatestProductId[3], productData[3])
                          }
                        />
                      </li>
                      <li>
                        {' '}
                        <VisibilityIcon
                          onClick={SwitchToProductDetails4}
                          className="details-icon"
                        />
                      </li>
                    </ol>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        <div>
          <div className="container-fluid mt-4 container">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      className="cart-image"
                      alt="example"
                      src={`${LatestProducts[4]}`}
                    />
                  }
                >
                  <div className="price-container">
                    <b>{latestProductName[4]}</b>
                    <div className="product-description">
                      {latestProductDesc[4]}
                    </div>
                    <hr />
                    <p>
                      {`${latestProductPrices2[4]} FRW - ${latestProductPrices1[4]} FRW`}
                    </p>
                  </div>
                  <div className="shop-fav-icons">
                    <ol className="product-action-btn-list">
                      <li>
                        {' '}
                        <ShoppingBasketIcon
                          className="shoping-cart"
                          onClick={() =>
                            addToCart(LatestProductId[4], productData[4])
                          }
                        />
                      </li>
                      <li>
                        <FavoriteIcon
                          className="Favorites"
                          onClick={() =>
                            addToWishlist(LatestProductId[4], productData[4])
                          }
                        />
                      </li>
                      <li>
                        {' '}
                        <VisibilityIcon
                          onClick={SwitchToProductDetails5}
                          className="details-icon"
                        />
                      </li>
                    </ol>
                  </div>
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      className="cart-image"
                      alt="example"
                      src={`${LatestProducts[5]}`}
                    />
                  }
                >
                  <div className="price-container">
                    <b>{latestProductName[5]}</b>
                    <div className="product-description">
                      {latestProductDesc[5]}
                    </div>
                    <hr />
                    <p>{`${latestProductPrices2[5]} FRW - ${latestProductPrices1[5]} FRW`}</p>
                  </div>
                  <div className="shop-fav-icons">
                    <ol className="product-action-btn-list">
                      <li>
                        {' '}
                        <ShoppingBasketIcon
                          className="shoping-cart"
                          onClick={() =>
                            addToCart(LatestProductId[5], productData[5])
                          }
                        />
                      </li>
                      <li>
                        <FavoriteIcon
                          className="Favorites"
                          onClick={() =>
                            addToWishlist(LatestProductId[5], productData[5])
                          }
                        />
                      </li>
                      <li>
                        <VisibilityIcon
                          onClick={SwitchToProductDetails6}
                          className="details-icon"
                        />
                      </li>
                    </ol>
                  </div>
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      className="cart-image"
                      alt="example"
                      src={`${LatestProducts[6]}`}
                    />
                  }
                >
                  <div className="price-container">
                    <b>{latestProductName[6]}</b>
                    <div className="product-description">
                      {latestProductDesc[6]}
                    </div>
                    <hr />
                    <p>
                      {`${latestProductPrices2[6]} FRW - ${latestProductPrices1[6]} FRW`}
                    </p>
                  </div>
                  <div className="shop-fav-icons">
                    <ol className="product-action-btn-list">
                      <li>
                        <ShoppingBasketIcon
                          className="shoping-cart"
                          onClick={() =>
                            addToCart(LatestProductId[6], productData[6])
                          }
                        />
                      </li>
                      <li>
                        <FavoriteIcon
                          className="Favorites"
                          onClick={() =>
                            addToWishlist(LatestProductId[6], productData[6])
                          }
                        />
                      </li>
                      <li>
                        {' '}
                        <VisibilityIcon
                          onClick={SwitchToProductDetails7}
                          className="details-icon"
                        />
                      </li>
                    </ol>
                  </div>
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      className="cart-image"
                      alt="example"
                      src={`${LatestProducts[7]}`}
                    />
                  }
                >
                  <div className="price-container">
                    <b>{latestProductName[7]}</b>
                    <div className="product-description">
                      {latestProductDesc[7]}
                    </div>
                    <hr />
                    <p>{`${latestProductPrices2[7]} FRW - ${latestProductPrices1[7]} FRW`}</p>
                  </div>
                  <div className="shop-fav-icons">
                    <ol className="product-action-btn-list">
                      <li>
                        <ShoppingBasketIcon
                          className="shoping-cart"
                          onClick={() =>
                            addToCart(LatestProductId[7], productData[7])
                          }
                        />
                      </li>
                      <li>
                        <FavoriteIcon
                          className="Favorites"
                          onClick={() =>
                            addToWishlist(LatestProductId[7], productData[7])
                          }
                        />
                      </li>
                      <li>
                        {' '}
                        <VisibilityIcon
                          onClick={SwitchToProductDetails8}
                          className="details-icon"
                        />
                      </li>
                    </ol>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        <div>
          <div className="container-fluid mt-4 container">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      className="cart-image"
                      alt="example"
                      src={`${LatestProducts[8]}`}
                    />
                  }
                >
                  {' '}
                  <div className="price-container">
                    <b>{latestProductName[8]}</b>
                    <div className="product-description">
                      {latestProductDesc[8]}
                    </div>
                    <hr />
                    <p>
                      {`${latestProductPrices2[8]} FRW - ${latestProductPrices1[8]} FRW`}{' '}
                    </p>
                  </div>
                  <div className="shop-fav-icons">
                    <ol className="product-action-btn-list">
                      <li>
                        <ShoppingBasketIcon
                          className="shoping-cart"
                          onClick={() =>
                            addToCart(LatestProductId[8], productData[8])
                          }
                        />
                      </li>
                      <li>
                        <FavoriteIcon
                          className="Favorites"
                          onClick={() =>
                            addToWishlist(LatestProductId[8], productData[8])
                          }
                        />
                      </li>
                      <li>
                        <VisibilityIcon
                          onClick={SwitchToProductDetails9}
                          className="details-icon"
                        />
                      </li>
                    </ol>
                  </div>
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      className="cart-image"
                      alt="example"
                      src={`${LatestProducts[9]}`}
                    />
                  }
                >
                  <div className="price-container">
                    <b>{latestProductName[9]}</b>
                    <div className="product-description">
                      {latestProductDesc[9]}
                    </div>
                    <hr />
                    <p>
                      {`${latestProductPrices2[9]} FRW - ${latestProductPrices1[9]} FRW`}
                    </p>
                  </div>
                  <div className="shop-fav-icons">
                    <ol className="product-action-btn-list">
                      <li>
                        {' '}
                        <ShoppingBasketIcon
                          className="shoping-cart"
                          onClick={() =>
                            addToCart(LatestProductId[9], productData[9])
                          }
                        />
                      </li>
                      <li>
                        <FavoriteIcon
                          className="Favorites"
                          onClick={() =>
                            addToWishlist(LatestProductId[9], productData[9])
                          }
                        />
                      </li>
                      <li>
                        {' '}
                        <VisibilityIcon
                          onClick={SwitchToProductDetails10}
                          className="details-icon"
                        />
                      </li>
                    </ol>
                  </div>
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      className="cart-image"
                      alt="example"
                      src={`${LatestProducts[10]}`}
                    />
                  }
                >
                  <div className="price-container">
                    <b>{latestProductName[10]}</b>
                    <div className="product-description">
                      {latestProductDesc[10]}
                    </div>
                    <hr />
                    <p>
                      {`${latestProductPrices2[10]} FRW - ${latestProductPrices1[10]} FRW`}
                    </p>
                  </div>
                  <div className="shop-fav-icons">
                    <ol className="product-action-btn-list">
                      <li>
                        {' '}
                        <ShoppingBasketIcon
                          className="shoping-cart"
                          onClick={() =>
                            addToCart(LatestProductId[10], productData[10])
                          }
                        />
                      </li>
                      <li>
                        <FavoriteIcon
                          className="Favorites"
                          onClick={() =>
                            addToWishlist(LatestProductId[10], productData[10])
                          }
                        />
                      </li>
                      <li>
                        {' '}
                        <VisibilityIcon
                          onClick={SwitchToProductDetails11}
                          className="details-icon"
                        />
                      </li>
                    </ol>
                  </div>
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      className="cart-image"
                      alt="example"
                      src={`${LatestProducts[11]}`}
                    />
                  }
                >
                  <div className="price-container">
                    <b>{latestProductName[11]}</b>
                    <div className="product-description">
                      {latestProductDesc[11]}
                    </div>
                    <hr />
                    <p>{`${latestProductPrices2[11]} FRW - ${latestProductPrices1[11]} FRW`}</p>
                  </div>
                  <div className="shop-fav-icons">
                    <ol className="product-action-btn-list">
                      <li>
                        {' '}
                        <ShoppingBasketIcon
                          className="shoping-cart"
                          onClick={() =>
                            addToCart(LatestProductId[11], productData[11])
                          }
                        />
                      </li>
                      <li>
                        <FavoriteIcon
                          className="Favorites"
                          onClick={() =>
                            addToWishlist(LatestProductId[11], productData[11])
                          }
                        />
                      </li>
                      <li>
                        {' '}
                        <VisibilityIcon
                          onClick={SwitchToProductDetails12}
                          className="details-icon"
                        />
                      </li>
                    </ol>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Carousel>
    </>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, product) => dispatch(addToCart(id, product)),
    addToWishlist: (id, product) => dispatch(addToWishlist(id, product)),
  }
}
export default connect(null, mapDispatchToProps)(CarouselSlides)
