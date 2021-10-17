import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import ProductCard from './ProductCard'
import { displayProduct as showProduct } from '../../redux/action/product'

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

const DiscoverMore = ({ showProduct, displayProduct }) => {
  const classes = useStyles()

  React.useEffect(() => {
    const fetchProduct = async () => {
      await showProduct()
    }
    fetchProduct()
  }, [showProduct])

  return (
    <div className="AllProducts-Container">
      <div className={`${classes.root} container`}>
        <h5 className="discover-heading">Discover more</h5>
        <Grid container spacing={3}>
          {displayProduct?.success &&
            displayProduct?.message.map((product, index) => {
              return (
                <Grid item xs={12} sm={3} key={index}>
                  <ProductCard product={product} />
                </Grid>
              )
            })}
        </Grid>
      </div>
    </div>
  )
}
const mapStateToprops = ({ product }) => {
  const { displayProduct } = product
  return { displayProduct }
}
export default connect(mapStateToprops, { showProduct })(DiscoverMore)
