import React from 'react';

import './Grouping.css';

class Grouping extends React.Component {

state = {}


render() {
      return (
        <div>
            <header className="grouping">
                <h3>Type (Location)</h3> <h3># Total Points</h3>
                <div className="grouping-progress-bar">
                    <span className="background-bar"></span>
                    <span className="current-progress-bar"></span>
                </div>
            </header>

            <div className="item-container">
                <span className="item-point-box">12</span>
                <span className="item-name">Item Name - Location Found</span>
                <span className="item-notes">Requires Level 50</span>
            </div>
            <div className="item-container">
                <span className="item-point-box">12</span>
                <span className="item-name">Item Name - Location Found</span>
            </div>
            <div className="item-container">
                <span className="item-point-box">12</span>
                <span className="item-name">Item Name - Location Found</span>
            </div>
        </div>
      );
    }
}

export default Grouping;