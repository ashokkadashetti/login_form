import React,{useState} from 'react'

function DropDown() {
    const [country, setCountry] = useState('india')
    
    console.log(country);

    const changeHandler = (event) => {
        setCountry(event.target.value)
    }

  return (
    <div>
        <select value={country} onChange={changeHandler}>
            <option value='india'>India</option>
            <option value='china'>China</option>
            <option value='japan'>Japan</option>
            <option value='america'>America</option>
            <option value='englend'>Englend</option>
        </select>
    </div>
  )
}

export default DropDown