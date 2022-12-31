import React, {useRef} from 'react';
import  PropTypes from 'prop-types'; // Traes los propotipos
import { Levels } from '../../../models/levels.enum';
import {Task} from '../../../models/task.class'
import { Formik, Field, Form , ErrorMessage} from 'formik';
import * as Yup from 'yup'



const TaskForm = ({add, lenght}) => {
    const initialValues = {
        nameRef: '',
        descriptionRef: '',
        levelRef:Levels.NORMAL
       }

       const registerTask = Yup.object().shape(
        {
            nameRef: Yup.string()
                .min(2, 'Name too short ')
                .max(25, 'Name too long')
                .required(  'Name is required'),
            descriptionRef: Yup.string()
                .required('Email is required'),
            levelRef: Yup.string().oneOf([Levels.NORMAL, Levels.BLOQUEANTE, Levels.URGENTE, 'ERROR, YOU MUST SELECT A ROL '])
            .required ('LEVEL IS REQUIRED')
        }
        )

        const submit = (values) =>{
            alert('Regiter Task')
           }
        


    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(Levels.NORMAL);

    function addTask(e){
        e.preventDefault(); //Cerramos el vento po defecto
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    const normalStyle = {
        color: 'blue',
        fontWeight: 'bold'
    }
    const urgentStyle = {
        color: 'yellow',
        fontWeight: 'bold'
    }
    const blokingStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }


    return (
        <div>
             <h4>Register Task Formik with Yup</h4>
             <Formik
             initialValues={initialValues}
                validationSchema= {registerTask}
          
                onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                        addTask(values);
                    
                    }}>
                      {({ errors, 
                        touched , 
                        isSubmitting 
                        }) => (
                            <Form >
                           
                            <Field id='nameRef' type='text' name='nameRef' className='form-control form-control-lg' 
                             autoFocus placeholder='Write your Task' />
                              {
                                errors.nameRef && touched.nameRef &&
                                (
                                    
                                        <ErrorMessage name = 'nameRef' component='div'></ErrorMessage>
                                    
                                )
                            }

                            <Field  id='descriptionRef' name='descriptionRef' type='text' className='form-control form-control-lg'  
                                     placeholder='Write your description' />
                            {
                                errors.descriptionRef && touched.descriptionRef &&
                                (
                                    
                                        <ErrorMessage name = 'descriptionRef' component='div'></ErrorMessage>
                                    
                                )
                            }
                            <Field as="select" name="levelRef" className='form-control form-control-lg'  >
                                <option style={urgentStyle} value={Levels.URGENTE}>URGENTE</option>
                                <option style={blokingStyle} value={Levels.BLOQUEANTE}> BLOQUEANTE</option>
                                <option style={normalStyle} value={Levels.NORMAL}> NORMAL</option>
                            </Field>
                            {
                                errors.levelRef && touched.levelRef &&
                                (
                                    
                                        <ErrorMessage name = 'levelRef' component='div'></ErrorMessage>
                                    
                                )
                            }

                            <button type="submit" className='btn btn-success btn-lg ms-3 ' style={{height: '55px'}} >{lenght >0 ? 'ADD' : 'CREATE '}</button>
                             {isSubmitting ? (<p>Sending....</p> ): null}

                            </Form>
                            
                        )}

             </Formik>
        </div>
//        <form onSubmit={addTask} className='d-flex justify-content-center align-items center mb-4'>
//        <div className='form-outline flex-fill'>
//        <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required 
//        autoFocus placeholder='Write your Task' />

//         <input ref={descriptionRef} id='inputDes' type='text' className='form-control form-control-lg' required 
//         placeholder='Write your Crush' />

//         {/* <label htmlFor='selectLevel' className='sr-only'>Priority</label> */}
//         <select style={normalStyle} className='form-control form-control-lg' ref={levelRef} defaultValue = {Levels.NORMAL} id='selectLevel'>
//             <option  value={Levels.NORMAL}>
//                 normal
//             </option>

//             <option style={urgentStyle} value={Levels.URGENTE}>
//                 Urgent
//             </option>

//             <option style={blokingStyle} value={Levels.BLOQUEANTE}>
//                BLOQUEANTE
//             </option>

//         </select>
// <button type='submit' className='btn btn-success btn-lg ms-3 ' style={{height: '55px'}}>
//             {lenght >0 ? 'ADD' : 'CREATE '}
//             </button>
//        </div>
            
//        </form>
    );
}

TaskForm.Prototype ={
    add: PropTypes.func.isRequired,
    length:  PropTypes.number.isRequired
}

export default TaskForm;
