import React, { Component } from 'react';
import CalendarDay from './calendar-day';

class CalendarWeek extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
            <div className="card-group">
                {this.props.week.map((day,index) =>  (<CalendarDay key={index} day={day} />))}
            </div>
            );
    }
}
 
export default CalendarWeek;