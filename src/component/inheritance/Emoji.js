import React, { Component } from 'react'

class Emoji extends Component {

    addEmoji=(text,emoji)=>{
      return ( `${emoji} ${text} ${emoji}`) 
    }

    render(override) {
        let text="this is javascript text"

        if(override) text=override;
        return (
            <div>
                {text}
            </div>
        )
    }
}

export default Emoji;
