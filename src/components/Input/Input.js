import React from 'react'

function Input({variant}) {
    return (
        <>
           <div className={variant}>
                <input type="text" placeholder="add Item ..." />
           </div> 
        </>
    )
}

export default Input
