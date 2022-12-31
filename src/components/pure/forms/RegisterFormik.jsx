import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as  Yup from 'yup'
import {User} from '../../../models/user.class'
import { Roles } from '../../../models/roles.enum';

const RegisterFormik = () => {
   let user = new User();

   const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm: '',
    role: Roles.USER
   }
   const registerSchema = Yup.object().shape(
    {
        username: Yup.string()
            .min(6, 'Username too short ')
            .max(12, 'Username too long')
            .required(  'Username is required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        role: Yup.string().oneOf([Roles.USER, Roles.ADMIN, 'ERROR, YOU MUST SELECT A ROL '])
        .required ('ROL IS REQUIRED'),
        password: Yup.string()
             .min(8, 'Password too short')
             .required('Password is required'),
        confirm: Yup.string()
            .when("password", {
                is: value =>(value && value.length >0 ? true: false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    'Password must match!'
                )
            }).required('You must confirm the password')
    }
    )
   const submit = (values) =>{
    alert('Regiter User')
   }

  
    return (
        <div>
            <h4>Register Formik with Yup</h4>
            <Formik 
 
                initialValues={initialValues}
                validationSchema= {registerSchema}
          
                onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                        
                    
                    }}
            > 
             {({ errors, 
                touched , 
                isSubmitting 
                }) => (
                    <Form>
                   
                            <label htmlFor="username">Username</label>
                            <Field id="username" type= 'text' name="username" placeholder="EXAMPLE" />
                            <br></br>
                           
               
                           {
                                errors.username && touched.username &&
                                (
                                    
                                        <ErrorMessage name = 'username' component='div'></ErrorMessage>
                                    
                                )
                            }

                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" placeholder="example@email.com" />
                            <br></br>

                         
                           {
                                errors.email && touched.email &&
                                (
                                    
                                        <ErrorMessage name = 'email' component='div'></ErrorMessage>
                                    
                                )
                            }
                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="password   "
                                type="password"
                            />
                            <br></br>
                        
                             {
                                errors.password && touched.password &&
                                (
                                    ( 
                                    <div>
                                        <ErrorMessage name = 'password'></ErrorMessage>
                                    </div>   
                                    )
                                )
                            }


                            <label htmlFor="confirm">Password</label>
                            <Field
                                id="confirm"
                                name="confirm"
                                placeholder="Confirm password   "
                                type="password"
                            />
                            <br></br>

                             
                             {
                                errors.confirm && touched.confirm &&
                                (
                                    ( //Mostramos el error en caso de ser invalido con un DIV
                                    <div>
                                        <ErrorMessage name = 'confirm'></ErrorMessage>
                                    </div>   
                                    )
                                )
                            }

                            
                             <button type="submit">REGISTER ACCOUNT</button>
                             {isSubmitting ? (<p>Sending....</p> ): null}

                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default RegisterFormik;
