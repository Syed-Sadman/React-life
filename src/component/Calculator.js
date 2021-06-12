import React, { Component } from 'react'
import BoilingVerdict from './BoilingVerdict'
import TempInput from './TempInput'
import {convert,toCelsius,toFahrenheit} from '../lib/converter';
class Calculator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             temperature:'',
             scale:'c'
        }
    }
    
    handleChange=(e,scale)=>{
        this.setState({
            temperature:e.target.value,
            scale
        });
    };
    

    render() {
    const {temperature,scale}=this.state;
    const celsius=scale==='f'?convert(temperature,toCelsius):temperature;
    const fahrenheit=scale==='c'?convert(temperature,toFahrenheit):temperature;

        return (
            <div>
                
                <TempInput scale="c" temperature={celsius} onTemperatureChange={this.handleChange}/>
                <TempInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleChange}/>
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </div>
            

        );

    }
}

export default Calculator
