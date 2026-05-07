import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Login from './Login';
import { useState } from 'react';
import { toast , ToastContainer } from 'react-toastify';

function Register() {
const[details,setDetails]=useState(
 { name : "" ,
  email : "" ,
  phone : "",
  password : "" ,
  city : "" ,
  address : "" ,
  state : "" ,
  zipCode : ""
});
const handleChange=(e)=>{
  setDetails({...details,[e.target.name]:e.target.value})
}
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(details);
  toast.success("Register successfully");
}

  return (
    <div id="form-container">
      <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleChange} placeholder="Enter Full Name" required/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control name="phone" onChange={handleChange} type="tel"  placeholder="Phone number" maxLength={10} required/>
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" onChange={handleChange} type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Create Password</Form.Label>
          <Form.Control name="password" onChange={handleChange} type="password" placeholder="Password" required/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control name="address" onChange={handleChange} placeholder="1234 Main St" required/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control name="city" onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select name="state" onChange={handleChange} defaultValue="Choose...">
            <option>Choose State..</option>
            <option value="Andhara pradesh">AP</option>
            <option value="Karanataka">KA</option>
            <option value="Telangana">TL</option>
            <option value="Tamil nadu">TN</option>
            <option value="Madhyapradesh">MP</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip" required>
          <Form.Label>Zip</Form.Label>
          <Form.Control name="zipCode" onChange={handleChange}/>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <span>If You Already Register Click here to {" "}
          <a href='/login'>login</a>
          </span>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      <ToastContainer/>  
    </div>
  )
}

export default Register