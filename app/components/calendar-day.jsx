import React, { Component } from 'react';

class CalendarDay extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ this.props.day.getDate() }</h5>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        );
    }
}
 
export default CalendarDay;