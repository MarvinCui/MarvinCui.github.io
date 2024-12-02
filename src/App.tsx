import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import FirstArticle from './pages/FirstArticle';
import SecondArticle from './pages/SecondArticle';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles/first-article" element={<FirstArticle />} />
                <Route path="/articles/second-article" element={<SecondArticle />} />
            </Routes>
        </Router>
    );
}

export default App;