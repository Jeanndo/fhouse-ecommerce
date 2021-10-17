import React, { useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Modal } from 'antd'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const CheckoutNavigation = ({ amount, quantity, cart }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const history = useHistory()
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    history.push('/')
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <>
      <Modal
        title="Quit this ?"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p style={{ color: 'red' }}>Do you realy want to quit this?</p>
      </Modal>
      <div className="bottom-nav-container">
        <Container>
          <Navbar expand="lg" variant="light" bg="light">
            <div style={{ textAlign: 'center', width: '100%' }}>
              <Nav.Link href="#h">
                <b className="bttom-nav-cancel-btn" onClick={showModal}>
                  Cancel
                </b>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to={{
                    pathname: '/stepper',
                    state: {
                      totalAmount: amount,
                      quantity: quantity,
                      cart: cart,
                    },
                  }}
                >
                  <b className="bttom-nav-proceed-btn">Got To Check Out</b>
                </Link>
              </Nav.Link>
            </div>
          </Navbar>
        </Container>
      </div>
    </>
  )
}

export default CheckoutNavigation
