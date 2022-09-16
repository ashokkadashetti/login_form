import React from "react";

function FormTags({details}){
    return(
        <div>
            <div>
                <label htmlFor='name'>Name : </label>
                <input type='text' name='name' id='name' onChange={e => setDetails({...details, name: e.target.value})} value={details.name}></input>
            </div>
            <div>
                <label htmlFor='email'>Email : </label>
                <input type='text' name='email' id='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
            </div>
            <div>
                <label htmlFor='password'>Password : </label>
                <input type='text' name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
            </div>
        </div>
    )
}

export default FormTags