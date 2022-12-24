// Para entender el uso de los props    

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>Ejemplo de Children props</h1>

            <h2>
                Nombre: {props.nombre}
            </h2>


            {props.Children}
        </div>
    );
}

export default Ejemplo4;
