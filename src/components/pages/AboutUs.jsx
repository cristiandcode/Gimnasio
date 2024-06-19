import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUsPage = () => {
    return (
        <Container className="about-us-page">
            <h1>Acerca de Nosotros</h1>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>STX GYM</Card.Title>
                            <Card.Text>
                                Somos una empresa comprometida con...
                                Estamos ubicados en...
                                Nuestros valores son...
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Nuestro Equipo</Card.Title>
                            <Card.Text>
                                Conoce al equipo detrás de nuestra empresa:
                                <ul className="list-unstyled">
                                    <li className="media">
                                        <img
                                            src="https://ca.slack-edge.com/THQU1MGPN-U05P51ZCAAZ-51399fe135b1-72"
                                            className="mr-3"
                                            alt="Miembro del equipo"
                                        />
                                        <div className="media-body">
                                            <h5 className="mt-0">Cristian Diaz</h5>
                                            Gerente de STX GYM
                                        </div>
                                    </li>
                                    <li className="media">
                                        <img
                                            src="https://ca.slack-edge.com/THQU1MGPN-U05N64FSWBW-e34590769646-192"
                                            className="mr-3"
                                            alt="Miembro del equipo"
                                        />
                                        <div className="media-body">
                                            <h5 className="mt-0">Claudia Alejandra Torres</h5>
                                           Gerente de STX GYM
                                        </div>
                                    </li>
                                    <li className="media">
                                        <img
                                            src="https://ca.slack-edge.com/THQU1MGPN-U05LY652CVB-94814072c880-48"
                                            className="mr-3"
                                            alt="Miembro del equipo"
                                        />
                                        <div className="media-body">
                                            <h5 className="mt-0">Iñaki Zavaleta</h5>
                                            CEO de STX GYM
                                        </div>
                                    </li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Nuestra Misión y Visión</Card.Title>
                            <Card.Text>
                                Nuestra misión es...
                                Nuestra visión es...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUsPage;
