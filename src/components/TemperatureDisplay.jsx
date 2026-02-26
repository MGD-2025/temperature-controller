import React  from 'react'

function TemperatureDisplay({temperatura}) {
    let mensaje='';
    let color='';
    if(temperatura < 15) {
        mensaje="hace frio";
        color="blue";}
    else if (temperatura <= 25)
        {
        mensaje="temperatura agradable";
        color="green"
        }
    else
         {
        mensaje="hace calor";
        color="red";
    }
     return (
    <div>
      <h2 style={{ color }}>
        {temperatura} °C
      </h2>
      <p>{mensaje}</p>
    </div>
  );
}

export default TemperatureDisplay;