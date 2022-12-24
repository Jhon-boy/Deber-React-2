import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: 17,
            crush: "Alisson"
        }
    }


    render() {
        return (
            <div>
            <h1>
                ! I LOVE YOU:  {this.props.name}
            </h1>
                <h2>
                Tu edad es: 
                    {this.state.age}
                </h2>
                <h2>Tu crush es: {this.state.crush}</h2>
                <div>
                    <button onClick={ this.birthday}>
                        cumplrir años
                    </button>
                </div>
            </div>
        );
    }
    birthday = () =>{
        this.setState((prevState) =>
            ({
                age: prevState.age+1
            })
        )
    }
}


Greeting.propTypes = {
    name: PropTypes.string,

};


export default Greeting;
