import React, { Component } from 'react';
import './day.css';

class Day extends Component {

    state = {
        isDay: true

    }
    handleClick = () => {
        this.setState({ isDay: !this.state.isDay });
    }
    render() {
        return (
            <section className={this.state.isDay ? "daymode" : "darkmode"}>
                <p>{this.state.isDay ? "Day-Mode" : "Night-Mode"}</p>
                <button onClick={this.handleClick}>{this.state.isDay ? "Night-Mode" : "Day-Mode"}</button>
            </section>
        )

    }


}




export default Day;