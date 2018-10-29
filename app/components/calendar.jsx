import React, { Component } from 'react';
import CalendarWeek from './calendar-week';

class Calendar extends Component {
    constructor(props) {
        super(props);
       
        let now = new Date();
        this.state = { 
            days: this.getDays(new Date()),
            currentMonth: now
        }
    }

    splitByWeek(days) {
        let weeks = Math.ceil(days.length / 7);
        let weekDays = [];
        for(let i=0;i< weeks;i++)
        {
            let start = i * 7;
            weekDays.push(days.slice(start, start + 7));
        }

        return weekDays;
    }

    getDays(date) {
        let year = date.getFullYear();
        let month = date.getMonth();

        let prev = this.getMonthDays(month-1,year);
        let current = this.getMonthDays(month,year);
        let next = this.getMonthDays(month+1,year);
        
        let firstDay = current[0].getDay();
        let takePrevCount = firstDay == 0 ? 6 : firstDay - 1;

        let lastDay = current[current.length - 1].getDay();
        let takeNextCount = lastDay == 0 ? 0 : 7 - lastDay;

        let days = prev.slice(prev.length - takePrevCount)
        .concat(current)
        .concat(next.slice(0,takeNextCount));
        
        return days;
    }

    getMonthDays(month, year)
    {
        let lastMonthDay = [...new Array(new Date(year, month + 1, 0).getDate()).keys()];
        let days = lastMonthDay.map(day => new Date(year, month, day + 1));

        return days;
    }

    handleClick(month)
    {
        let date = new Date(this.state.currentMonth);
        date.setMonth(month);
        this.setState({ 
            currentMonth: date,
            days: this.getDays(date)
        });
    }


    render() { 
        return (
            <div className="row">
                <div className="col-8">

                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <button onClick={()=> this.handleClick(this.state.currentMonth.getMonth() - 1)}>&#60;</button>
                        </li>
                        <li className="nav-item">
                            {this.state.currentMonth.toLocaleDateString('ru-RU',{year:'numeric',month:'long'})}
                        </li>
                        <li className="nav-item">
                            <button onClick={()=> this.handleClick(this.state.currentMonth.getMonth() + 1)}>&#62;</button>
                        </li>
                    </ul>
                    {this.splitByWeek(this.state.days).map((week,index) => (
                    <CalendarWeek key={index} week={week} />)) }
                </div>

                <div className="col-4">
                    show day todo
                </div>
            </div>
        );
    }
}
 
export default Calendar;