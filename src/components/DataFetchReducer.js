import React,{useEffect, useReducer} from 'react';
import axios from 'axios';

const intitialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCES':
            return{
                loading: false,
                error: '',
                post: action.payload
            }
        case 'FETCH_ERROR':
            return{
                loading: false,
                error:'Somthing went wrong',
                post: {}
            }
        default:
            return state
    }
}


function DataFetchReducer() {
    
    const [state, dispatch] = useReducer(reducer, intitialState)

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            dispatch({type: 'FETCH_SUCCES', payload: response.data})
        })
        .catch((err) => {
            dispatch({type:'FETCH_ERROR'})
        })
    })

  return (
    <div>
      {state.loading ? 'Loading...' : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchReducer;
