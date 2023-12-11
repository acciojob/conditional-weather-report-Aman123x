
import React from "react";
import './../styles/App.css';

const App = () => {

  const weather={ temperature: 25, conditions: "Sunny"};
  const threshold=20;

  const tempColor=weather.temperature>threshold?"red":"blue";

  return (
    <div>
        {/* Do not remove the main div */}
        <p style={{color:tempColor}}>
            Temp:{weather.temperature}
        </p>
        <p>
          Conditions:{weather.conditions}
        </p>
    </div>
  )
}

export default App
