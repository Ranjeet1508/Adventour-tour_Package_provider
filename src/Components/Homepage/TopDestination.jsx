import React, { useEffect, useState } from 'react'
import { Box, Flex, Text, Heading, Image, IconButton, Spacer, Divider, Center, HStack, Stack, Button, Grid, GridItem, AspectRatio, Menu, MenuButton, MenuList, MenuItem, Input } from '@chakra-ui/react'
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


function TopDestination() {

    const theme = true;
  return (
    <>
  
    {/* <div style={{height:"3rem" , backgroundColor: {theme ? '#101214' : '#edf2f7'} }}>

    </div> */}
    {/* <Box height={"3rem"} bg={theme ? '#101214' : '#edf2f7'} >

    </Box> */}

    <Box   p={{ base: '0 1.5rem', md: '0 3rem', lg: '3rem 4.5rem' }} bg={theme ? '#101214' : '#edf2f7'} paddingTop={{base:'3rem'}}>
    <Box>
      <Text fontWeight='500' color={theme ? "#3DC6EF" : "#008cc9"}>
        Top Destination
      </Text>

      <Flex mt='0.7rem' flexDirection={{ base: 'column', md: 'column', lg: 'row' }}>
        <Box w={{ base: '90%', md: '80%', lg: '25%' }}>
          <Heading color={theme ? 'white' : 'black'} >
            WanderList for Your WanderLust
          </Heading>
        </Box>

        <Spacer />

        {/* <Flex gap={3} align='end' p={{ base: '1rem 0', md: 'none', lg: 'none' }}>
          <IconButton
            bg={theme ? "#3DC6EF" : "#008cc9"}
            color={theme ? 'black' : 'white'}
            colorScheme='none'
            size='lg'
            borderRadius='0.8rem'
            icon={<IoIosArrowBack />}
          />

          <IconButton
            bg={theme ? "#3DC6EF" : "#008cc9"}
            color={theme ? 'black' : 'white'}
            colorScheme='none'
            size='lg'
            borderRadius='0.8rem'
            icon={<IoIosArrowForward />}
          />
        </Flex> */}
      </Flex>
    </Box>

    <Grid justifyContent='center' mt='4rem' templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}>

      <GridItem p={{ base: '1rem 0', md: '1rem 0', lg: '0' }}>
        <Card maxW='90%' borderRadius='1rem' bg={theme ? '#101214' : 'white'} _hover={theme ? { bg: "#191b1d" } : { bg: 'gray.200' }} m='auto' cursor='pointer'>
          <CardBody p='1rem'>
            <AspectRatio ratio={1}>
              <Image
                src='https://wallpaper.dog/large/10769570.jpg'
                alt='Green double couch with wooden legs'
                borderRadius='1.1rem'
              />
            </AspectRatio>
            <Stack mt='6' spacing='3'>
              <Heading color={theme ? 'white' : 'black'} fontWeight='500' size='md'>7 Days Bali and Gili Islands Epid Experience</Heading>
              <Text color='gray'>
                Bali, Indonesia
              </Text>
              <HStack spacing={0}>
                <Text color='blue.600' fontSize='2xl' fontWeight='bold'>
                  $
                </Text>
                <Text color={theme ? 'white' : 'black'} fontSize='2xl' fontWeight='600'>35</Text>
                <Text color='gray' fontSize='xs' p='0 0.3rem'>/Person</Text>
              </HStack>
            </Stack>
          </CardBody>
        </Card>
      </GridItem>

      <GridItem p={{ base: '1rem 0', md: '1rem 0', lg: '0' }}>
        <Card maxW='90%' borderRadius='1rem' bg={theme ? '#101214' : 'white'} _hover={theme ? { bg: "#191b1d" } : { bg: 'gray.200' }} m='auto' cursor='pointer'>
          <CardBody p='1rem'>
            <AspectRatio ratio={1}>
              <Image
                src='https://www.elitehavens.com/magazine/wp-content/uploads/2019/09/darren-lawrence-HUPP2SzqGg-unsplash-scaled.jpg'
                alt='Green double couch with wooden legs'
                borderRadius='1.1rem'
              />
            </AspectRatio>
            <Stack mt='6' spacing='3'>
              <Heading color={theme ? 'white' : 'black'}  fontWeight='500' size='md'>Bali Bucket List Boutique 10 Day Tour Package</Heading>
              <Text color='gray'>
                Bali, Indonesia
              </Text>
              <HStack spacing={0}>
                <Text color='blue.600' fontSize='2xl' fontWeight='bold'>
                  $
                </Text>
                <Text color={theme ? 'white' : 'black'} fontSize='2xl' fontWeight='600'>42</Text>
                <Text color='gray' fontSize='xs' p='0 0.3rem'>/Person</Text>
              </HStack>
            </Stack>
          </CardBody>
        </Card>
      </GridItem>

      <GridItem p={{ base: '1rem 0', md: '1rem 0', lg: '0' }}>
        <Card maxW='90%' borderRadius='1rem' bg={theme ? '#101214' : 'white'} _hover={theme ? { bg: "#191b1d" } : { bg: 'gray.200' }} m='auto' cursor='pointer'>
          <CardBody p='1rem'>
            <AspectRatio ratio={1}>
              <Image
                src='https://images.unsplash.com/photo-1531778272849-d1dd22444c06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&w=1000&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='1.1rem'
              />
            </AspectRatio>
            <Stack mt='6' spacing='3'>
              <Heading color={theme ? 'white' : 'black'} fontWeight='500' size='md'>The Best of Bali, Gilis and Penida Island Experience</Heading>
              <Text color='gray'>
                Bali, Indonesia
              </Text>
              <HStack spacing={0}>
                <Text color='blue.600' fontSize='2xl' fontWeight='bold'>
                  $
                </Text>
                <Text color={theme ? 'white' : 'black'} fontSize='2xl' fontWeight='600'>76</Text>
                <Text color='gray' fontSize='xs' p='0 0.3rem'>/Person</Text>
              </HStack>
            </Stack>
          </CardBody>
        </Card>
      </GridItem>

    </Grid>


  </Box>
  </>
  )
}

export default TopDestination