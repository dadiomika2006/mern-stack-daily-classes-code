import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { CartContext } from "../service/CartProvider";

function NavBar() {
  const { items } = useContext(CartContext);

  return (
    <div id="navbar-container" style={{ position: "sticky", top: "0px", zIndex: "3" }}>
      <Navbar expand="lg" id="nav-container" bg="light" variant="light">
        <Container>
          {/* Use 'as={Link}' to avoid nested anchor tags */}
          <Navbar.Brand as={Link} to="/home" id="brand-name">
            Alpha Mart
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/products">
                  View Products
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/edit-products">
                  Edit Products
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cart">
                  Cart Products
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/delete-product">
                  Delete Product
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/view-users">
                  View Users
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* Buttons grouped at the end of the collapse */}
            <div className="d-flex align-items-center gap-2">
              <Link to="/login" id="login-btn" className="btn btn-primary d-flex align-items-center gap-1">
                Login
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-box-arrow-in-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                  />
                </svg>
              </Link>

              <Link to="/cart" id="cart-btn" className="btn btn-outline-dark">
                Cart ({items ? items.length : 0})
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;