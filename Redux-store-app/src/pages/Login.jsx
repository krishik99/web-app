import React, { useRef,useEffect, useState } from 'react'
import { useAuth } from '../utilities/AuthContext';
import { Form, useNavigate } from 'react-router-dom';
import LoginStyle from './loginStyle.module.css';
import shopNow from '../assets/Explore.png';
import Toastr from '../utilities/Toastr';
import {useErrorBoundary} from 'react-error-boundary';
export const Login = () => {
    const {showBoundary} = useErrorBoundary();
    const ref = useRef();
    const {setLoggedIn,loggedIn} = useAuth();
    const [allUsers,setAllUsers] = useState([]);
    const [showError,setShowError] = useState(false);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        try{
            e.preventDefault();
            if(allUsers && allUsers.length){
               const user = allUsers.filter(user => {
                   return (user.username.toUpperCase() === e.target[0].value.toUpperCase() && 
                    user.password.toUpperCase() === e.target[1].value.toUpperCase())
                })
                if(user && user.length){
                    setLoggedIn(user[0]);
                    setShowError(false);
                }else{
                    setShowError(true);
                    
                }
            }
        }catch(e){
            showBoundary(e)
        }

    }
    useEffect(() => {
       async function getUsers(){
        try{
            const users_ALL = await fetch('https://fakestoreapi.com/users');
            const usersData = await users_ALL.json();
            setAllUsers(usersData);
        }catch(error){
            showBoundary(error)
        }

        }
      getUsers();
    }, [])

    const closeToastr = (arg) => {
        if(arg === 'close'){
            navigate('/home')
        }
    }
  return (
    
    <>
        {
            <div className='credentials'>This is a sample app, Please use credentials from the shown list &nbsp; <br/>{allUsers.map(user=><div key={user.username}>{'UserName : '+user.username +' Password : '+ user.password}</div>)}</div>
        }
    <div className={LoginStyle.container_login}>
        <Form className={LoginStyle.form} ref={ref} onSubmit={handleLogin}>
            <div><img style={{width:'150px',borderRadius:'50%'}} src={shopNow} alt='explore'/></div>
            <div>
                <input type='text' name='userName' placeholder='username'/>
            </div>
            <div>
                <input type='password' name='password' placeholder='password'/>
            </div>
            <div>
                <button type='submit'>Login</button>
            </div>
            
            { 
            showError ? <span style={{color:'Red',padding:'0.5em',position:'absolute',bottom:'4.5em',fontSize:'14px'
            }}>
                
            Invalid Credentials! Username or Password is incorrect</span> : ''
            }
        </Form>
    </div>
    {
    loggedIn && <Toastr type='login' message="Logged in Successfully!..." toasterClosed={closeToastr}/>
    }
    </>
  )
}
