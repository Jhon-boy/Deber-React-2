import React, {useState , useEffect} from 'react';
import { Task } from '../../models/task.class';
import { Levels } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', true, Levels.NORMAL);
    const defaultTask2 = new Task('Example1', 'Default description', false, Levels.URGENTE);
    const defaultTask3 = new Task('Example', 'Default description', true, Levels.BLOQUEANTE);

    //Estado del componente
  const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true); 
  
//Control del ciclo de vida
useEffect(() => {
   console.log('Task State has benn modified')
    setTimeout(() =>{
        setLoading(false)
    }, 2000);

   setLoading(false);
    return () => {
        console.log('Task list component is going to unMount...')
    };
}, [tasks]);


//  const defaultTask  = new Task('EXAMPLE', 'Default description', false, Levels.NORMAL)
 function completeTask(task){
    console.log('Complete this Task; ', task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask[index].completed = ! tempTask[index].completed;
    //We update the state of the component with the new will update the iteration 
    //of the task in order to show the task updated
    setTasks(tempTask); // Actualziamos el texto
 }

 //Funcion que elimina
 function deleteTask(task){
    console.log('Complete this Task; ', task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask.splice(index, 1);
    setTasks(tempTask); // Actualziamos el texto
 }

 //Funcion que añade
 function addTask(task){
    console.log('Complete this Task; ', task);
    const tempTask = [...tasks];
    tempTask.push(task);
    setTasks(tempTask);

 }
 
 const Table = () =>{

    return(
        <table>
        <thead>
              <tr> 
           <th scope='col'>Title</th>
           <th scope='col'>Description</th>
           <th scope='col'>Level0</th>
           <th scope='col'>Action</th>
            </tr>
        </thead>
        <tbody>
            {/* Iterar sobre una lista de tareas ,
            1. Hacemos un mapeo
            2. Recibimos un paramtro
            3. Fcuntion callback
            4. returnamos segun lo recibido */}
            {
                tasks.map((task, index) =>{
                    return(
                         <TaskComponent 
                         key={index}
                          task = {task}
                          completed={completeTask}
                          remove= {deleteTask}>

                          </TaskComponent>
                    )
                })
            }

           

        </tbody>
          
        </table>
    )
 }
 let taskTable;

 if(tasks.length > 0 ) {
    taskTable  = <Table></Table> //En caso de que exista elementos se pinta
 } else {
    taskTable = ( //Hacemos que la tabla adquiera estos nuevos valores
    <div>
         <p>THERE ARE NO TASKS TO SHOW</p>
         <h4>Plase, create one</h4>
    </div>
    )
   
 }



    return (
        <div>
            <div className='col-12'>
            <div className='card'>
                <div className='card-header p-3'>
                <h5>   Your Task: </h5>

                </div>
                {/* Card Body */}
                <div className='card-body' data-mdb-perfect-scrollbar ='true' style={{position: 'relative', height: '400px'}}>
                    {taskTable}

                </div>
               
            </div>

             
            </div>
             <TaskForm add={addTask} lenght= {tasks.length}></TaskForm>
            {/* TODO: aplicar un For o un MAP para renderizar una lista */}
            {/* <TaskComponent task = {defaultTask}></TaskComponent> */}
        </div>
    );
};



export default TaskListComponent;
