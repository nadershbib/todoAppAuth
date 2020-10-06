import React from 'react';
import './Button.scss';

export default function Button({children,variant}) {
    

    return (
        <>
            <button className={variant}>{children}</button>
        </>
    )
}
