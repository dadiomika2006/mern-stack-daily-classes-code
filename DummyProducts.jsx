import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CartContext } from "../service/CartProvider";

function DummyProducts() {
  const products = [
    {
      id: 1,
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzEHRe6qwUg__61qgldYKbyvMS6yhDdyTHLQ&s",
      title: "Cloths",
    },
    {
      id: 2,
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFHqubsxgEDlbHQy-DqJ7gpEX8Honnsv9cQ&s",
      title: "Laptops",
    },
    {
      id: 3,
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu40lyAEF3ePk1CS3swYqngcJIBufVRo1ouA&s",
      title: "Mobiles",
    },
    {
      id: 4,
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcEnHaxGDq08atEEjHNYlHsfEeHXzVw2zeOQ&s",
      title: "Shoes",
    },
  ];

  // Access context values
  const { items, addToCart } = useContext(CartContext);

  return (
    <Row xs={1} md={4} className="g-4 p-4">
      {products.map((item) => {
        // Check if the item is already in the cart
        const isPresent = items.some((product) => product.id === item.id);

        return (
          <Col key={item.id}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={item.imageSrc}
                style={{ height: "290px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                
                <div className="mt-auto">
                  <button
                    className="btn btn-warning"
                    onClick={() => addToCart(item)}
                    disabled={isPresent}
                  >
                    {isPresent ? "Added to Cart" : "Add To Cart"}
                  </button>
                  <button className="btn btn-success mx-2">Buy</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default DummyProducts;