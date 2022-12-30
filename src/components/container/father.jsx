import React,{useState} from 'react';
import Child from '../pure/child'
const Father = () => {
    const [name, setName] = useState('Jhon');

    function showMe (text){
        alert(`Message received: ${text}`);
    }

    function updateName(newName){
        setName(newName)

    }



    return (
        <div style={{background: 'gray'}}>
        {/* Envias dos parametros pero a su vez mandamos a llamar
        a la funcion y para que se actualice */}
            <Child name={name} send={showMe} update={updateName}></Child>
        </div>
    );
}

export default Father;
