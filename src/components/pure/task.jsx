import React , {useEffect}from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

//Modelos

import { Levels } from '../../models/levels.enum';
//Importamos el estilo CSS
import '../../styles/task.scss'


const TaskComponent = ({task, completed, remove}) => {
     useEffect(() => {
        console.log('Tarea Creada');
        return () => {
             console.log(`Task ${task.name} going to unmount`);
        };
     }, [task]);


    //  Function que retorne un badge, dependiendo de una novel de tarea
     function taskLevelBadge(){
        switch(task.level){
            case Levels.NORMAL:
                return(<h6 className='mb-0'>
                <span className='badge bg-primary'>
                    {task.level}
                </span>

                </h6>)
      
                case Levels.URGENTE:
                    return(<h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
    
                    </h6>)
                       case Levels.BLOQUEANTE:
                        return(<h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
        
                        </h6>);
                        default:
                        break;

                        
                    
        }

     }
    //  FUNCION DEL COMPLETADo
    function  taskCompletedIcon(){
        if(task.completed){
            return (<i onClick={() =>completed(task)} className ='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        } else{
            return(<i  onClick={() =>completed(task)} className='bi-toggle-off task-action'style={{color: 'grey'}}></i>)
        }
    }

    //VARIABLES PARA EL CAMBIO DE ESTILO

    const taskComplete = {

        color: 'gray',
        fontWeight: 'bold',
        textDecoration: 'line-through'
    
     }

     const taskPending = {
    
        color: 'tomato',
        fontWeight: 'bold',
    
     }


     

    return (
        // <tr className='fw-normal ' className ={task.completed ? 'task-completed' : 'task-pending'}>
        //SEGUNDA FORMA: PREGUNTAMOS SI ESTA COMPLETO LA TAREA Y DEACUERDO  A ESO PASAMOS LOS ESTILOS DEFINIDOS ANTERIORMETE   
        <tr className='fw-normal ' style={ task.completed ? taskComplete: taskPending}>
            <th> 
                <span className='ms-2'> {task.name}</span>
            </th>
            <td className='align-middle' >
            <span className='ms-2'> {task.description }</span>
            </td>

            <td className='align-middle'>
          {/* Sustituir por batchs   */}
              {/* <span > {task.level }</span> */}
              {taskLevelBadge(task.level)}
            </td>
            
            <td className='align-middle'>
            {/* Sustituir por Iconos */}
             {/*  EJEMPLO{task.completed ?
                (<i className ='bi-toggle-on' style={{color: 'green'}}></i>) 
                : 
                ( <i className='bi-toggle-off'style={{color: 'grey'}}></i>)
             
             } */}
             
             {taskCompletedIcon()}
             <i className ='bi-trash task-action' onClick={() => remove(task)} style={{color: 'tomato'}}></i>
            </td>
        </tr>
        // <div>
        // <h2 className='task-name'>
        //     NAME: { task.name }
        // </h2>
        // <h3>
        //     DESCRIPTION: { task.description }
        // </h3>
        // <h4>
        //     Level: { task.level }
        // </h4>

        // <h5>
        //     This task is: {task.completed ? 'COMPLETED': 'PENDING'}
        // </h5>
            
        // </div>

    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    completed: PropTypes.func.isRequired, //Revisa que no sea una tarea
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
