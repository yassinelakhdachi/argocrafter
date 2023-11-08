import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

class Bienvenue extends React.Component {
    render() {
        return (
            <Container className="my-5">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Card bg="dark" text="white">
                            <Card.Body>
                                <Card.Title className="text-center display-4">
                                    Bienvenue au Magasin des Voitures
                                </Card.Title>
                                <Card.Text className="text-center lead">
                                    Découvrez notre incroyable collection de voitures de luxe près de chez vous.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted text-center">
                                IDSIT - Votre partenaire automobile
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Bienvenue;