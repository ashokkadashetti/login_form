import React, {useState, useRef, useEffect} from 'react';

function UseRefHook() {
   
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

  return (
    <div>
        <div>
            <input type='text' ref={inputRef}/>
        </div>
    </div>
  );
}

export default UseRefHook;
