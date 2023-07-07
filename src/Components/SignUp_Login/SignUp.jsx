import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleAdd } from '../../Redux/SignUpRedux/signupAction';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    FormControl,
    Checkbox,
    IconButton,
    Input,
    Heading,
    Button,
    FormHelperText,
    FormErrorMessage,
    useToast
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import style from './SignUp.module.css';


const SignUp = () => {
    const dispatch = useDispatch();
    const [theme, setTheme] = useState('dark');
    const [flag, setFlag] = useState(true);

    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: ""
    })

    const [pw, setPw] = useState({
        p1: "",
        p2: ""
    })

    /* const [isEqual, setEqual] = useState(false); */
    const isError = user.password === ''
    const toast = useToast();
    const navigate = useNavigate();

    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    const handleSubmit = (e) => {
        console.log(user);
        console.log(pw);
        e.preventDefault();
        if (pw.p1 === pw.p2 && pw.p1 !== '' && pw.p2 !== '') {
            /* setEqual(true); */
            setUser({ ...user, password: pw.p1 });
            dispatch(handleAdd(user));
            toast({
                position: 'bottom-left',
                render: () => (
                    <Box color='white' p={3} bg='blue.500'>
                        Registered Successfully!
                    </Box>
                ),
            })
            navigate('/login');

        } else if (pw.p1 === '' || pw.p2 === '') {
            /*  setEqual(false); */
            toast({
                title: `password cannot be empty string`,
                status: 'error',
                isClosable: true,
            })
            return;
        } else {
            toast({
                title: `password do not match`,
                status: 'error',
                isClosable: true,
            })
            return;
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

                <form className={style.form} onSubmit={handleSubmit}>
                    <FormControl>
                        {/* <FormLabel className={style.label}>Full Name</FormLabel> */}
                        <Input className={style.input} size='lg' variant='flushed' type='text' name='fullName' placeholder='Enter Full Name'
                            onChange={(e) => {
                                setUser({ ...user, [e.target.name]: e.target.value })
                            }} />

                        {/* <FormLabel className={style.label}>Email address</FormLabel> */}
                        <Input className={style.input} size='lg' variant='flushed' type='email' name="email" placeholder='Enter Email Address'
                            onChange={(e) => {
                                setUser({ ...user, [e.target.name]: e.target.value })
                            }} />

                        {/* <FormLabel className={style.label}>Password</FormLabel> */}
                        <Input className={style.input} size='lg' variant='flushed' type='password' placeholder='Enter Password'
                            onChange={(e) => {
                                setPw({ ...pw, p1: e.target.value })
                            }} />

                        {/* <FormLabel className={style.label}>Confirm Password</FormLabel> */}
                        <Input className={style.input} size='lg' variant='flushed' type='password' name="password" placeholder='Confirm Password'
                            onChange={(e) => {
                                setPw({ ...pw, p2: e.target.value })
                            }} />
                        {/* <FormHelperText>Password must be atleast 7 characters</FormHelperText> */}
                        {!isError ? (
                            <FormHelperText>
                                Enter the email you'd like to receive the newsletter on.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}
                        <Checkbox className={style.checkbox} size='md' colorScheme='blue' onChange={(e) => {
                            e.target.checked ? setFlag(false) : setFlag(true)
                        }}>
                            I accept the terms and coditions
                        </Checkbox>

                    </FormControl>
                    <Button className={style.button} isDisabled={flag} type='submit'>
                        Register
                    </Button>
                </form>
            </div>


        </div>
    )
}

export default SignUp