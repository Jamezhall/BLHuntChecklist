import React from 'react';
import GroupingHeader from '../GroupingHeader/GroupingHeader';
import Item from '../Item/Item';
import './Grouping.css';

class Grouping extends React.Component {

    constructor(props) {
        super(props);

    }


render() {
      return (
        <div>
            <GroupingHeader color={this.props.info.color} name={this.props.info.name} totalPoints={this.props.info.totalPoints} />
            {
                this.props.info.items.map((i) => {
                    return (
                        <Item key={i.itemname} found={i.found} color={this.props.info.color} name={i.itemname} points={i.points} info={i.additionalinformation}/>
                    );
                })
              }
        </div>
      );
    }
}

export default Grouping;