import React  from 'react'
function HistoryList ({historial}) {
    return (
        <div>
        <h2>Historial</h2>
            <ul> 
             {historial.map((item, index) => (
                <li key={index}>
                    [{item.fecha}] → {item.nuevaTemperatura} °C
                </li>
        ))}
            </ul>
        </div>
        

    
    );
}

export default HistoryList;

