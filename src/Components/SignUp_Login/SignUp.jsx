import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleAdd } from '../../Redux/SignUpRedux/signupAction';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    Box,
    FormControl,
    Checkbox,
    IconButton,
    Input,
    Heading,
    Button,
    useToast
} from '@chakra-ui/react';
import { SunIcon, MoonIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import style from './SignUp.module.css';


const SignUp = () => {
    const dispatch = useDispatch();
    const [theme, setTheme] = useState('dark');
    const [flag, setFlag] = useState(true);
    const [visiblility, setVisibility] = useState(false);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    /* const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: ""
    }) */

    /* const [pw, setPw] = useState({
        p1: "",
        p2: ""
    }) */

    /* const [isEqual, setEqual] = useState(false); */

    const toast = useToast();
    const navigate = useNavigate();

    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    const handleView = () => {
        setVisibility(!visiblility);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword && password !== '' && confirmPassword !== '') {

            const user = {
                fullName: fullName,
                email: email,
                password: password
            }

            console.log(user);

            axios.post(`https://adventour-allusers.onrender.com/allUsers`, user)
                .then((res) => {
                    console.log(res);
                    dispatch(handleAdd(user));
                })
                .catch((err) => {
                    console.log(err);
                })

            toast({
                position: 'bottom-left',
                render: () => (
                    <Box color='white' p={3} bg='blue.500'>
                        Registered Successfully!
                    </Box>
                ),
            })
            setTimeout(() => {
                navigate('/login');
            }, 2000)

        } else if (password === '' || confirmPassword === '') {
            /*  setEqual(false); */
            toast({
                title: `Password cannot be empty`,
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
            <div className={theme === 'light' ? style.signUpLightCard : style.signUpDarkCard}>
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
                        <Input className={style.input} size='lg' variant='flushed' type='text' name='fullName' placeholder='Enter Full Name' value={fullName}
                            onChange={(e) => {
                                setFullName(e.target.value)
                            }} />

                        {/* <FormLabel className={style.label}>Email address</FormLabel> */}
                        <Input className={style.input} size='lg' variant='flushed' type='email' name="email" placeholder='Enter Email Address' value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }} />

                        {/* <FormLabel className={style.label}>Password</FormLabel> */}
                        <div className={style.password}>
                            <Input className={style.input} size='lg' variant='flushed' type={visiblility ? 'text' : 'password'} placeholder='Enter Password' value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }} />
                            <IconButton
                                colorScheme='black'
                                aria-label='Search database'
                                onClick={handleView}
                                icon={visiblility ? <ViewIcon /> : <ViewOffIcon />} />
                        </div>

                        {/* <FormLabel className={style.label}>Confirm Password</FormLabel> */}
                        <Input className={style.input} size='lg' variant='flushed' type='password' name="password" placeholder='Confirm Password' value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value)
                            }} />
                        {/* <FormHelperText>Password must be atleast 7 characters</FormHelperText> */}
                        <Checkbox className={style.checkbox} size='md' colorScheme='blue' onChange={(e) => {
                            e.target.checked ? setFlag(false) : setFlag(true)
                        }}>
                            I accept the terms and coditions
                        </Checkbox>

                    </FormControl>
                    <Button className={style.button} isDisabled={flag} padding={"25px"} type='submit' colorScheme='blue'>
                        Register
                    </Button>
                </form>
            </div>


        </div>
    )
}

export default SignUp