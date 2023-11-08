import React from 'react';
import { Navbar, Container, Col } from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        let fullYear = new Date().getFullYear();
        return (
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted text-white">
                        <div className="white-text">{fullYear} - {fullYear+1},All Rights Reserved by IDSIT</div>

                    </Col>
                </Container>
            </Navbar>
        );
    }
}

export default Footer;