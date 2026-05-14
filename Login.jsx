import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
    otp: "",
  });

  const navigate = useNavigate();
  const [mailOtp, setMailOtp] = useState("");

  // Function to fetch input values
  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  // Form reset function
  const handleReset = () => {
    setLoginDetails({
      username: "",
      password: "",
      otp: "",
    });
    setMailOtp("");
  };

  // Function to generate otp and send to mail
  const generateOtp = async () => {
    try {
      if (!loginDetails.username) {
        return toast.warn("Please enter your email first");
      }

      let generatedOtp = Math.floor(100000 + Math.random() * 900000); // 6 digit OTP
      let time = new Date();
      // Simple logic for expiration time display
      let expiredTime = `${time.getHours()}:${time.getMinutes() + 15}:00`;
      setMailOtp(generatedOtp);

      let formData = {
        email: loginDetails.username,
        otp: generatedOtp,
        time: expiredTime,
      };

      // Fixed the syntax error here: removed duplicate/unclosed call
      await emailjs.send(
        "service_9l1dihp", 
        "template_7bth6c8", 
        formData, 
        { publicKey: "N3xga7GAtw352Ac-q" }
      );

      toast.success("OTP sent to your mail successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to generate OTP");
    }
  };

  // Function to handle form submit
  const handleLogin = (e) => {
    e.preventDefault();
    try {
      // Fixed the syntax error: merged the duplicate 'if' statements
      if (
        mailOtp !== "" &&
        mailOtp.toString() === loginDetails.otp.toString() &&
        loginDetails.password !== ""
      ) {
        toast.success("Login successful");
        localStorage.setItem("token", "241sadgghs3546adDh");
        setTimeout(() => {
          navigate("/home");
        }, 3000);
      } else if (mailOtp.toString() !== loginDetails.otp.toString()) {
        toast.warn("Invalid OTP");
      } else {
        toast.error("Failed to login. Please check your password.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="form-container" className="container mt-5">
      <Form onSubmit={handleLogin}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="username"
              onChange={handleChange}
              value={loginDetails.username}
              required
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              value={loginDetails.password}
              required
            />
          </Form.Group>
        </Row>
        <Row className="my-2 align-items-end">
          <Col>
            <Button
              type="button"
              onClick={generateOtp}
              variant="info"
              className="w-100"
            >
              Generate OTP
            </Button>
          </Col>
          <Col>
            <Form.Control
              type="number"
              name="otp"
              placeholder="Enter OTP"
              onChange={handleChange}
              value={loginDetails.otp}
            />
          </Col>
        </Row>
        {/* Button row */}
        <Row className="my-3">
          <Col>
            <Button type="submit" variant="primary" className="w-100">
              SignIn
            </Button>
          </Col>
          <Col>
            <Button
              onClick={handleReset}
              type="button"
              variant="warning"
              className="w-100"
            >
              Reset
            </Button>
          </Col>
        </Row>
      </Form>

      <ToastContainer />
    </div>
  );
};

export default Login;