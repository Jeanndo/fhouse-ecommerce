import React from 'react'
import Navigation from '../Navigation/Navigation'
import LatestProduct from '../LatestProducts/Latest'
import DiscoverMore from '../DicoverMore/Discover'
import Footer from '../Footer/Footer'
import Stock from '../Stock/Stock'
import Header from '../Header/Header'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Discounted from '../DiscountedProducts/Discounted'
import { displaySearchableProducts as showProduct } from '../../redux/action/product'
import SubMenu from '../SubMenu/SubMenu'
import ProductCard from './ProductCard'

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

const Home = ({ showProduct, searchableProduct }) => {
  const classes = useStyles()
  const [searchTerm, setSearchTerm] = React.useState({ term: '' })

  React.useEffect(() => {
    const fetchProducts = async () => {
      await showProduct({ searchkeyword: searchTerm.term })
    }
    fetchProducts()
  }, [showProduct, searchTerm.term])

  //console.log(searchTerm.term)

  return (
    <div className="landing-container">
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
          {/* <span className="fa fa-search form-control-feedback search-icon"></span> */}
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
          <Header />
          <LatestProduct />
          <DiscoverMore />
          <Discounted />
          <Stock />
        </>
      ) : (
        <>
          <SubMenu />
          <div className="search-result-Container">
            <div className={`${classes.root} container`}>
              <h5 className="discover-heading">Search Results</h5>
              <Grid container spacing={3}>
                {searchableProduct.success &&
                  searchableProduct.message.map((product, index) => {
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
      )}
      <Footer />
    </div>
  )
}
const mapStateToprops = ({ product }) => {
  const { searchableProduct } = product
  return { searchableProduct }
}
export default connect(mapStateToprops, { showProduct })(Home)
