import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Fgreeting  from './components/pure/fgreeting';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo30';
import Ejemplo4 from './hooks/Ejemplo4';
import GretingStyles from './components/pure/gretingStyles';
import ClocksLife from './hooks/CicleClock/ClocksLife'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       { /* COMPONENTE GRETING */}

          Learn React
        {/* <Greeting name="Nataly"> </Greeting> */}

        {/* <Fgreeting name="Jhon"></Fgreeting>   */}

        {/* COMPONENTE DE LISTADO TAREAS */}
        {/* <TaskListComponent></TaskListComponent> */} 
  {/* Ejemplo de uso de los componentes */}
         {/* <Ejemplo1></Ejemplo1> */}
         {/* <Ejemplo2></Ejemplo2> */}
          {/* <MiComponenteConContexto></MiComponenteConContexto> */}
          {/* <Ejemplo4 nombre='Jhon'>
            <h3>
              contenido de props.Children

            </h3>
          </Ejemplo4> */}
          {/* <GretingStyles name="Mishel"></GretingStyles> */}
          {<ClocksLife></ClocksLife>}

       </header>
    </div>
  );
}

export default App;
