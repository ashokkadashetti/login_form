import React, {useState, useEffect} from 'react';
import axios from 'axios'
const arrObj = []


function RegForm({arr}) {

    const [details, setDetails]  = useState({name:'', email:'', password:''});
    const [error, setError] = useState('')
    const [count, setCount] = useState(0)
    
    const sumbitHandler = (e) => {
        e.preventDefault()
        console.log(arr.length);
        // console.log(details);
       
        // var num = 101
        // const users = {
        //         id: num,
        //         userId: 1,
        //         title : details.name,
        //         body: details.email
        //     }
        //     num = num + 1

        // axios.post('https://jsonplaceholder.typicode.com/posts', users)
        // .then(res => {
        //     console.log(res);
        // })
        // .catch(err => {
        //     console.log(err);
        // })
        // console.log('posted');
        
    }

    const emailValidation = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(details.name == '' || details.email == '' || details.password == ''){
            setError('fields should not empty')
            return false;
        }
        
        if(regex.test(details.email) === false){
            setError('"Email is not valid"');
            return false;
        }
        return true;
    }

    const onSubmited = () => {
        if(emailValidation()){
            setError('')
        
            const data = arr.find(user => {
                if(user.name == details.name && user.email == details.email && user.password == details.password){
                    return true
                }
            })

            const flag = data ? true : false

            if(flag){
                setError('User alrady present')
            }else{
                console.log(arr.length);
                arr.push(details)
                setError('')
                console.log(arr.length);
            }
        }
    }

    useEffect(() => {
        setCount((count) => count + 1)
    }, [arrObj.length])

    return (
        <form onSubmit={sumbitHandler}>
            {error}
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
            <button onClick={onSubmited}>submit</button>
        </form>
    );
}

export default RegForm;
