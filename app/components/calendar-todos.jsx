import React, { Component } from 'react';
import TodoItem from './calendar-todo-item';

class CalendarTodos extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="list-group text-nowrap text-truncate">
                {this.state.todos.map((t,i) => <TodoItem key={i} todo={t} />)}
            </div>
         );
    }
}
 
export default CalendarTodos;