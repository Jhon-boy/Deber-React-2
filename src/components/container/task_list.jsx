import React, {useState , useEffect} from 'react';
import { Task } from '../../models/task.class';
import { Levels } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

import '../../styles/task.scss'


const TaskListComponent = () => {

    //Estado del componente

    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true); 
//Control del ciclo de vida
useEffect(() => {
   console.log('Task State has benn modified')

   setLoading(false);
    return () => {
        console.log('Task list component is going to unMount...')
    };
}, [tasks]);


 const defaultTask  = new Task('EXAMPLE', 'Default description', false, Levels.NORMAL)

    const changeCompleted = ( id)=>{
        console.log('TODO: Cambiar estado de la tarea ')
    }

    return (
        <div>
            <div>
                Your Task: 
            </div>
            {/* TODO: aplicar un For o un MAP para renderizar una lista */}

            <TaskComponent task = {defaultTask}></TaskComponent>
        </div>
    );
};



export default TaskListComponent;
