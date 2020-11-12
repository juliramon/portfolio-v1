import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'

const FooterBar = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="mw-1500">
            <div className="wrapper">
                <p>Juli Ramon – Frontend Developer</p>
                <p>{year} – juliramon.com v.1.0</p>
            </div>
        </footer>
    );
};

export default FooterBar;