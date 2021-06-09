import React from 'react';
import Button from './Button';



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


    handleEvent=(locale)=>{
        this.setState({
            locale
        });
        
    }


    render() {
        // console.log("clock comp rendered");
        const {date,locale}=this.state;         // when i destructure i don't need to write this.state.locale or this.state.date
       
        let butn;
        if(locale==='bn-BD'){
            butn=(<Button change={this.handleEvent} locale="en-US">CLick Here</Button>)
        }
        else{
            (<Button change={this.handleEvent} locale="bn-BD">CLick Here</Button>)
        }
       
       
       
        return(
        <div>
            <h1 className="heading">
               <span className="text">Hello {date.toLocaleTimeString(locale)} </span>      
            </h1>
            {butn}
            {/* {locale ==='bn-BD'? (<Button change={this.handleEvent} locale="en-US">CLick Here</Button>)
            :(<Button change={this.handleEvent} locale="bn-BD">CLick Here</Button>)
} */}
            {/* <Button change={this.handleEvent} locale="en-US">CLick Here</Button> */}
        </div>
        
    );
        
    
    }
}  

export default Clock;













