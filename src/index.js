import React from 'react';
import ReactDOM from 'react-dom';


class Clock extends React.Component{
    render() {
        return(
        
    <h1 className="heading">
        <span className="text">Hello {new Date().toLocaleTimeString()} </span>      
    </h1>
    );
        
    
    }
}    

ReactDOM.render(<Clock locale='bn-BD'></Clock>, document.getElementById('root'));



