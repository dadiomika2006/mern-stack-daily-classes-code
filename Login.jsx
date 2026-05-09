import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emailjs from '@emailjs/browser';


export const Login = () => {
  const [loginDetails, setLoginDetails] = React.useState({
    username: "",
    password: "",
    otp: ""
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginDetails);
  };

  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setLoginDetails({
      username: "",
      password: "",
      otp: ""
    });
  };

 const generateOtp = () => {
  try{
    let generatedOtp = Math.floor(100000 + Math.random() * 900000);
    let time = new Date();
    time.setMinutes(time.getMinutes() + 15);
    
    let expiredTime = `${time.getHours()}:${time.getMinutes()}:00`;
    let formData= {
        email: loginDetails.username,
        time: expiredTime,
        otp: generatedOtp,
    }
    await emailjs.send(
      "service_0zqil2g",
      "template_ga8m4ia",
      formData,
      {publicKey:"veb7MZkI_fgbqt2nT"}
    );

    toast.success("otp is send to your mail successfully")

    console.log("OTP Sent:", generatedOtp);
  } catch (err) {
    console.log(err);
    toast.error("failed  to generate otp")
  }
};


  return (
    <div id="form-container">
      <Form onSubmit={handleLogin}>

        <Row>
          <Form.Group>
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="username"
              onChange={handleChange}
              value={loginDetails.username}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
              value={loginDetails.password}
            />
          </Form.Group>
        </Row>

        <Row className="my-2">
          <Col className="my-2">
            <Button type="button" className="btn btn-info" onClick={generateOtp}>
              Generate OTP
            </Button>
          </Col>
          <Col className="my-2">
            <Form.Control
              type="number"
              name="otp"
              placeholder="Enter OTP"
              onChange={handleChange}
              value={loginDetails.otp}
              className="no-spinner"
              
            />
          </Col>
        </Row>

        <Row className="my-2">
          <Col><Button type="submit">Sign In</Button></Col>
          <Col>
            <Button className="btn btn-warning" type="button" onClick={handleReset}>
              Reset
            </Button>
          </Col>
        </Row>

      </Form>
    </div>
  );
};

export default Login;