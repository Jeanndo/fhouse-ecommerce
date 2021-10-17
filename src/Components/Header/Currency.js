import React from 'react'
import { displayCurrency as currencyData } from '../../redux/action/currency'
import { connect } from 'react-redux'
import Marquee from 'react-fast-marquee'

const Currency = ({ currencyData, displayCurrency }) => {
  React.useEffect(() => {
    const fetchCurrency = async () => {
      await currencyData()
    }
    fetchCurrency()
  }, [currencyData])

  return (
    <>
      {displayCurrency.success &&
        displayCurrency.message.map((currency, index) => {
          return (
            <div className="currency-container" key={index}>
              <Marquee direction="left">
                <p style={{ color: 'white' }}>
                  1 FRW = {currency.data.rmb}&nbsp; RMB
                </p>
              </Marquee>
              <Marquee direction="right">
                <p style={{ color: 'white' }}>
                  1 YUAN = {currency.data.rw}&nbsp; FRW
                </p>{' '}
              </Marquee>
            </div>
          )
        })}
    </>
  )
}

const mapStateToprops = ({ currency }) => {
  const { displayCurrency } = currency
  return { displayCurrency }
}
export default connect(mapStateToprops, { currencyData })(Currency)
