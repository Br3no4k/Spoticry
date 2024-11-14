import React from 'react';
import './Cadastro.css';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import cadastroImg from "../../assets/img/cadastroimg.jpg";

export const Cadastro = () => {
  const formInitialDetails = {
    passoword: '',
    email: '',
  
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Pronto');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Carregando...");
    
    // Validação local para garantir que email e senha estejam preenchidos
    if (!formDetails.email || !formDetails.passoword) {
      setButtonText("Pronto");
      setStatus({ success: false, message: 'Por favor, preencha todos os campos.' });
      return; // Interrompe a execução se faltar algum campo
    }
  
    // Envia os dados para o servidor
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    
    setButtonText("Pronto");
    
    // Lida com a resposta do servidor
    let result = await response.json();
    setFormDetails(formInitialDetails);
  
    // Se o envio foi bem-sucedido
    if (result.code === 200) {
      setStatus({ success: true, message: 'Mensagem enviada com sucesso!' });
    } else {
      // Caso contrário, verifica se a resposta contém informações de erro
      setStatus({ success: false, message: 'Erro ao enviar, por favor, tente novamente mais tarde.' });
    }
  };
  return (
    <section className="cadastro" id="connect">
  <Container>
    <Row className="align-items-center">
      <Col size={12} md={6}>
        <img src={cadastroImg} alt="Homem com fone de ouvido com várias caixas de som" />
      </Col>
      <Col size={12} md={6}>
        <div>
          <h2>Venha se conectar!</h2>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col size={12} sm={6} className="px-1">
                <input
                  type="email"
                  value={formDetails.email}
                  placeholder="Endereço de Email"
                  onChange={(e) => onFormUpdate('email', e.target.value)}
                />
              </Col>
              <Col size={12} sm={6} className="px-1">
                <input
                  type="password" 
                  value={formDetails.passoword}
                  placeholder="Password"
                  onChange={(e) => {
                    const newPassword = e.target.value;
                    if (/^\d{0,8}$/.test(newPassword)) {
                      onFormUpdate('passoword', newPassword); 
                    }
                  }}
                />
              </Col>
              <Col size={12} className="px-1">
                <button type="submit"><span>{buttonText}</span></button>
              </Col>
              {status.message && (
                <Col>
                  <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                </Col>
              )}
            </Row>
          </form>
        </div>
      </Col>
    </Row>
  </Container>
</section>
  )
}