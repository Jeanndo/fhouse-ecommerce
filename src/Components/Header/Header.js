import React from 'react'
import './sidemenu.css'
import Slider from './Slider'
import { Container, Row, Col } from 'react-bootstrap'
import Submenu from '../SubMenu/SubMenu'
//import Search from '../Search/Search'
import { Link } from 'react-router-dom'
import { displaySideCategory } from '../../redux/action/category'
import { connect } from 'react-redux'

const Header = ({ displaySideCategory, showSideCategory }) => {
  //const [searchTerm,setSearchTerm] =React.useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      await displaySideCategory()
    }

    fetchData()
  }, [displaySideCategory])

  return (
    <Container className="header_container">
      <Row>
        <Submenu />
      </Row>
      <Row className="Menu-bar-container">
        <Col xs={12}>
          <input type="checkbox" id="menu"></input>
          <label for="menu" className="menu-bar">
            <i className="fa fa-bars"></i>
          </label>
        </Col>
      </Row>
      <Row className="side-menu-container">
        <Col xs={6} md={4}>
          <div className="side-menu">
            <div className="side-menu-inner-container">
              {showSideCategory.success &&
                showSideCategory.message.map((category, index) => {
                  return (
                    <Link to={`/left/categories/${category.id}`} key={index}>
                      <span onClick={() => console.log(category.id)}>
                        {category.data.name}
                      </span>
                    </Link>
                  )
                })}
            </div>
          </div>
        </Col>
        <Col xs={12} md={8}>
          <div className="Slide-show">
            <Slider />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToprops = ({ category }) => {
  const { showSideCategory } = category
  return { showSideCategory }
}

export default connect(mapStateToprops, { displaySideCategory })(Header)
