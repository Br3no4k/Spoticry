import React from 'react';
import './Footer.css';
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/spoticrylogonav.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>© 2024 Spoticry. Todos os direitos reservados. A música, sempre com você.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}