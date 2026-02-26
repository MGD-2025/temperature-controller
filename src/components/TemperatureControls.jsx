import React  from 'react'
import {useState} from 'react';


function TemperatureControls({incrementarTemperatura, decrementarTemperatura, resetearTemperatura}) { 
    return (
    <div>
        <button onClick={incrementarTemperatura}> Incrementar</button>
        <button onClick={decrementarTemperatura}> Decrementar </button>
        <button onClick={resetearTemperatura}> Resetear </button>
    </div>
    );

}

export default TemperatureControls;