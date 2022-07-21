import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from 'uuid'

import "../Login/login.css";
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
            token: uuidv4()
        }

        const user = dispatch(logedin(data));

        if (user && isAuth) {
            localStorage.setItem('token', user.payload.token);
            localStorage.setItem('authorized', true);
            localStorage.setItem('username', user.payload.username);
            navigate('/profile')
            //reload I wrote because when I didn't write, it didn't update at once, it couldn't read from localstorige?
            window.location.reload()
        }
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
