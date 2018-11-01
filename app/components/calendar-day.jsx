import React, { Component } from 'react';
import CalendarTodos from './calendar-todos';
import Popup from "reactjs-popup";

class CalendarDay extends Component {
    constructor(props) {
        super(props);
        this.state = { modalOpen: false }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(event) {
        this.setState({
            modalOpen: true
        })
        console.log("ok");
    }

    closeModal(event) {
        this.setState({
            modalOpen: false
        })
    }

    render() { 
        let cardSize = {
            width:'200px',
            height:'180px',
        }
        return (
            <div className="card border-dark" onDoubleClick={this.openModal} style={cardSize}>
                <div className="card-body">
                    <h5 className="card-title">{ this.props.day.date.getDate() }</h5>
                        {this.props.day.todos.map((t,i) => <CalendarTodos key={i} todos={t} />)}
                </div>
                <Popup open={this.state.modalOpen} onClose={this.closeModal} modal closeOnDocumentClick>
                <div>
                    <div>Popup content here !!</div>
                    <button onClick={this.closeModal}>Ok</button>
                    </div>
                </Popup>
            </div>
        );
    }
}
 
export default CalendarDay;