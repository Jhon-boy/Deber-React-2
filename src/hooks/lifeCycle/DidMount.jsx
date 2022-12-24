// Ejemplo de uso del ciclo de vida del metodo en componentne clase y
//  el Hook y el ciclo de vida en componenten funcional



import React, { Component, useEffect } from 'react'

export default class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido al Dom')
    }
  render() {
    return (
      <div>
        <h3>DidMount </h3>
      </div>
    )
  }
}



const DidMountHook = () => {
    useEffect( ()=>{
        console.log('Comportamiento antes de que el componente se actualize')

    }, [])
    return (
        <div>
            <h2>
                DidMount
            </h2>
        </div>
    );
}

