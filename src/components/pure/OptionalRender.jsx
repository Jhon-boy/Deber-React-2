import React, { useState} from 'react'

//Login style
    let red = 0;
    let green = 200;
    let blue = 150;


 const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold'

 }
 const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'

 }



// Login  / Logout Buttons

const LoginButton = ({loginAction, propStyle}) =>{
    return(
        <button style={propStyle} onClick={loginAction}>Log In</button>
    )

}
const LoginOut = ({logoutAction, propStyle}) =>{
    return(
        <button style={propStyle} onClick={logoutAction}>Log out </button>
    )

}




function OptionalRender() {
    const[access, setAcces] = useState(false);
    const[nMessage, setNMessage ] = useState(0);

    const updateAcces = () =>{
        setAcces(!access);
    }

    const loginAction = () =>{
        setAcces(true)
    }
    const logoutAction = () =>{
        setAcces(false)
    }


    // ? (Expresion true) && expresion => se renderiza la expresion
    // ? (Expresion false) && expresion => se renderiza la expresion



    let optionalButton ;

    // if(access) {
    //     optionalButton = <button onClick={updateAcces}>Log Out</button>
    // } else{
    //     optionalButton = <button onClick={updateAcces}>Log In</button>
    // }
    if(access) {
        optionalButton = <LoginOut  propStyle={unloggedStyle} logoutAction={logoutAction}></LoginOut>
    } else{
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction }></LoginButton>
    }

    // Unread messages

    let AddMessages = () =>{
        setNMessage(nMessage +1)
    }

  return (
    <div>
    {/* OPtional Button */}
        { optionalButton}

        {/* N Mesagges unread */}

        {/* { nMessage > 0  && <p>You have {nMessage} new Mesagges </p>}
        {nMessage === 0  && <p>There are no new Messages</p>}  */}

        {/* OPERADOR TERNARIO */}
        { access ? (
            <div>
            
        {nMessage > 0  ? <p>You have {nMessage} new Mesagge{nMessage > 1 ? 's' : null}</p> :<p>There are no new Messages</p>}    
        <button onClick={AddMessages}>{ nMessage ===0 ? 'Add your first Message' : 'Add new Message'}</button>
            </div>
        ): null}

        {/* {nMessage > 0  ? <p>You have {nMessage} new Mesagge{nMessage > 1 ? 's' : null}</p> :<p>There are no new Messages</p>} */}


       
    </div>
  )
}

export default OptionalRender