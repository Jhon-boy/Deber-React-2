// Componente que va a contener un formulario 
// para autentificar usuarios

import React, {useState} from 'react';


const LoginForms = () =>{
    const initialCredentials = [
        {
            user:'',
            password:'',
        }
    ];
   
    const [credentials, setCredentials] =useState(initialCredentials);
    return (
        <div>loginForms</div>
    )
}

export default LoginForms;