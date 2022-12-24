import React, {useEffect} from 'react';

const AllCicles = () => {

    useEffect(()=>{
        console.log('Componente creado')
        
        const intervalID= setInterval(() => {
            
            document.title = `${new Date()}`
            console.log('Actualizadp')
        }, 1000);

        return() =>{
            console.log('Componentne va a desaparecer')
            document.title= 'El tiempo se ha detenido  ';
            clearInterval(intervalID);
        }
    })
    return (
        <div>
            
        </div>
    );
}

export default AllCicles;
