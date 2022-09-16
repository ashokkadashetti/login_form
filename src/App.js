// import logo from './logo.svg';
import './App.css';
import FormInput from './components/FormInput';
import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import RegForm from './components/RegForm';
import CounterHook from './components/CounterHook';
import DataFetch from './components/DataFetch';
import ComponentA from './components/ComponentA';
import ReducerUse from './components/ReducerUse';
import ReducerUserTwo from './components/ReducerUserTwo';
import CounterThree from './components/CounterThree';
import DataFetchTwo from './components/DataFetchTwo';
import DataFetchReducer from './components/DataFetchReducer';
import CallBack from './components/CallBack';
import Memo from './components/Memo';
import FocusInput from './components/FocusInput';
import DropDown from './components/DropDown';
import UseRefHook from './components/UseRefHook';
import UseRefTarck from './components/UseRefTarck';
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  const ArrayData = [{name: "Ashok", email: 'ashok@gmail.com', password:'12345'},
                     {name: "Ak", email: 'ashok1@gmail.com', password:'12345'},
                     {name: "Abk", email: 'ashok12@gmail.com', password:'12345'},
                     {name: "Abkk", email: 'ashok123@gmail.com', password:'12345'}]
                     
  const adminUser = {
    email: 'ashok@gmail.com',
    password: '12345'
  }

  const [user, setUser] = useState({name:"", email:""})
  const [error, setError] = useState('')

  const login = (details) => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log('LoggedIn');
      setUser({
        name: details.name,
        email: details.email
      })
    }else{
      console.log('Details do not match');
      setError('Details do not match')
    }
  }

  const logout = () => {
    setUser({name:'', email:''})
  }

  return(
    <div className='App'>
      <UseRefTarck />
      {/* <UseRefHook /> */}
      {/* <DropDown /> */}
      {/* <FocusInput /> */}
      {/* <Memo /> */}
      {/* <CallBack /> */}
      {/* <DataFetchReducer /> */}
      {/* <DataFetchTwo /> */}
      {/* <CounterThree /> */}
      {/* <ComponentA /> */}
      {/* <ReducerUserTwo /> */}
      {/* <ReducerUse /> */}
      {/* <ComponentA /> */}

      {/* <UserContext.Provider value={'Ashok'}>
        <ChannelContext.Provider value={'Softsuave'}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      
      {/* <ComponentA /> */}
      {/* <DataFetch /> */}
      {/* <CounterHook /> */}
      
      {/* <RegForm arr ={ArrayData} /> */}
      {/* {(user.email != "") ? (
        <div className='welcome'>
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <LoginForm login={login} error={error}/>
      )} */}
    </div>
  )

  // const adminUser = {
  //   email: 'ashok@gmail.com',
  //   password:'12345'
  // }

  // const [user, setUser] = useState({name:'', email:''});
  // const [error, setError] = useState('');

  // const login = (details) => {
  //   console.log(details);
  // }

  // const logout  = () => {
  //   console.log('logout');
  // }

  // return (
  //   <div className="App">
  //     {(user.email != "") ? (
  //       <div className='welcome'>
  //         <h2>welcome, <span>{user.name}</span></h2>
  //         <button>logout</button>
  //       </div>
  //     ) : (
  //       <LoginForm login={login} error={error}/>
  //     )}
  //   </div>
  // );
}

export default App;
