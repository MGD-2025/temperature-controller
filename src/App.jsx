import React  from 'react'
import TemperatureControls from './components/TemperatureControls';
import TemperatureDisplay from './components/TemperatureDisplay';
import {useState} from 'react';


// import TemperatureDisplay from './components/TemperatureDisplay';
// import HistoryList from './components/HistoryList';


function App() {
  const [temperatura, setTemperatura] = useState (20)
    const incrementarTemperatura = () =>{
      setTemperatura(temperatura+1)
    }
    const decrementarTemperatura =()=>{
      setTemperatura(temperatura-1)
    }
   const resetearTemperatura = () => {
     setTemperatura(20);
   }
    return(
      <div className='app'>
        <h1>Controlador Temperatura</h1>
        <TemperatureDisplay temperatura={temperatura}/>
        <TemperatureControls 
          incrementarTemperatura ={incrementarTemperatura}
          decrementarTemperatura ={decrementarTemperatura}
          resetearTemperatura = {resetearTemperatura}
        />
</div>

    )
}
export default App;

