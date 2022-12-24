// EJEMPLO DE USO DE LOS HOOKS

// Crear un componente de tipo funcion y acceder a su estado
//privado a travez de un hook y ademas, poder modificarlo

import React ,{useState}from 'react';

const Ejemplo1 = () => {

    //Valor inicial par u contador
    const valorInicial  =0;

    // valor inicial para una persona
    const personaInicial = {
        nombre: 'Samy',
        email: 'samy@gmail.com'
    }
    // Queremos que el valorInicial y el personaInicial setIntervalparte del estado 
    // del componente para asi poder gestionar su cambio y quee
    // este se vea reflejado en la vista del componente



    //FUNCION para actualizar el estado privado que contiene el cambio

    function incrementarContador(){
        setcontador(contador+1);


    }

    //funcion para actualziar el estado de la persona y su componente
    function actualizarPersona(){
        setpersona(
           { nombre: 'JHON',
            email: 'jhondecamino'
        }
        );
    }

    const [contador, setcontador] = useState(valorInicial);
    const [persona, setpersona] = useState(personaInicial);  
    return (
        <div>
            <h3>--------EJEMPLO DE USE userState()***</h3>
            <h5>Contado: {contador}</h5>
            <h5>DATOS DE LA PERSONA</h5>
            <h6>Nombre: {persona.nombre}</h6>
            <h6>EMAIL: {persona.email}</h6>
            {/* BOTON para actualizar el estado */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar   Persona</button>
        </div>
    );
    
    
}


export default Ejemplo1;
