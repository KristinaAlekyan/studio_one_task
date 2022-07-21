import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Provider } from 'react-redux';

import './App.css';
import store from './redux/store';
import Header from './components/Header/Header';
import News from './components/News/News';
import SingleNews from './components/SingleNews/SingleNews';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
    const [searchString, setSearchString] = useState("");
    const [sortType, setSortType] = useState("");

    const onSearchStringChange = (event) => {
        setSearchString(event.target.value);
    }

    return (
        <Provider store={store}>
            <Router >
                <Header onChange={onSearchStringChange} value={searchString} setSortType={setSortType} />

                <Routes>
                    <Route exact path="/" element={<News searchString={searchString} sortType={sortType} setSortType={setSortType} />} />
                    <Route exact path="/news" element={<News searchString={searchString} sortType={sortType} setSortType={setSortType} />} />
                    <Route exact path="/news/:id" element={<SingleNews />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/profile" element={<ProtectedRoute><Profile /> </ProtectedRoute>} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
