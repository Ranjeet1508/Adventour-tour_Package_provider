import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
/* import { useSelector } from 'react-redux'; */
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Input,
    Heading,
    IconButton,
    useToast
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import style from './Login.module.css';
import axios from 'axios';
import { handleSetUsers } from '../../Redux/SignUpRedux/signupAction';
import { handleAuth, handleUser } from '../../Redux/action';

const Login = () => {
    const isAuth = useSelector((data) => data.isAuth);
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [err, setErr] = useState(false);
    const [theme, setTheme] = useState('dark');
    const [allUsers, setAllUsers] = useState([]);

    const navigate = useNavigate();
    const toast = useToast();
    const dispatch = useDispatch();


    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

 

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('https://real-erin-chameleon-hem.cyclic.app/user/login',
            user
          )
          .then(function (response) {
            console.log(response.data);
            if(response.data.msg==="Login Successfull"){
               
            toast({
                title: 'Login Successful.',
                description: "You've successfully logged into your account.",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            localStorage.setItem("token", response.data.token);
            let name = response.data.name;
            dispatch(handleAuth(!isAuth))
            dispatch(handleUser(name));
            console.log(isAuth);
            setTimeout(() => {
                navigate('/');
            },2000)
            
        }
        else{
            toast({
                title: 'Login Failed.',
                description: "Wrong Credentials or user doesn't exist.",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
          })
          .catch(function (error) {
            console.log(error);
            toast({
                title: 'Login Failed.',
                description: "Wrong Credentials.",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        });
    }
    

    // useEffect(()=>{
    //     axios.get(`https://localhost:8080/user/login`)
    //     .then((res)=>{
    //         console.log(res.data);
    //         setAllUsers(res.data);
    //         dispatch(handleSetUsers(res.data));
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }, [])

    return (
        <div className={theme === 'light' ? style.light : style.dark}>
            <div className={theme === 'light' ? style.lightcard : style.darkcard}>
                <form onSubmit={handleSubmit}>
                    <div className={style.heading}>
                        <Heading className={style.title}>Log In</Heading>
                        <IconButton className={style.iconButton}
                            colorScheme='black'
                            aria-label='Search database'
                            onClick={handleTheme}
                            icon={theme === 'light' ? <MoonIcon /> : <SunIcon />}
                        />
                    </div>
                    <FormControl>
                        <FormLabel className={style.label}><Heading size='md'>Email address</Heading></FormLabel>
                        <Input type='email' variant='flushed' placeholder="example@example.com" onChange={(e) => {
                            setUser({ ...user, email: e.target.value })
                        }} required />
                        {
                            err ? <FormErrorMessage>Email is required.</FormErrorMessage>
                                : ""

                        }

                        <FormLabel className={style.label}><Heading size='md'>Password</Heading></FormLabel>
                        <Input type='password' variant='flushed' placeholder='********' onChange={(e) => {
                            setUser({ ...user, password: e.target.value })
                        }} required />

                        <Button className={style.button} type="submit" colorScheme='blue'>
                            Submit
                        </Button>
                    </FormControl>

                    <div className={style.foot}>
                        <p>Do not have an account?</p><Link to='/signup' style={{ color: theme === 'light' ? "blue" : "lightblue" }}>Register here</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login