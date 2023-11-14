import React from "react";

function App() {
    
    const date = new Date();
    const [time , setDate] = React.useState(date.toLocaleTimeString());
    
    function getTime(){
        setDate(new Date().toLocaleTimeString());
    }

    setInterval( getTime ,1000);

    return (
        <div>
            <h1>Clock <span>( My First Web App ! )</span></h1>
            <h1>{time}</h1>
            <h1>{date.toLocaleDateString()}</h1>
        </div>
    );
}

export default App;
