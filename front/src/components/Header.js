import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href="/">
                    <img src="../assets/images/logo.png" alt="Fun Quiz Logo" />
                </a>
            </div>
        </header>
    );
};

export default Header;