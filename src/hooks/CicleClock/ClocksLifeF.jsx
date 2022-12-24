import React, { Component } from 'react'


function Clock(props) {
    super(props);
    return this.state ={
        fecha: new Date(),
        edad: 0,
        nombre: 'Jhon with Functions',
        apellido: 'Balvin'
    };
    
}


function DidMount(props) {
    return this.timerID = setInterval(
        () => this.tick(), 1000
    );
    
}
function WillMount(props) {
    clearInterval (this.timerID);
    
}

// render() {
//     return (
//        <div>
//        <h2>
//        Hora Actual:
//        {this.state.fecha.toLocaleTimeString()}
//        </h2>
//        <h3>{this.state.nombre} {this.state.apellidos}</h3>
//        <h1>Edad: {this.state.edad}</h1>
//        </div>
//     )
//  }
//  tick(){
//     this.setState((prevState) => {
//        let edad = prevState.edad +1;
//        return {
//           ...prevState,
//           fecha: new Date(),
//           edad
//        }
//     });
//  }

export default Clock;