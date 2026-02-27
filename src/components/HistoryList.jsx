import React  from 'react'
function HistoryList ({historial}) {
    return (
        <div>
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

