// Ejemplo de uso del metodo del componennete 
// didUpdate en el componennte clase y uso de Hook

import React, { Component, useEffect} from 'react'

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento cuando el componentne recibe nuevos props o cambios en su estado');
    }
  render() {
    return (
      <div>DidUpdate</div>
    )
  }
}




export const DidUpdateHook = () => {
    useEffect(() =>{
        console.log('Comportamiento cuando el componentne recibe nuevos props o cambios en su estado ');
    });
    return (
        <div>DidUpdate</div>
    );
}



