import React, { useRef, useState } from "react";
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/all-images/rental_hub_logo.png";
import "../../styles/header.css";
import { useLoggedIn } from "../../routers/LoggedInContext";
import { useCart } from "../../routers/CartContext";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/cars", display: "Cars" },
  { path: "/blogs", display: "Blog" },
  { path: "/contact", display: "Contact" },
];

const Header = () => {
  const menuRef = useRef(null);
  const { isLoggedIn, setIsLoggedIn } = useLoggedIn();
  const { cart, removeFromCart } = useCart();
  const [cartModal, setCartModal] = useState(false);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      setIsLoggedIn(false);
    }
  };

  const toggleCartModal = () => setCartModal(!cartModal);

  return (
    <header className="header">
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +1-202-555-0149
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                {!isLoggedIn ? (
                  <Link to="/login" className=" d-flex align-items-center gap-1">
                    <i className="ri-login-circle-line"></i> Login
                  </Link>
                ) : (
                  <Link to="/home" className=" d-flex align-items-center gap-1">
                    <button
                      style={{ border: "none", background: "none", cursor: "pointer" }}
                      onClick={handleLogout}
                      className="d-flex align-items-center gap-1"
                    >
                      <i className="ri-logout-circle-line"></i> Logout
                    </button>
                  </Link>
                )}
                {
                  !isLoggedIn ? (
                    <Link to="/register" className=" d-flex align-items-center gap-1">
                      <i className="ri-user-line"></i> Register
                    </Link>
                  ) : (
                    <></>
                  )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="header__middle d-flex justify-content-space-between">
        <div className="navigation__wrapper d-flex align-items-center justify-content-between flex ">
          <Container>
            <Row>
              <div className="HeaderDiv">
                <div>
                  <div>
                    <Col>
                      <div className="logo">
                        <img src={logo} alt="logo" className="logo_img" />
                      </div>
                    </Col>
                  </div>

                  <div>
                    <Col>
                      <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <div className="menu">
                          {navLinks.map((item, index) => (
                            <NavLink
                              to={item.path}
                              className={(navClass) =>
                                navClass.isActive ? "nav__active nav__item" : "nav__item"
                              }
                              key={index}
                            >
                              {item.display}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </Col>
                  </div>
                </div>

                <div>
                  <div className="nav__right d-flex align-items-center" style={{ marginRight: "5rem" }}>
                    <Col>
                      <div className="nav__right d-flex align-items-center gap-3">
                        {
                          isLoggedIn ? (
                            <button className="header__btn btn text-white d-flex align-items-center" onClick={toggleCartModal}>
                              <i className="ri-shopping-cart-line"></i>Cart({cart.length})
                            </button>
                          ) :
                            (
                              <></>
                            )
                        }
                        <div className="search__box">
                          <input type="text" placeholder="Search" />
                          <span>
                            <i className="ri-search-line"></i>
                          </span>
                        </div>
                      </div>
                    </Col>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>

      <Modal isOpen={cartModal} toggle={toggleCartModal}>
        <ModalHeader toggle={toggleCartModal}>Your Cart</ModalHeader>
        <ModalBody>
          {cart.length > 0 ? (
            cart.map((car, index) => (
              <div key={index} className="d-flex justify-content-between align-items-center mb-3">
                <img src={car.imgUrl} alt={car.carName} style={{ width: "50px" }} />
                <span>{car.carName}</span>
                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(car.carName)}>Remove</button>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleCartModal}>Close</Button>
          <Button color="primary" onClick={() => { /* handle checkout */ }}>Checkout</Button>
        </ModalFooter>
      </Modal>
    </header>
  );
};

export default Header;
