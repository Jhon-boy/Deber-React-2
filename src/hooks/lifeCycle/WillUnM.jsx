// Ejemplo de para componente funcional

// cuando el componente va a desaparecer

import React, { Component, useEffect } from 'react'

export  class WillUnM extends Component {
 
    componentWillUnmount(){
        console.log('Antes de que el componente desaparescaa')
    }
 
    render() {
    return (
      <div>
        <h1>WillMount</h1>
      </div>
    )
  }
}



 
 export const WillUnMHook = () => {

    useEffect(() => {
        //
        return () => {
            console.log('Antes de que el componente desaparescaa')
        };
    }, []);
    return (
        <div>
            
        </div>
    );
 }
 
 
 