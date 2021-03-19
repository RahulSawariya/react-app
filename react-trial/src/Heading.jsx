import React from 'react';

function Heading(){
    return(
        <>
        <h1 className={temp}> It's a Function.</h1>
        <h1 className={trial}>Hello World!!!</h1>
        <img src="https://picsum.photos/200"  alt="Random Image"></img>
        </>
    )
}

function Heading2(){
    return(
        <h1> It's a Function2.</h1>
    )
}

function App(){
    return(
        <>
        <Heading/>
        <Heading2/>
        </>
    )
}
export default App;
