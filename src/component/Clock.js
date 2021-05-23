import React from 'react';



class Clock extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         date : new Date()
    //     };
    //as no props are passed and we didn't use any props to change the state so we can only call the state
        state={
            date : new Date(),
            locale:'bn-BD'
        };

    


    componentDidMount(){
       this.clockTimer = setInterval(()=>{
            this.tick()
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.clockTimer);

    }


    tick(){
        this.setState({
            date:new Date()
        });

    }


    handleEvent=()=>{
        this.setState({
            locale:'en-US'
        })
    }


    render() {
        const {date}=this.state;
        return(
        <div>
            <h1 className="heading">
               <span className="text">Hello {date.toLocaleTimeString(this.state.locale)} </span>      
            </h1>
            <button onClick={this.handleEvent}>Click here</button>
        </div>
        
    );
        
    
    }
}  

export default Clock;