import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Added missing import
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure CSS is imported

const Login = () => {
    const navigate = useNavigate();
    
    const [loginDetails, setLoginDetails] = useState({
        username: "",
        password: "",
        otp: "",
    });

    const [mailOtp, setMailOtp] = useState(null); // Consolidated duplicate state

    const handleLogin = (e) => {
        e.preventDefault(); // Moved to top of handler
        try {
            // Check if OTP matches and password isn't empty
            if (mailOtp && String(mailOtp) === String(loginDetails.otp) && loginDetails.password.trim() !== "") {
                toast.success("Login Successful");
                localStorage.setItem("token", "234asdfgfdf");
                
                setTimeout(() => {
                    navigate("/home");
                }, 2000);
            } 
            else if (mailOtp && String(mailOtp) !== String(loginDetails.otp)) {
                toast.warn("Invalid OTP");
            } 
            else {
                toast.error("Failed to login. Please check your credentials and OTP.");
            }
        } catch (err) {
            console.error(err);
        }
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
        setMailOtp(null);
    };

    const generateOtp = async () => {
        try {
            const generatedOtp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
            const time = new Date();
            // Simple logic for expiry string
            const expiredTime = `${time.getHours()}:${time.getMinutes() + 15}`;

            setMailOtp(generatedOtp);

            const formData = {
                email: loginDetails.username,
                otp: generatedOtp,
                time: expiredTime,
            };

            await emailjs.send(
                "service_u7o75tp",
                "template_87ulgei",
                formData,
                "BIOtf_Gzs0XNpkHLR"
            );
            toast.success("OTP sent to your email successfully");
        } catch (err) {
            console.error(err);
            toast.error("Failed to generate OTP");
        }
    };

    return (
        <div id="form-container" className="container mt-5">
            <Form onSubmit={handleLogin}>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Username (Email):</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="enter email" 
                            name="username" 
                            onChange={handleChange} 
                            value={loginDetails.username} 
                            required 
                        />
                    </Form.Group>
                </Row>
                
                <Row className="my-2">
                    <Form.Group as={Col}>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control 
                            type="password" 
                            name="password" 
                            placeholder="password" 
                            onChange={handleChange} 
                            value={loginDetails.password} 
                            required 
                        />
                    </Form.Group>
                </Row>

                <Row className="align-items-end">
                    <Col md={4}>
                        <button 
                            onClick={generateOtp} 
                            type='button' 
                            className="btn btn-secondary w-100"
                            disabled={!loginDetails.username}
                        >
                            Generate OTP
                        </button>
                    </Col>
                    <Col md={8}>
                        <Form.Control 
                            type="number" 
                            placeholder="enter otp" 
                            name="otp" 
                            onChange={handleChange} 
                            value={loginDetails.otp} 
                        />
                    </Col>
                </Row>

                <Row className="my-4">
                    <Col>
                        <button type='submit' className="btn btn-info w-100">Login</button>
                    </Col>
                    <Col>
                        <button onClick={handleReset} type='button' className="btn btn-warning w-100">Reset</button>
                    </Col>
                </Row>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Login;