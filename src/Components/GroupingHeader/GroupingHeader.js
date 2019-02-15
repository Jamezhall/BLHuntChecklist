import React from 'react';
import cx from 'classnames';
import './GroupingHeader.css';


class GroupingHeader extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
      return (

            <header className={cx('grouping', this.props.color)}>
                <h3>{this.props.name}</h3> <h3>{this.props.totalPoints} Total Points</h3>
                <div className="grouping-progress-bar">
                    <span className="background-bar"></span>
                    <span className={cx('current-progress-bar', this.props.color)}></span>
                </div>
            </header>

      );
    }
}

export default GroupingHeader;