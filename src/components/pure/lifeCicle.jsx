// Ejemplo de ciclo de vida
 

import React, { Component } from 'react';

class LifeCicle extends Component {

   constructor(props){
    super(props)
    console.log('CONSTRUCTOR: Cuando se instancia el componente')
   }
   componentWillMount(){
    console.log('WillMount: Antes del montaje')

   }
   componentDidMount(){
    console.log('DIDMount: Justo al del montaje del componente, antes de renderizar')

   }
   componentWillReceiveProps(){
    console.log('WillReceiveProps: Si va a recibir nuevas props')

   }
   shouldComponentUpdate(nextProps, nextState){
    // Controlar si el componente debe o no actualizarse 
    // Return true / false

   }
   componentWillUpdate(){
    console.log('WillUpdate: Justo antes de actualizarse')
   }

   componentDidUpdate(){
    console.log('DidUpdate: Despues de actualizarse')
   }

   componentWillUnmount(){
    console.log('WillUnmount: Justo antes de desaparecer')
   }
   render(){
    return(
        <div>
            
        </div>
    )
   }
}

export default LifeCicle;
