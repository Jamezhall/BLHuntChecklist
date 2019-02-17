import React, { Component } from 'react';

import Header from './Layouts/Header/Header';
import Col from './Layouts/Col/Col';
import Row from './Layouts/Row/Row';
import Grouping from './Components/Grouping/Grouping';

import myData from './Data/items';

import './App.css';

class App extends Component {

  constructor(props){
    super(props) 

      this.state = {
        originalData: myData,
        data: []
      }
    
  }
  hydrateStateWithLocalStorage = () => {

    // if the key exists in localStorage
    if (localStorage.hasOwnProperty("checklistData")) {
      // get the key's value from localStorage
      let storedData = localStorage.getItem("checklistData");

      // parse the localStorage string and setState
      try {
        storedData = JSON.parse(storedData);
        this.setState({ data: storedData });
      } catch (e) {
        // handle empty string
        this.setState({ data: storedData });
      }
    } else {
      this.setState({ data: this.state.originalData });
      
    }
  }

  writeStateToLocalStorage = () => {
    localStorage.setItem("checklistData", JSON.stringify(this.state.data));
    console.log("Wrote to storage");
  }

  clearLocalStorage = () => {
    localStorage.clear();
    console.log("All Storage removed");
  }



  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }


  render() {
    return (
      <main>

        <Header onReset={this.clearLocalStorage} onSave={this.writeStateToLocalStorage}/>

        <section>
          <Row>
              {
                this.state.data.map((group) => {
                    return (
                      <Col><Grouping key={group.name} info={group}/></Col>
                    );
                })
              }
          </Row>
        </section>

      </main>
    );
  }
}

export default App;
