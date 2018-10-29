import React, { Component } from 'react';
import Calendar from './calendar';

class MainPage extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <Calendar />
            </div>
        );
    }

}

export default MainPage;