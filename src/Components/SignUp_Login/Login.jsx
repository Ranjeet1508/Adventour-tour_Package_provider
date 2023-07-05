import React from 'react';
import { useState } from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Input,
    Heading,
    IconButton
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import style from './Login.module.css';

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [err, setErr] = useState(false);
    const [theme, setTheme] = useState('light');

    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    const handleSubmit = () => {
        if (user.email === "" || user.password === "") {
            setErr(true);
            return;
        }

    }

    return (
        <div className={theme === 'light' ? style.light : style.dark}>
            <div className={style.card}>
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
                        <Input type='email' variant='flushed' onChange={(e) => {
                            setUser({ ...user, email: e.target.value })
                        }} required/>
                        {
                            err ? <FormErrorMessage>Email is required.</FormErrorMessage>
                                : ""

                        }

                        <FormLabel className={style.label}><Heading size='md'>Password</Heading></FormLabel>
                        <Input type='password' variant='flushed' onChange={(e) => {
                            setUser({ ...user, password: e.target.value })
                        }} required/>

                        <Button className={style.button} type="submit">
                            Submit
                        </Button>
                    </FormControl>
                </form>
            </div>
        </div>
    )
}

export default Login