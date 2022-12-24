import React, {  useState} from 'react';


//Definiendo estilos enconstantes:

const loggedStyle = {
    color: 'blue',

}

//Estilo para usuario no logueado

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bod'
}
const GretingStyles = (props) => {
  //Generamos un estado para el componente

  const [logged, setLogged] = useState(false);
  
  
    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
       <p>Hola, {props.name}</p>
       <button onClick={ () =>{
        console.log('Boton pulseado')
        setLogged(!logged);
       }}>
        { logged ? 'Logout': 'Login'}
       </button>
            
        </div>
    );
}

export default GretingStyles;
