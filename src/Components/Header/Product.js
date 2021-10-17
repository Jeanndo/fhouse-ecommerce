import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import SubMenu from '../SubMenu/SubMenu'
import ProductCard from './Card'
import SearchResultCard from './SearchResultCard'
import {
  displayProduct as sideProducts,
  displaySearchableProducts as showProduct,
} from '../../redux/action/product'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const Category = ({
  sideProducts,
  displayProduct,
  showProduct,
  searchableProduct,
}) => {
  const classes = useStyles()
  const url = window.location.href
  const path = url.split('/')
  const categoryId = path[5]
  const [searchTerm, setSearchTerm] = React.useState({ term: '' })

  React.useEffect(() => {
    const fetchProduct = async () => {
      await sideProducts()
    }
    fetchProduct()
  }, [sideProducts])

  React.useEffect(() => {
    const fetchProducts = async () => {
      await showProduct({ searchkeyword: searchTerm.term })
    }
    fetchProducts()
  }, [showProduct, searchTerm.term])

  const leftSideProducts = displayProduct?.message?.filter((product) => {
    if (
      product?.data?.isSideProduct === true &&
      product?.data?.categoryId === categoryId
    )
      return product
  })

  console.log(leftSideProducts)
  return (
    <>
      <Navigation />
      <form className="home-search-form">
        <div className="input-group search-container mt-5 home-search form-group has-search">
          <input
            type="text"
            className="form-control search-input-field"
            placeholder="Search fhouse..."
            aria-label="Search"
            aria-describedby="search-addon"
            value={searchTerm.term}
            onChange={(event) =>
              setSearchTerm({ ...searchTerm, term: event.target.value })
            }
          />
          <button
            className="btn search-btn"
            onClick={(event) => event.preventDefault()}
          >
            search
          </button>
        </div>
      </form>

      {searchTerm.term === '' ? (
        <>
          <SubMenu />
          <div className="Category-Container mb-5 ">
            <div className="Category-description">
              <p className=" category-description">
                Get mordern Products and Fashion Styles From Fhouse.
              </p>
            </div>
            <div className={`${classes.root} container`}>
              <Grid container spacing={3}>
                {leftSideProducts?.map((product, index) => {
                  return (
                    <Grid item xs={12} sm={3} key={index}>
                      <ProductCard product={product} />
                    </Grid>
                  )
                })}
              </Grid>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="search-result-Container">
            <div className={`${classes.root} container`}>
              <h5 className="discover-heading">Search Results</h5>
              <Grid container spacing={3}>
                {searchableProduct.success &&
                  searchableProduct.message.map((product, index) => {
                    return (
                      <Grid item xs={12} sm={3} key={index}>
                        <SearchResultCard product={product} />
                      </Grid>
                    )
                  })}
              </Grid>
            </div>
          </div>
        </>
      )}
      <div style={{ marginBottom: '-10%' }}>
        <Footer />
      </div>
    </>
  )
}
const mapStateToprops = ({ product }) => {
  const { searchableProduct, displayProduct } = product
  return { searchableProduct, displayProduct }
}
export default connect(mapStateToprops, { sideProducts, showProduct })(Category)
