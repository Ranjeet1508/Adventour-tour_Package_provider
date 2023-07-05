import React from 'react';
import { useState } from 'react';
import {
    FormControl,
    Checkbox,
    IconButton,
    Input,
    Heading,
    Button
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import style from './SignUp.module.css';


const SignUp = () => {
    const [theme, setTheme] = useState('dark');
    const [flag, setFlag] = useState(true);

    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    return (
        <div className={theme === 'light' ? style.SignUpLight : style.SignUpDark}>
            <div className={style.signUpCard}>
                <div className={style.heading}>
                    <Heading className={style.title}>Sign Up</Heading>
                    <IconButton className={style.iconButton}
                        colorScheme='black'
                        aria-label='Search database'
                        onClick={handleTheme}
                        icon={theme === 'light' ? <MoonIcon /> : <SunIcon />}
                    />
                </div>

                <form className={style.form}>
                    <FormControl>
                        {/* <FormLabel className={style.label}>Full Name</FormLabel> */}
                        <Input className={style.input} size='lg' variant='flushed' type='text' placeholder='Enter Full Name' />

                        {/* <FormLabel className={style.label}>Email address</FormLabel> */}
                        <Input className={style.input} size='lg' variant='flushed' type='email' placeholder='Enter Email Address'/>

                        {/* <FormLabel className={style.label}>Password</FormLabel> */}
                        <Input className={style.input} size='lg' variant='flushed' type='password' placeholder='Enter Password'/>

                        {/* <FormLabel className={style.label}>Confirm Password</FormLabel> */}
                        <Input className={style.input} size='lg' variant='flushed' type='password' placeholder='Confirm Password'/>

                        <Checkbox className={style.checkbox} size='md' colorScheme='blue' onChange={(e)=>{
                            e.target.checked ? setFlag(false) : setFlag(true)
                        }}>
                            I accept the terms and coditions
                        </Checkbox>

                    </FormControl>
                    <Button className={style.button} isDisabled={flag}>
                        Register
                    </Button>
                </form>
            </div>


        </div>
    )
}

export default SignUp