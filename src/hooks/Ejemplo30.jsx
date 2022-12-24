// Hooks de useEffect y useContext


import React, {useState, useContext} from 'react';
// Compoenente 1: dispone de un contexto que va a tener un valor que recibe desde el padre

const miContexto = React.createContext(null);

const Componente1 = () => {
    const state = useContext(miContexto);
    //Inicializamos en un estado vacio que va a rellenarse con los datos del padre

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/* Pintamos el componente  2  */}
            <Componente2></Componente2>
            <h2></h2>
        </div>
    );
}


const Componente2 = () => {

const state = useContext(miContexto);
    return (
        <div>
        <h2>
            La sesion es: {state.sesion}
        </h2>
            
        </div>
    );
}

 export default function  MiComponenteConContexto(){

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    //Creamos el estado de este componente


    const [sesionData, setSesionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSesionData(
            {
                token: 'Hola45',
                sesion: sesionData.sesion + 1
            }
        );
    }

    return(
        <miContexto.Provider value={sesionData}>
        {/* Todo lo que esta aaqui dentro puede leer todos los datos 
        
        Ademas si se actualiza, los componentes tambien se actualizan
        */}
        
        <h1>Ejemplo de useState y useContext</h1>
        <Componente1></Componente1>

        <button  onClick={actualizarSesion}>Actualizar Sesion</button>

        </miContexto.Provider>
    );

 }