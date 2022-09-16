// import React from 'react'
import './FormInp.css'


const FormInput = (props) => {
    return(
        <div className='FormInp'>
            <input placeholder={props.placeHolder} />
        </div>
    )
}

export default FormInput