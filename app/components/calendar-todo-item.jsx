import React, { Component } from 'react';

class CalendarTodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <a href="#" class="list-group-item list-group-item-action">{this.state.todo.describe}</a>
         );
    }
}
 
export default CalendarTodoItem;