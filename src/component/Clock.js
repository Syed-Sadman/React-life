import React from 'react';



class Clock extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         date : new Date()
    //     };
    //as no props are passed and we didn't use any props to change the state so we can only call the state
        state={date : new Date()};

    


    componentDidMount(){
       this.clockClear = setInterval(()=>{
            this.tick()
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.clockClear);

    }


    tick(){
        this.setState({
            date:new Date()
        });

    }


    render() {
        return(
        
    <h1 className="heading">
        <span className="text">Hello {this.state.date.toLocaleTimeString(this.props.locale)} </span>      
    </h1>
    );
        
    
    }
}  

export default Clock;