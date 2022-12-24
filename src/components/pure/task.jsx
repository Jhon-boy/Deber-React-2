import React , {useEffect}from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

//Importamos el estilo CSS
import '../../styles/task.scss'

const TaskComponent = ({task}) => {
     useEffect(() => {
        console.log('Tarea Creada');
        return () => {
             console.log(`Task ${task.name} going to unmount`);
        };
     }, [task]);
    return (
        <div>
        <h2 className='task-name'>
            NAME: { task.name }
        </h2>
        <h3>
            DESCRIPTION: { task.description }
        </h3>
        <h4>
            Level: { task.level }
        </h4>

        <h5>
            This task is: {task.completed ? 'COMPLETED': 'PENDING'}
        </h5>
            
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task) //Revisa que no sea una tarea
};


export default TaskComponent;
