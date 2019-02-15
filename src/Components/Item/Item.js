import React from 'react';
import './Item.css';
import cx from 'classnames';

class Item extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (          
                <div className={cx('item-container', this.props.color)}>
                    <span className="item-point-box">{this.props.points}</span>
                    <span className="item-name">{this.props.name}</span>
                    <span className="item-notes">{this.props.info}</span>
                </div>
        );
    }
}

export default Item;