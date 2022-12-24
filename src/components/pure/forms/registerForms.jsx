// para autentificar usuarios

import React,{ useState } from 'react'

const RegisterForms = () =>{
    const initialData = [
        {
            user:'',
            password:'',
            email:'',
            name:''
        }
    ];
   
    const [data, setData] = useState(initialData);
    return (
        <div> 
        
        </div>
    );
}

export default RegisterForms;
