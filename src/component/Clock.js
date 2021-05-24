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


    handleEvent(){
        this.setState({
            locale:'en-US'
        });
        
    }


    render() {
        const {date,locale}=this.state;         // when i destructure i don't need to write this.state.locale or this.state.date
        return(
        <div>
            <h1 className="heading">
               <span className="text">Hello {date.toLocaleTimeString(locale)} </span>      
            </h1>
            <button onClick={this.handleEvent.bind(this)}>Click here</button>
        </div>
        
    );
        
    
    }
}  

export default Clock;