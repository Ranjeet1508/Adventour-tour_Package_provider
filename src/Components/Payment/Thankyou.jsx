import { Box, Button, Center, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import success from './Images/success.gif'

function Thankyou() {
    const navigate = useNavigate();
    const [sec, setsec] = useState(5);
    // const ref = useRef(null);
    // const ref2 = useRef(null);

    // useEffect(()=>{

    //    ref.current= setInterval(()=>{
    //         setsec(pre=>pre-1);
    //     },1000)

    //     ref2.current=setTimeout(()=>{
    //         navigate('/')
    //     },6000)

    //     return ()=>{
    //         clearInterval(ref.current)
    //         clearTimeout(ref2.current)
    //     }
    // },[])

    return (
        <Flex h={'100vh'} bg={'gray.200'} py={'60px'} 
         backgroundImage="url('https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80')"
        backgroundSize="cover"
        backgroundPosition="center"
        justifyContent={'space-around'} align={'center'}
        >
        <Flex  display={'column'} my={'auto'} borderRadius={'15px'} px={'50px'} boxShadow={'md'} bg={'#2f516c'} h={'75vh'} w={'70%'} mx={'auto'} justifyContent={'space-around'} align={'center'}>
            <Box  marginTop={'150px'}  >
                <Image   src={success} w={'70px'} m={'auto'} />
                <Text textAlign={'Center'} fontSize={'40px'} fontWeight={'700'} fontFamily={'unset'} color={'green.500'}>Booking Confirmed !</Text>
                <Text color={'gray.500'} textAlign={'Center'}>Thankyou for making the purchance
                    <br />
              </Text>
                    
            </Box>
            <Center marginTop={'50px'}>
            <Link to={'/'}>
             <Button>Go To Home</Button>
            </Link>
            </Center>
            {/* <Box ></Box> */}
            {/* <Image display={{base:'none', md:'inline-block'}} borderLeft={'2px dashed silver'} w={'40%'} src='https://img.freepik.com/premium-vector/young-happy-man-tourist-flat-cartoon-character-traveling-male-people-summer-vacation-trip-isolated-white-background_37895-959.jpg'/> */}
        </Flex>
    </Flex>
    )
}

export default Thankyou