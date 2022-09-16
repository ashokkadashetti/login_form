import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetchTwo() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            setLoading(false)
            setError('')
            setPost(response.data)
        })
        .catch((error) => {
            setLoading(false)
            setError('Somthing went wrong!!')
            setPost({})
        })
    },[])

  return (
    <div>
      {loading ? 'Loading....' : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchTwo;
