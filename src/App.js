import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Provider } from 'react-redux';

import store from './redux/store';
import Header from './components/Header/Header';
import News from './components/News/News';
import SingleNews from './components/SingleNews/SingleNews';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

function App() {
    const [searchString, setSearchString] = useState("");

    const onSearchStringChange = (event) => {
        setSearchString(event.target.value);
    }
    return (
        <Provider store={store}>
            <Router >
                <Header onChange={onSearchStringChange} value={searchString} />

                <Routes>
                    <Route exact path="/" element={<News searchString={searchString} />} />
                    <Route exact path="/news" element={<News searchString={searchString} />} />
                    <Route exact path="/news/:id" element={<SingleNews />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
