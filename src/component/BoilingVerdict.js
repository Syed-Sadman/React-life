import React from 'react'

function BoilingVerdict({celsius}){

    if(celsius>=100){
        return(
            <p>Water Would boil</p>
        )
    }else{
        return(
            <p>Water would not boil </p>
        )
    }
    
}

export default BoilingVerdict
