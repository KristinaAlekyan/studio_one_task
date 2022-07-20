import "../Login/login.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

import { authSelector, logedin } from "../../redux/userSlice";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const isAuth = useSelector(authSelector);

    const validateForm = () => {
        return (username.length > 0 && password.length > 0)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            username: username,
            password: password,
            token: "11111"
        }
        const user = dispatch(logedin(data));
        if (user.payload && user.payload.token) {
            localStorage.setItem('token', user.payload.token);
            localStorage.setItem('autorized', true);
        }
    }

    if (isAuth) {
        navigate('/profile')
    }

    return (
        <div className="login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="on"
                    />
                </Form.Group>
                <button className="loginButton" block="true" size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </button>
            </Form>
        </div>
    );
}

export default Login
