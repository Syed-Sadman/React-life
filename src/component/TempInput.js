import React, { Component } from 'react'


const scaleName={
    c:'Celsius',
    f:'Fahrenheit'
}

class TempInput extends Component {
  


    render() {
        
        const {temperature,scale,onTemperatureChange}=this.props;
        return (
            <div>
            <fieldset>
                <legend>Enter Temperature in {scaleName[scale]}</legend>
                <input 
                
                type="text" 
                value={temperature} 
                onChange={(e)=>onTemperatureChange(e,scale)} />
            
            </fieldset>
            
            </div>
        );

    }
}

export default TempInput;
