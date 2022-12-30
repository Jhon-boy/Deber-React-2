import React,{useRef} from 'react';

const Child = ({name, send, update}) => {
    const messagerRef = useRef('')

    const nameRef = useRef('')



    function pressBoton(){
        const text = messagerRef.current.value;
        alert(`text in input: ${text}`);

    }
    function pressBotonParams (text){
    alert( `Text: ${text}`);
    }
    // evita que se recarge la pagina
    function submitName(e){
        e.preventDefault();
        // Actualiza lo que recibo con el valor
        update(nameRef.current.value);
    }


    return (
        <div style={{background: 'blue', padding: '30px'}}>
            <p onMouseOver={() => console.log('OnMove over')}> Hello, {name}</p>
            <button onClick={() => console.log('Boton pulsado +')}>
                UP Level
            </button>
{/*                 TIENE EL EVENTO DE ENVIAR */}
            <button onClick={pressBoton}>
              Down Nivel
            </button>

            <button onClick={()=>pressBotonParams('Jhon')}>
                Send Text
            </button>
            <br></br>
            <br></br>
            <input placeholder='Send me a message' onFocus={() => console.log('Hola')}
                onChange={(e) => console.log('Text inser: ',e.target.value)}
                onCopy={() => console.log('Copy text from this input near the text')}
            //    Cuando pulsemos un boton le ponemos aqui el valor
                ref ={messagerRef}

            />
{/*                             ENVIA UN MENSAJE del input su valor */}
            <button onClick={() => send(messagerRef.current.value)}>Send you Information</button>

                {/* FOMRULAIO */}
                <div style={{margin: '25px 10px 0px 10px'}}>
                    <form onSubmit={submitName}>
                        <input ref={nameRef} placeholder='New Crush :3'/>
                        <button type='submit'>Update Name</button>
                    </form>


                </div>
        </div>
    );
}

export default Child;
