import React, {useState, useEffect, useRef} from 'react';

function UseRefTarck() {
    
    const [name, setName] = useState('')
    const privValue = useRef('')

    useEffect(() => {
        privValue.current = name
    }, [name])

  return (
    <div>
        <div>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <h2>Render name - {name}</h2>
        <h2>Render privValue - {privValue.current}</h2>
    </div>
  );
}

export default UseRefTarck;
