import React, {useRef} from 'react';
import  PropTypes from 'prop-types'; // Traes los propotipos
import { Levels } from '../../../models/levels.enum';
import {Task} from '../../../models/task.class'


const TaskForm = ({add, lenght}) => {


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
       <form onSubmit={addTask} className='d-flex justify-content-center align-items center mb-4'>
       <div className='form-outline flex-fill'>
       <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required 
       autoFocus placeholder='Write your Task' />

        <input ref={descriptionRef} id='inputDes' type='text' className='form-control form-control-lg' required 
        placeholder='Write your Crush' />

        {/* <label htmlFor='selectLevel' className='sr-only'>Priority</label> */}
        <select style={normalStyle} className='form-control form-control-lg' ref={levelRef} defaultValue = {Levels.NORMAL} id='selectLevel'>
            <option  value={Levels.NORMAL}>
                normal
            </option>

            <option style={urgentStyle} value={Levels.URGENTE}>
                Urgent
            </option>

            <option style={blokingStyle} value={Levels.BLOQUEANTE}>
               BLOQUEANTE
            </option>

        </select>
<button type='submit' className='btn btn-success btn-lg ms-3 ' style={{height: '55px'}}>
            {lenght >0 ? 'ADD' : 'CREATE '}
            </button>
       </div>
            
       </form>
    );
}

TaskForm.Prototype ={
    add: PropTypes.func.isRequired,
    length:  PropTypes.number.isRequired
}

export default TaskForm;
