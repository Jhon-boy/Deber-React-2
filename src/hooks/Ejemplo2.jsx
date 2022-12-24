// EJEMPLO DE USO DE LOS SIGUIENTES 
// - useState()
// - useRef() = identificar valores dentro refereciar elementos dentro de la vista, acceder a ellos facilmente
// - useEffect()

import React, {useState, useRef, useEffect} from 'react';




const Ejemplo2 = () => {

// vamos a crear dos contadores distintos
// cada uno en un estado diferente

const [contador1, setContador1] = useState(0);
const [contador2, setContador2] = useState(0);


// vamos a crear una referenciar con useRef() para asociar a una varia
//ble con un elemento DOM del componente de la vista

 const miRef = useRef();

 function incrementar1(){

        setContador1(contador1 + 1)
 }
 function incrementar2(){
        setContador2(contador2 + 1);
 }
 /**
  * 
  * Trabajando con useEffect
  * 
  * ? Caso 1: Ejecutar SIEMPRE un sipper de codigo
  * se ejecuta aquello que este dentro del useEffect()
  */

//  useEffect(() => {
//     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
//     console.log('Mostrando Referencia a DOM');
//     console.log(miRef);
//  });

// Caso 2 ? Ejecutar solo cuando haya algun cambio en el contador 1
// En caso de que cambie contador2, no habra ejecucion

 useEffect(() => {
    console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    console.log('Mostrando Referencia a DOM');
    console.log(miRef);
 }, [contador1]);
    return (
        <div>
             <h3>--------EJEMPLO DE USE userState(), useEffect(), useRef()***</h3>
             <h2>CONTADOR 1: {contador1}</h2>
             <h2>CONTADOR 2: {contador2}</h2>
             {/* Elemento Referenciado */}
             <h4 ref ={miRef}> Ejemplo referenciado </h4>

            {/* Botones para cambiar los contadores */}
             <div>
             <button onClick={incrementar1}>Incrementar contador 1</button>
             <button onClick={incrementar2}>Incrementar contador 2</button>

             </div>
       
        </div>
    );
}

export default Ejemplo2;
