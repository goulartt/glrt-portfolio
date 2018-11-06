
import React, { Component, Fragment } from 'react';
import { Col, Button, Grid, Row, Glyphicon } from 'react-bootstrap';

import '../css/Details.css';


class Details extends Component {



  render() {
    return (
      <section id="details">
        <Grid>
          <Row>
            <h1 className="detailsTitle" >Mais informações</h1>
            <hr />
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="sub">
                <Glyphicon className="icon" glyph="heart" />
                <h3 className="detailsSub">BIOGRAFIA</h3>
              </div>
              <p> No primeiro ano de faculdade, em 2016, comecei a busca pelo meu primeiro emprego, desesperadamente, pelo fato do meu pai não estava
                    conseguindo pagar minhas contas da faculdade (moradia e aluguel). Fui recusado em umas 7 entrevistas,
                    por não ter experiência e eu insistia em querer trabalhar na área, mesmo sabendo somente C e lógica da
                    programação. E depois de muita persistência consegui meu primeiro emprego como suporte técnico e posteriormente
                    surgiu uma oportunidade estágio com Java, e dai por diante só fui evoluindo.</p>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="sub">
                <Glyphicon className="icon" glyph="briefcase" />
                <h3 className="detailsSub">TRABALHO</h3>
              </div>

              <p>Entrei na área de programação em 2017 como programador Java, meu primeiro projeto
                foi em uma solução de e-commerce da empresa, para farmácias. Após isso
                passei por alguns outros projetos da empresa, como soluções utilizando arquitetura cloud
                e microserviços.
              </p>
              <p>Com essa experiência adquirida, fui selecionado pelo
                Linkedin pela Multinacional ATOS em Londrina para trabalhar na empresa como Analista Pleno.
                Dentro da empresa trabalhei em projetos para Caixa, Volkswagen e Bradesco.
              </p>
            </Col>

            <a href="https://github.com/goulartt" target="_blank">
              <img src={require('../img/github.png')} height="210" width="500" className="github hvr-bounce-in"></img>
            </a>
            <h3 className="github-text">GITHUB</h3>
            <Col lg={12} md={12} sm={12} xs={12}>

              <p style={{ textAlign:'center' }}>Confira alguns dos meus projetos no github</p>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }


}

export default Details;