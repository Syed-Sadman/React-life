import React, { Component } from 'react'



const withCounter=(OriginalComponent)=>{
    

    class NewComponent extends Component {
        state = {
        count:0         
        }
        
        increment=()=>{
            this.setState((prevState)=>{return{count: prevState.count+1}})

            
        }
    
        render() {
            const {count}=this.state;
            return <OriginalComponent count={count} increment={this.increment}/>
        }
    }
    return NewComponent;

}


export default withCounter;
