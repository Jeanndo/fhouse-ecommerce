import React from 'react'
import Navigation from '../Navigation/Navigation'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ZoomInIcon from '@material-ui/icons/ZoomIn'
import ZoomOutIcon from '@material-ui/icons/ZoomOut'
import { Input, message } from 'antd'
import Footer from '../Footer/Footer'
import { List } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { TextField } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ProductCard from '../DicoverMore/ProductCard'
import DetailsCard from './Details'

import {
  displayProduct as showProduct,
  createProductReview,
  displayProductReview as Review,
} from '../../redux/action/product'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const { TextArea } = Input
const data = [
  {
    title: 'Jeanndo',
  },
]

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

const ProductDetails = ({
  showProduct,
  displayProduct,
  createReview,
  createProductReview,
  Review,
  displayReview,
}) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [review, setReview] = React.useState({ review: '', name: '' })

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  let productId, subCategoryId

  const url = window.location.href
  productId = url.split('/')[4]
  //categoryId = url.split('/')[5]
  subCategoryId = url.split('/')[6]

  React.useEffect(() => {
    const fetchDetailedProduct = async () => {
      await showProduct()
    }
    fetchDetailedProduct()
  }, [showProduct])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (review.review === '' || review.name === '') {
      message.error("Can't submit Empty Review 😞")
    } else {
      await createProductReview(
        { review: review.review, name: review.name },
        productId,
      )
    }
    clearReview()
  }

  const clearReview = () => {
    setReview({ review: '', name: '' })
  }
  React.useEffect(() => {
    if (createReview.error) {
      message.error(createReview.error)
    }
  }, [createReview])

  React.useEffect(() => {
    const fetchReviews = async () => {
      await Review()
    }

    fetchReviews()
  }, [Review])

  const productUnderSubcategory = displayProduct?.message?.filter(
    (product) => product?.data?.subCategoryId === subCategoryId,
  )

  return (
    <>
      <Navigation />
      <div className="Product-details-container">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <h5 style={{ marginLeft: '3%' }}>
                <b className="zoomdragmsg">Zoom & Drag Image</b>
              </h5>
              <div className="Zoom-in-Zoom-out-container mb-4">
                <TransformWrapper
                  defaultScale={1}
                  defaultPositionX={300}
                  defaultPositionY={100}
                >
                  {({ zoomIn, zoomOut, ...rest }) => (
                    <>
                      <TransformComponent>
                        {productUnderSubcategory
                          ?.slice(0, 1)
                          .map((product, index) => {
                            return (
                              <img
                                key={index}
                                className="product-details-image"
                                alt="product-details"
                                src={product.data.imageUrl}
                              />
                            )
                          })}
                      </TransformComponent>

                      <div className="zoomIn-zoomOut-btn">
                        <Button
                          variant="outlined"
                          color="primary"
                          style={{
                            marginRight: '3%',
                            marginLeft: '10%',
                          }}
                          onClick={zoomIn}
                        >
                          <ZoomInIcon />
                        </Button>
                        <Button
                          variant="outlined"
                          style={{ marginRight: '3%' }}
                          onClick={zoomOut}
                        >
                          <ZoomOutIcon />
                        </Button>
                      </div>
                    </>
                  )}
                </TransformWrapper>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              {productUnderSubcategory?.slice(0, 1).map((product, index) => {
                return (
                  <div className="product-details" key={index}>
                    <DetailsCard product={product} />
                  </div>
                )
              })}
            </Grid>
          </Grid>
        </div>
        <div className="mt-2">
          <div className={classes.root}>
            <AppBar position="static" elevation={1} color="inherit">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
                indicatorColor="primary"
              >
                <Tab label="Description" {...a11yProps(0)} />
                <Tab label="Review" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <>
                <h5>
                  <b>Specifications</b>
                </h5>

                {productUnderSubcategory?.slice(0, 1).map((product, index) => {
                  return (
                    <div className="decription-container" key={index}>
                      <div className="mt-3">
                        <p>{product.data.name}</p>
                      </div>
                      <div className="mt-3">
                        <p>{product.data.description}</p>
                      </div>
                      <div>
                        <p>Color:&nbsp; {product?.data?.color}</p>
                        <p>Size:&nbsp; {product?.data?.size}</p>
                      </div>
                      <div>
                        <p>Sold by FhouseStores</p>
                      </div>
                    </div>
                  )
                })}

                <h5 className="mt-5 mb-4">
                  <b>Related Products</b>
                </h5>
                <hr style={{ backgroundColor: '#213e5e', marginTop: '-2px' }} />
                <Grid container spacing={3}>
                  {productUnderSubcategory?.map((product, index) => {
                    return (
                      <Grid item xs={12} sm={3} key={index}>
                        <ProductCard product={product} />
                      </Grid>
                    )
                  })}
                </Grid>
              </>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <>
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        description={
                          <>
                            {displayReview.success &&
                              displayReview.message.map((review, index) => {
                                return (
                                  <p key={index}>
                                    <b>
                                      {review.data.productId === productId &&
                                        review.data.name}{' '}
                                    </b>
                                    {review.data.productId === productId &&
                                      review.data.reviews}
                                  </p>
                                )
                              })}
                          </>
                        }
                      />
                    </List.Item>
                  )}
                />
                <div className="client-reviews">
                  <h5>
                    <b>Write Your Review for this Product.</b>
                  </h5>
                  <p>
                    <b>Your Review</b>
                  </p>
                  <form
                    form
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                  >
                    <TextField
                      style={{ width: '100%', marginBottom: '10px' }}
                      id="standard-secondary"
                      label="Your Name Please"
                      required={true}
                      value={review.name}
                      onChange={(event) =>
                        setReview({ ...review, name: event.target.value })
                      }
                    />
                    <TextArea
                      rows={8}
                      value={review.review}
                      onChange={(event) =>
                        setReview({ ...review, review: event.target.value })
                      }
                    />
                    <Button
                      type="submit"
                      variant="outlined"
                      color="primary"
                      style={{ float: 'right', marginTop: '2px' }}
                    >
                      Submit
                    </Button>
                  </form>
                </div>
                <h5 className="mt-5 mb-4">
                  <b>Related Products</b>
                </h5>
                <hr style={{ backgroundColor: '#213e5e', marginTop: '-2px' }} />
                <Grid container spacing={3}>
                  {productUnderSubcategory?.map((product, index) => {
                    return (
                      <Grid item xs={12} sm={3} key={index}>
                        <ProductCard product={product} />
                      </Grid>
                    )
                  })}
                </Grid>
              </>
            </TabPanel>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

const mapStateToprops = ({ product }) => {
  const { displayProduct, createReview, displayReview } = product
  return { displayProduct, createReview, displayReview }
}
export default connect(mapStateToprops, {
  showProduct,
  createProductReview,
  Review,
})(ProductDetails)
