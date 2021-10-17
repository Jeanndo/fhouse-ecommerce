import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { createOrder as order } from '../../redux/action/order'
import { connect } from 'react-redux'
import { message } from 'antd'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 50,
    },
  },
}))

const CheckOut = ({ order, createOrder, amount, quantity, cart }) => {
  const classes = useStyles()
  const [orderInfo, setOrderInfo] = useState({
    fName: '',
    lName: '',
    phone: '',
    email: '',
    province: '',
    district: '',
    sector: '',
    cell: '',
    village: '',
  })

  const [paymentMethod, setPaymentMethod] = useState('')
  const [open, setOpen] = useState(false)

  const googleuser = JSON.parse(localStorage.getItem('Googleprofile'))

  const firebaseUser = JSON.parse(localStorage.getItem('Firebaseprofile'))

  let email = ''

  if (googleuser != null) {
    email = googleuser?.data.result?.email
  } else if (firebaseUser != null) {
    email = firebaseUser?.user?.user?.email
  }

  console.log(email)
  const handleChange = (event) => {
    setPaymentMethod(event.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (
      orderInfo.fName === '' ||
      orderInfo.lName === '' ||
      orderInfo.phone === '' ||
      orderInfo.email === '' ||
      orderInfo.province === '' ||
      orderInfo.district === '' ||
      orderInfo.sector === '' ||
      orderInfo.cell === '' ||
      orderInfo.village === ''
    ) {
      message.error('Invalid Data !!! 👎')
    } else {
      await order(
        {
          fName: orderInfo.fName,
          lName: orderInfo.lName,
          phone: orderInfo.phone,
          email: orderInfo.email,
          province: orderInfo.province,
          district: orderInfo.district,
          sector: orderInfo.sector,
          cell: orderInfo.cell,
          village: orderInfo.village,
          amount: amount,
          quantity: quantity,
          userEmail: email,
          cart: cart,
        },
        paymentMethod,
      )
      clearOrder()
    }
  }

  React.useEffect(() => {
    if (createOrder.error) {
      message.error(createOrder.error)
    }
    if (createOrder.success) {
      message.success('Submitted Successfully !!! 👍')
    }
  }, [createOrder])

  const clearOrder = () => {
    setOrderInfo({
      fName: '',
      lName: '',
      phone: '',
      email: '',
      province: '',
      district: '',
      sector: '',
      cell: '',
      village: '',
    })
  }
  console.log(paymentMethod)

  const Amount = JSON.parse(localStorage.getItem('amount'))
  console.log(Amount)

  return (
    <>
      <div className="checkout-container  container">
        <form
          className={`${classes.root} checkout-form`}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="filled-basic1"
            label="First Name"
            variant="outlined"
            required
            value={orderInfo.fName}
            onChange={(event) =>
              setOrderInfo({ ...orderInfo, fName: event.target.value })
            }
            className="input-form"
          />
          <TextField
            id="outlined-basic2"
            label="Last Name"
            variant="outlined"
            required
            value={orderInfo.lName}
            onChange={(event) =>
              setOrderInfo({ ...orderInfo, lName: event.target.value })
            }
            className="input-form"
          />
          <TextField
            id="standard-basic3"
            label="Phone"
            variant="outlined"
            type="number"
            required
            value={orderInfo.phone}
            onChange={(event) =>
              setOrderInfo({ ...orderInfo, phone: event.target.value })
            }
            className="input-form"
          />
          <TextField
            id="standard-basic4"
            label="Email Address"
            variant="outlined"
            type="email"
            required
            value={orderInfo.email}
            onChange={(event) =>
              setOrderInfo({ ...orderInfo, email: event.target.value })
            }
            className="input-form"
          />

          <TextField
            id="filled-basic5"
            label="Province"
            variant="outlined"
            required
            value={orderInfo.province}
            onChange={(event) =>
              setOrderInfo({ ...orderInfo, province: event.target.value })
            }
            className="input-form"
          />

          <TextField
            id="outlined-basic6"
            label="District"
            variant="outlined"
            required
            value={orderInfo.district}
            onChange={(event) =>
              setOrderInfo({ ...orderInfo, district: event.target.value })
            }
            className="input-form"
          />

          <TextField
            id="standard-basic7"
            label="Sector"
            variant="outlined"
            required
            value={orderInfo.sector}
            onChange={(event) =>
              setOrderInfo({ ...orderInfo, sector: event.target.value })
            }
            className="input-form"
          />

          <TextField
            id="outlined-basic8"
            label="Cell"
            variant="outlined"
            required
            value={orderInfo.cell}
            onChange={(event) =>
              setOrderInfo({ ...orderInfo, cell: event.target.value })
            }
            className="input-form"
          />
          <TextField
            id="standard-basic9"
            label="Village"
            variant="outlined"
            required
            value={orderInfo.village}
            onChange={(event) =>
              setOrderInfo({ ...orderInfo, village: event.target.value })
            }
            className="input-form"
          />

          <FormControl className={`${classes.formControl} input-form`}>
            <InputLabel id="demo-controlled-open-select-label">
              Payment Method
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={paymentMethod}
              onChange={handleChange}
            >
              <MenuItem value={'Debit Card'}>Debit Card</MenuItem>
              <MenuItem value={'Credit Card'}>Credit Card</MenuItem>
              <MenuItem value={'PayPal'}>PayPal</MenuItem>
              <MenuItem value={'MoMo'}>MoMo</MenuItem>
            </Select>
          </FormControl>
          <Button
            className="input-form"
            variant="outlined"
            style={{
              color: '#000',
              width: '10%',
              marginTop: '2%',
            }}
            type="submit"
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </>
  )
}
const mapStateToprops = ({ order }) => {
  const { createOrder } = order
  return { createOrder }
}
export default connect(mapStateToprops, { order })(CheckOut)
