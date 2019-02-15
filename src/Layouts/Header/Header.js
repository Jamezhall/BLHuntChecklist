import React from  'react';
import Col from '../Col/Col';
import Row from '../Row/Row'; 
import gvars from '../../Data/globals';
import './Header.css';

class Header extends React.Component {

    constructor(props) {
        super(props);

    }

render() {
      return (
        <header className="header">
          <Row>
            <Col><h1>{gvars.checklistName}</h1><span className="version-text">{gvars.version}</span></Col>
            <Col>
            <button onClick={this.props.onReset}>Reset the page</button><br />
            <button onClick={this.props.onSave}>Save to storage</button>
            </Col>
          </Row>
        </header>
      );
    }
}

export default Header;