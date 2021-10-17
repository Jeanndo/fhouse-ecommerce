import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { displayProduct as showProduct } from '../../redux/action/product'
import CarouselSlides from './Carousel'

const Latest = ({ showProduct, displayProduct }) => {
  const history = useHistory()

  const LatestProducts =
    displayProduct.success &&
    displayProduct.message.slice(0, 12).map((product) => product.data.imageUrl)
  const LatestProductId =
    displayProduct.success &&
    displayProduct.message.slice(0, 12).map((product) => product.id)
  const LatestCategoryId =
    displayProduct.success &&
    displayProduct.message
      .slice(0, 12)
      .map((product) => product.data.categoryId)
  const LatestSubCategoryId =
    displayProduct.success &&
    displayProduct.message
      .slice(0, 12)
      .map((product) => product.data.subCategoryId)
  const latestProductPrices1 =
    displayProduct.success &&
    displayProduct.message
      .slice(0, 12)
      .map((product) => product.data.LessFivePieces)
  const latestProductPrices2 =
    displayProduct.success &&
    displayProduct.message
      .slice(0, 12)
      .map((product) => product.data.moreThanFivePieces)
  const latestProductDesc =
    displayProduct.success &&
    displayProduct.message
      .slice(0, 12)
      .map((product) => product.data.description)
  const latestProductName =
    displayProduct.success &&
    displayProduct.message.slice(0, 12).map((product) => product.data.name)
  const productData =
    displayProduct.success &&
    displayProduct.message.slice(0, 12).map((product) => product)

  const SwitchToProductDetails1 = () => {
    history.push(
      `/details/${LatestProductId[0]}/${LatestCategoryId[0]}/${LatestSubCategoryId[0]}`,
    )
  }
  const SwitchToProductDetails2 = () => {
    history.push(
      `/details/${LatestProductId[1]}/${LatestCategoryId[1]}/${LatestSubCategoryId[1]}`,
    )
  }
  const SwitchToProductDetails3 = () => {
    history.push(
      `/details/${LatestProductId[2]}/${LatestCategoryId[2]}/${LatestSubCategoryId[2]}`,
    )
  }
  const SwitchToProductDetails4 = () => {
    history.push(
      `/details/${LatestProductId[3]}/${LatestCategoryId[3]}/${LatestSubCategoryId[3]}`,
    )
  }
  const SwitchToProductDetails5 = () => {
    history.push(
      `/details/${LatestProductId[4]}/${LatestCategoryId[4]}/${LatestSubCategoryId[4]}`,
    )
  }

  const SwitchToProductDetails6 = () => {
    history.push(
      `/details/${LatestProductId[5]}/${LatestCategoryId[5]}/${LatestSubCategoryId[5]}`,
    )
  }
  const SwitchToProductDetails7 = () => {
    history.push(
      `/details/${LatestProductId[6]}/${LatestCategoryId[6]}/${LatestSubCategoryId[6]}`,
    )
  }

  const SwitchToProductDetails8 = () => {
    history.push(
      `/details/${LatestProductId[7]}/${LatestCategoryId[7]}/${LatestSubCategoryId[7]}`,
    )
  }

  const SwitchToProductDetails9 = () => {
    history.push(
      `/details/${LatestProductId[8]}/${LatestCategoryId[8]}/${LatestSubCategoryId[8]}`,
    )
  }

  const SwitchToProductDetails10 = () => {
    history.push(
      `/details/${LatestProductId[9]}/${LatestCategoryId[9]}/${LatestSubCategoryId[9]}`,
    )
  }

  const SwitchToProductDetails11 = () => {
    history.push(
      `/details/${LatestProductId[10]}/${LatestCategoryId[10]}/${LatestSubCategoryId[10]}`,
    )
  }

  const SwitchToProductDetails12 = () => {
    history.push(
      `/details/${LatestProductId[11]}/${LatestCategoryId[11]}/${LatestSubCategoryId[11]}`,
    )
  }

  React.useEffect(() => {
    const fetchProduct = async () => {
      await showProduct()
    }
    fetchProduct()
  }, [showProduct])

  // console.log("favorites",fav)
  return (
    <>
      <div className="LatestProducts container">
        <h5 className="heading" style={{ color: '#fff' }}>
          LATEST FASHION STYLES
        </h5>
        <CarouselSlides
          LatestProducts={LatestProducts}
          LatestProductId={LatestProductId}
          LatestCategoryId={LatestCategoryId}
          // LatestSubCategoryId={LatestSubCategoryId}
          latestProductPrices1={latestProductPrices1}
          latestProductPrices2={latestProductPrices2}
          latestProductDesc={latestProductDesc}
          latestProductName={latestProductName}
          productData={productData}
          SwitchToProductDetails1={SwitchToProductDetails1}
          SwitchToProductDetails2={SwitchToProductDetails2}
          SwitchToProductDetails3={SwitchToProductDetails3}
          SwitchToProductDetails4={SwitchToProductDetails4}
          SwitchToProductDetails5={SwitchToProductDetails5}
          SwitchToProductDetails6={SwitchToProductDetails6}
          SwitchToProductDetails7={SwitchToProductDetails7}
          SwitchToProductDetails8={SwitchToProductDetails8}
          SwitchToProductDetails9={SwitchToProductDetails9}
          SwitchToProductDetails10={SwitchToProductDetails10}
          SwitchToProductDetails11={SwitchToProductDetails11}
          SwitchToProductDetails12={SwitchToProductDetails12}
        />
      </div>
    </>
  )
}

const mapStateToprops = ({ product }) => {
  const { displayProduct } = product
  return { displayProduct }
}

export default connect(mapStateToprops, { showProduct })(Latest)
