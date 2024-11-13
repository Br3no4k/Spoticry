import React from 'react';
import './Banner.css';
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "/Spoticry1/spoticry/src/assets/img/spoticry.png";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Você chegou no Spoticry!</span>
              <h1>{`SPOTICRY`}</h1>
              <p> é o seu novo destino para explorar, curtir e criar experiências musicais. Com uma interface intuitiva e recursos inovadores, você pode acessar suas músicas favoritas, criar playlists personalizadas e descobrir novos sons que vão transformar o seu dia. Prepare-se para se conectar ao poder da música de uma forma única e personalizada. Com o Spoticry, cada momento é uma trilha sonora feita especialmente para você!</p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img src={headerImg} alt="Mulher com um fone de ouvido escutando música"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}