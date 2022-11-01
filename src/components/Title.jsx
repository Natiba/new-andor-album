import React from 'react';
import '../style-sheets/Title.css'


function Title({title}) {
    return (
        <h1 className="title animate-charcter">{title}</h1>
    )
}

export default Title;