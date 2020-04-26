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
                <button onClick={this.handleClick}>{this.state.isDay ? "DARK" : "LIGHT"}</button>
                <p>{this.state.isDay ? "Have a nice Day" : "This is DARKMODE"}</p>
                <p>{this.state.isDay ? <p className="icon">&#x1F303;</p> : <p className="icon">&#x1F304;</p>}</p>
            </section>
        )

    }


}




export default Day;