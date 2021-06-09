import React from 'react'

class Button extends React.Component {
    render() {
        // console.log("button comp rendered");
        const{change,locale}=this.props;
        return (
            <div>
                <button type="button" onClick={()=>{change(locale)}}>Click here</button>
            </div>
        )
    }
}

export default Button;
