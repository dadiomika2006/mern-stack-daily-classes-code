import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { CartContext } from "../service/CartProvider";

function NavBar() {
  return (
    <Navbar expand="lg" id='nav-container'>
      <Container>
        <Navbar.Brand href="/home">Alpha Mart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="/products">View Products</NavDropdown.Item>
              <NavDropdown.Item href="">
                Edit Products 
              </NavDropdown.Item>
              <NavDropdown.Item href="">Delete Product</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">
                View Users
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
function NavBar(authenticated) {
  const { items } = useContext(CartContext);
  

  

      <button id='login-btn' className='btn btn-primary'>

            <Link to="/login">Login</Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-door-open-fill" viewBox="0 0 16 16">
  <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15zM11 2h.5a.5.5 0 0 1 .5.5V15h-1zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"/>
</svg>
      </button>
    </Navbar>
  return (
    <div id="navbar-container" style={{position:"sticky",top:"0px",zIndex:"3"}}>
      <Navbar expand="lg" id="nav-container">
        <Container>
          <Navbar.Brand>
            <Link id="brand-name" to="/">Alpha Mart</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                {" "}
                <Link to="/home">Home</Link>
              </Nav.Link>
              <Nav.Link >
                <Link to="/register">Register</Link>
              </Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/products">View Products</Link>
                  
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <Link to="">Edit Products</Link></NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/cart">Cart Products</Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <Link to="">Delete Product</Link>
                  </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >
                  <Link to=" ">View Users</Link>
                  </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>

        <button id="login-btn" className="btn btn-primary">
          <Link to="/login">Login</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-box-arrow-in-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
            />
            <path
              fill-rule="evenodd"
              d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
            />
          </svg>
        </button>
        <button id="cart-btn">
          <Link to="/cart">
          Cart {items.length}
          </Link>
        </button>
      </Navbar>
    </div>
  );
}

