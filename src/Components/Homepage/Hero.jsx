import React, { useEffect, useState } from 'react'
import { Box, Flex, Text, Heading, Image, useToast, IconButton, Spacer, Divider, Center, HStack, Stack, Button, Grid, GridItem, AspectRatio, Menu, MenuButton, MenuList, MenuItem, Input } from '@chakra-ui/react'
import { Card, CardBody } from '@chakra-ui/react'
import { SlLocationPin, SlCalender } from 'react-icons/sl'
import { FiSearch } from 'react-icons/fi'
import { ArrowForwardIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import modelOne1 from './Images/modelTwo.png'
import iconOne from './Images/iconOne.png'
import iconTwo from './Images/iconTwo.png'
import iconThree from './Images/iconThree.png'
import iconFour from './Images/iconFour.png'
import modelTwo from './Images/modelTwo.png'
// import Footer from './Footer'
// import ReviewCarousel from './ReviewCarousel'
// import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from '../Firebase/Firebase'

function Hero() {

    const theme = true;
    const [location, setlocation] = useState('Place');
    const [date, setdate] = useState('');
    const navigate = useNavigate();
    const toast = useToast()

    

    const listfunc = () => {
        if (location === 'Place' || date === '') {
            toast({
                title: `Please select a location and a date`,
                status: "error",
                isClosable: true,
              })
          return;
        }
        navigate(`/tourlist/${location}`)
      }
  return (
    <div>
        
        <Flex p={{ base: '0 1.5rem', md: '0 3rem', lg: '0 4.5rem' }} flexDirection={{ base: 'column', md: 'column', lg: 'row' }} bg={theme ? '#101214' : '#edf2f7'}   >
          <Box w={{ base: '90%', md: '80%', lg: '50%' }} >
            <Text fontWeight='500' color={theme ? '#3DC6EF':'#008cc9'}>All you need is Adventour.</Text>

            <Flex>
              <Heading fontSize='3.6rem' fontWeight='600' color={theme ?  'white' : '#191b1d'}>
                Let's Enjoy Your Life, Explore Beautiful
                <HStack>
                  <Text color={theme ? "#3DC6EF" : "#008cc9"}>
                    Places.
                  </Text>
                  <Image boxSize='3rem' src='https://em-content.zobj.net/thumbs/160/apple/81/rocket_1f680.png' />
                </HStack>
              </Heading>
            </Flex>

            <Text p='2rem 0' color={theme ? 'darkgray' : 'gray'}  >
              We are travel agency giving you marvelous experience. So, get your ticket with low price to your favourite destination.
            </Text>


            {/* datebox */}
            <Center ml={{base:"30px", md: "0" ,lg :"0"}}>
            <Flex w={{ base: '100%', md: '100%', lg: '100%' }} flexDirection={{ base: 'column', md: 'row', lg: 'row' }} bg={theme ? '#191b1d' : 'white'} borderRadius='1.2rem' p='1.5rem' mt='2rem' alignContent={{base: 'center' }}>
              <Box w='100%'>
                <Flex gap={2} align='center'>
                  <IconButton icon={<SlLocationPin />} bg={theme ? 'rgb(36,45,54)' : 'gray.600'} size='xs' color='#3DC6EF' borderRadius='50%' fontSize='0.8rem' />
                  <Text color={theme ? 'darkgray' : 'blackAlpha.900'} fontWeight='500'>Location</Text>
                </Flex>
                {/* this one */}
                <Menu _hover={{ bg: "#191b1d" }}>
                  <MenuButton ml='1rem' variant='ghost' as={Button} colorScheme='none' rightIcon={<ChevronDownIcon />} _hover={theme ? { bg: "#191b1d" } : { bg: "whiteAlpha.100" }}  color={theme ?  'white' : '#191b1d'}>
                    {location}
                  </MenuButton>
                  <MenuList bg={theme ? '#191b1d' : 'white'} border='none' _hover={theme ? { bg: "#191b1d" } : { bg: "white" }}>
                    <MenuItem bg={theme ? '#191b1d' : 'white'} onClick={() => { setlocation('Asia') }} color={theme ?  'white' : '#191b1d'}>Asia</MenuItem>
                    <MenuItem bg={theme ? '#191b1d' : 'white'} onClick={() => { setlocation('Europe') }}  color={theme ?  'white' : '#191b1d'}>Europe</MenuItem>
                    <MenuItem bg={theme ? '#191b1d' : 'white'} onClick={() => { setlocation('Latin_America') }}  color={theme ?  'white' : '#191b1d'}>Latin America</MenuItem>
                    <MenuItem bg={theme ? '#191b1d' : 'white'} onClick={() => { setlocation('Africa') }}  color={theme ?  'white' : '#191b1d'}>Africa</MenuItem>
                  </MenuList>
                </Menu>
              </Box>

              <Center height='50px'>
                <Divider display={{ base: 'none', md: 'block', lg: 'block' }} orientation='vertical' />
              </Center>

              <Box w='100%' pl={{ base: '0rem', md: '2rem', lg: '2rem' }}>
                <Flex gap={2} align='center'>
                  <IconButton icon={<SlCalender />} bg={theme ? 'rgb(36,45,54)' : 'gray.600'} size='xs' color='#3DC6EF' borderRadius='50%' fontSize='0.8rem' />
                  <Text color={theme ? 'darkgray' : 'blackAlpha.900'} fontWeight='500'>Date</Text>
                </Flex>

                <Input
                  m={{ base: '15px 0 15px 2rem', md: '0.5rem 0', lg: '0.5rem 0' }}
                  size='sm'
                  htmlSize={4}
                  variant='unstyled'
                  w={{ base: '7rem', md: '9rem', lg: '11rem' }}
                  placeholder=" Select Date and Time"
                  type="date"
                  onChange={(e) => { setdate(e.target.value) }}
                   color={theme ? 'white' :  '#191b1d' }
             
                />
              </Box>

              <Flex align='center' mt={{ base: '1rem', md: '0' }}>
                <IconButton onClick={listfunc} bg={theme ? "#3DC6EF" : "#008cc9"} w={{ base: '100%', md: '80%', lg: '80%' }} size='lg' color={theme ? 'black' : 'white'} colorScheme='none' borderRadius='0.8rem' icon={<FiSearch />} />
              </Flex>
            </Flex>

            </Center>
          </Box>

        
          <Flex  w={{ base: '110%', md: '80%', lg: '60%' }} mt={{ base: '2rem', md: '2rem', lg: '0' }} justify={'flex-end'}>
            <Flex w={{ base: '90%', md: '80%', lg: '80%' }} align='center'>
              <Image src={modelOne1} w='70%' />
            </Flex>
          </Flex>

        </Flex>
    </div>
  )
}

export default Hero