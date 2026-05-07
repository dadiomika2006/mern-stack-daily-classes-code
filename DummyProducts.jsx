import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function DummyProducts() {
    let products=[{imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmmvGLurD0G4o1ROD-h-T3W_65DoWXoMOLg&s",title:"Clothes"},
        {
            imageSrc:"https://sm.mashable.com/mashable_in/photo/default/images-1_9uxj.jpg",title:"Laptop"},
        {
            imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ZqXP1Q-sKQDp9cXCArOQxgOzHmzHcXHzrw&s",title:"Shoes"},
        {
            imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWrC3xP8qbkm65zS4ktw67C_wlpKu3NP_vg&s",title:"mobiles"}
    ];
  return (
    <Row xs={1} md={4} className="g-4">
      {products.map((item, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={item.imageSrc} height="160px" width="100wh"/>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <button className="btm btn-warning">Add to cart</button>
              <button className="btm btn-success mx-2">Buy Now</button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default DummyProducts;