import React, {useState} from 'react';
import PropTypes from 'prop-types';


const Fgreeting = (props) => { //hacen referencia a los datos que se van a pasar
    //CONSTRUCTOR: const[variable, metodo] = useState(valor Inicial)
   const[age, setage] = useState(17)
   

   const birthday =() =>{

    //actualizamos el estado
    setage(age + 2);
   }
  
    return (
        <div>
             <h1>
                HELLO!! :  {props.name} desde componente funcional!!
            </h1>
               <h2>
                Tu edad es: 
                    {age} 
                </h2> 
                {/* <h2>Tu crush es: {this.state.crush}</h2> */}
                <div>
                    <button onClick={ birthday}>
                        Subir de Edad BRO
                    </button>
                </div>
        </div>
    );
};


Fgreeting.propTypes = {
    name: PropTypes.string
};


export default Fgreeting;
