import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import SubMenu from '../SubMenu/SubMenu'
import ProductCard from './Card'
import SearchCard from './SearchCard'
import {
  displayProduct as showProduct,
  displaySearchableProducts as searchedResults,
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
  showProduct,
  displayProduct,
  searchedResults,
  searchableProduct,
}) => {
  const classes = useStyles()
  const url = window.location.href
  const path = url.split('/')
  const subCategoryId = path[5]
  const [searchTerm, setSearchTerm] = React.useState({ term: '' })

  console.log('path:', subCategoryId)

  React.useEffect(() => {
    const fetchProduct = async () => {
      await showProduct()
    }
    fetchProduct()
  }, [showProduct])

  React.useEffect(() => {
    const fetchProducts = async () => {
      await searchedResults({ searchkeyword: searchTerm.term })
    }
    fetchProducts()
  }, [searchedResults, searchTerm.term])

  const productUnderSubcategory = displayProduct?.message?.filter(
    (product) => product?.data?.subCategoryId === subCategoryId,
  )

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
                {productUnderSubcategory?.map((product, index) => {
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
                        <SearchCard product={product} />
                      </Grid>
                    )
                  })}
              </Grid>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  )
}
const mapStateToprops = ({ product }) => {
  const { displayProduct, searchableProduct } = product
  return { displayProduct, searchableProduct }
}
export default connect(mapStateToprops, { showProduct, searchedResults })(
  Category,
)
