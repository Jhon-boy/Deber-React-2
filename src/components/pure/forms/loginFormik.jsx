import React from 'react';
import { Formik, Field, Form , ErrorMessage} from 'formik';
import * as Yup from 'yup'



//Nos ayuda a hacer valdiaciones muy facil

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
        password: Yup.string().required('Password is required')
    }
)

const LoginFormik = () => {
    // //Valores iniciales
    const initialCredentials = { 
        email: '',
        password: ''
        }
    return (
        <div>
        <h4>Login Form</h4>
        {/* CONFIGUTACION OJO AQUI RECIBE PROPS */}
                <Formik
                //Valores iniciales 
                initialValues= { initialCredentials } 
                //Yup Validaciones esquemas
                validationSchema= {loginSchema}
                //Evento de envio de datos
                    onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    //Para almacenar en los caches - We save the data on Browser
                    localStorage.setItem('credentials', values)
                }}
                >
                
               
                   
                {({ errors, 
                touched , 
                isSubmitting 
                }) => (
                    <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" placeholder="example@email.com" />
                            <br></br>
                           
                           {/* MUESTRA LOS ERRORES DEL EMAIL */}
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
                             {/* MUESTRA LOS ERRORES DE LA CONTRASEÑA */}
                             {
                                errors.password && touched.password &&
                                (
                                    ( //Mostramos el error en caso de ser invalido con un DIV
                                    <div>
                                        <ErrorMessage name = 'password'></ErrorMessage>
                                    </div>   
                                    )
                                )
                            }
                             <button type="submit">Log In</button>
                             {isSubmitting ? (<p>Sending....</p> ): null}
                      </Form>
                )
                }
                   {/*  We obtain props from Formik
                   FORMA 1  */}
                </Formik>
        </div>
    );
}

export default LoginFormik;
