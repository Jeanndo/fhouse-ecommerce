import React, { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Avatar, Badge } from "antd";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../config/auth";
import UserPic from "../../Assets/Necessary/user.png";
import Logo from "../../Assets/Necessary/fhouse_logo.png";
import { useHistory } from "react-router-dom";

const Navigation = ({ cart, wishlist }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const history = useHistory();

  const [cartCount, setCartCount] = useState(0);
  const [favoCount, setFavoCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((element) => {
      count += element.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  useEffect(() => {
    let favo = 0;
    wishlist.forEach((element) => {
      favo += element.qty;
    });
    setFavoCount(favo);
  }, [wishlist, favoCount]);

  const [googleuser, setGoogleUser] = React.useState(
    JSON.parse(localStorage.getItem("Googleprofile"))
  );

  const [firebaseUser, setFirebaseUser] = React.useState(
    JSON.parse(localStorage.getItem("Firebaseprofile"))
  );

  let user;

  if (googleuser != null) {
    user = googleuser;
  } else if (firebaseUser != null) {
    user = firebaseUser;
  }

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  const menu1 = (
    <Menu>
      <Menu.Item>
        <Link to={{ pathname: "/profile", isApproved: true }}> My Profile</Link>
      </Menu.Item>
      <Menu.Item>
        <i
          onClick={() => {
            auth.signOut();
            localStorage.clear();
            setFirebaseUser(null);
            setGoogleUser(null);
            history.push("/");
          }}
        >
          Logout
        </i>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className={scrolled ? "scrolled" : "quick-navBar"}>
        <div className="container-fluid">
          <Navbar expand="lg" className="over-all-nav-container">
            <Navbar.Brand>
              <Link to="/">
                <div className="fhouse-logo-container">
                  <img className="fhouse_logo" src={Logo} alt="fhouselogo" />
                </div>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="navtogglebtn"
            />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="text-center custom-collapse "
            >
              <div className="w-100 nav-items-container">
                <ol style={{ listStyle: "none" }}>
                  <li style={{ display: "inline" }}>
                    <Link
                      to="/cart"
                      style={{
                        display: "inline",
                        paddingRight: "5%",
                        color: "#213e5e",
                      }}
                    >
                      <b className="navigation-items">My Cart</b>
                      &nbsp;
                      <span className="avatar-item">
                        <Badge
                          count={cartCount}
                          style={{ backgroundColor: "#213e5e" }}
                        >
                          <Avatar
                            shape="circle"
                            icon={
                              <ShoppingCartIcon style={{ color: "#213e5e" }} />
                            }
                          />
                        </Badge>
                      </span>
                    </Link>
                  </li>
                  <li style={{ display: "inline" }}>
                    <Link
                      to="/wishlist"
                      style={{
                        display: "inline",
                        color: "#213e5e",
                        paddingRight: "5%",
                      }}
                    >
                      <b className="navigation-items">
                        WishList&nbsp;
                        <span className="avatar-item">
                          <Badge
                            count={favoCount}
                            style={{ backgroundColor: "#213e5e" }}
                          >
                            <Avatar
                              shape="circle"
                              icon={
                                <FavoriteIcon style={{ color: "#213e5e" }} />
                              }
                            />
                          </Badge>
                        </span>
                      </b>
                    </Link>
                  </li>
                  {/* <li style={{ display: 'inline', paddingRight: '5%' }}>
                    <Link
                      to="/notification"
                      style={{ display: 'inline', color: '#000' }}
                    >
                      Get Notified{' '}
                      <span className="avatar-item">
                        <Badge count={0} style={{ backgroundColor: '#213e5e' }}>
                          <Avatar
                            shape="circle"
                            icon={
                              <NotificationsActiveIcon
                                style={{ color: '#213e5e' }}
                              />
                            }
                          />
                        </Badge>
                      </span>
                    </Link>
                  </li> */}
                  <li style={{ display: "inline", paddingRight: "5%" }}>
                    {!user ? (
                      <Link to="/auth" style={{ color: "#213e5e" }}>
                        <b className="navigation-items">
                          <svg
                            width={50}
                            height={30}
                            className="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path>
                          </svg>
                          &nbsp; SignIn /Join For Free
                        </b>
                      </Link>
                    ) : (
                      <>
                        <b className="navigation-items">
                          {googleuser?.data?.result?.displayName}
                        </b>{" "}
                        <Avatar
                          size={30}
                          icon={
                            firebaseUser ? (
                              <img alt="user" src={UserPic} />
                            ) : (
                              <img
                                src={googleuser?.data?.result?.photoURL}
                                alt="user-profile"
                                style={{ cursor: "pointer" }}
                              />
                            )
                          }
                        />
                        <li style={{ display: "inline", marginLeft: "20px" }}>
                          <Dropdown overlay={menu1}>
                            <a
                              href="/"
                              className="ant-dropdown-link"
                              onClick={(e) => e.preventDefault()}
                              style={{ color: "#213e5e" }}
                            >
                              <b>Settings</b>
                              <DownOutlined />
                            </a>
                          </Dropdown>
                        </li>
                      </>
                    )}
                  </li>
                  {/* <li style={{ display: 'inline' }}>
                    <Dropdown overlay={menu}>
                      <a
                        href="/"
                        className="ant-dropdown-link"
                        onClick={(e) => e.preventDefault()}
                        style={{ color: '#213e5e' }}
                      >
                        Currency <DownOutlined />
                      </a>
                    </Dropdown>
                  </li> */}
                </ol>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </>
  );
};
const mapStateToprops = (state) => {
  return {
    cart: state.shopping.cart,
    wishlist: state.wishlist.favorites,
  };
};
export default connect(mapStateToprops)(Navigation);
