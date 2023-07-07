import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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

const Login = () => {
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

    /* const allUsers = useSelector((store)=>{
        return store.allUsers
    }) */
    /* const allUsers = [
        {
            email : 'anannyasaikia1998@gmail.com',
            password : 'password'
        },
        {
            email : 'as@gmail.com',
            password : 'as'
        },
        {
            email : 'anygreen@email.com',
            password : 'anygreen'
        }
    ] */

    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    const isValidated = () => {
        const filteredData = allUsers.filter((ele, i)=>{
            return ele.email === user.email && ele.password === user.password
        })
        console.log(filteredData);
        if(filteredData.length !== 0) return true;
        else return false;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(allUsers);

        if (user.email === "" || user.password === "") {
            setErr(true);
            return;
        }
        if(isValidated()){
            toast({
                title: 'Login Successful.',
                description: "You've successfully logged into your account.",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
            navigate('/');
        }else{
            toast({
                title: 'Login Failed.',
                description: "Wrong Credentials.",
                status: 'error',
                duration: 3000,
                isClosable: true,
              })
        }
    }

    useEffect(()=>{
        axios.get(`https://adventour-allusers.onrender.com/allUsers`)
        .then((res)=>{
            console.log(res.data);
            setAllUsers(res.data);
            dispatch(handleSetUsers(res.data));
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [dispatch, allUsers])

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
                        }} required/>
                        {
                            err ? <FormErrorMessage>Email is required.</FormErrorMessage>
                                : ""

                        }

                        <FormLabel className={style.label}><Heading size='md'>Password</Heading></FormLabel>
                        <Input type='password' variant='flushed' placeholder='********' onChange={(e) => {
                            setUser({ ...user, password: e.target.value })
                        }} required/>

                        <Button className={style.button} type="submit" colorScheme='blue'>
                            Submit
                        </Button>
                    </FormControl>

                    <div className={style.foot}>
                        <p>Do not have an account?</p><Link to='/signup' style={{color : theme === 'light' ? "blue" : "lightblue"}}>Register here</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login