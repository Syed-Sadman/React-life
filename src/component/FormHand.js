import React, { Component } from 'react'

class FormHand extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: "JavaScript"
        }
    }
    
    handleVal=(e)=>{
        console.log(e.target.value);
        this.setState({
            title:e.target.value
        })
    }

    render() {
        const {title}=this.state;
        return (
            <div>
                <form>
                    <input type="text" placeholder="Name" value={title} onChange={this.handleVal}></input>    
                </form>                
            </div>
        )
    }
}

export default FormHand;
