import React, { Component } from 'react';

import Header from './Layouts/Header/Header';
import Col from './Layouts/Col/Col';
import Row from './Layouts/Row/Row';
import Grouping from './Components/Grouping/Grouping';

import './App.css';

class App extends Component {
  render() {
    return (
      <main>

        <Header>
          <Row>
            <Col>LEFT</Col>
            <Col>RIGHT</Col>
          </Row>
        </Header>

        <section>
          <Row>
            <Col><Grouping /></Col>
            <Col><Grouping /></Col>
            <Col><Grouping /></Col>
            <Col><Grouping /></Col>
            <Col><Grouping /></Col>
          </Row>
        </section>

      </main>
    );
  }
}

export default App;
