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


function Categories() {
    const theme = true;
  return (
    <Box bg={theme ? '#191b1d' : 'gray.200'}  p='5rem 0 0 0' paddingTop={"5rem"}>

    <Flex justify='center'>
      <Box w={{ base: '50%', md: '60%', lg: '40%' }} textAlign='center'>
        <Text fontWeight='500' color={theme ? "#3DC6EF" : "#008cc9"}>Holiday Easily</Text>
        <Heading color={theme ? 'white' : 'black'} >
          Book Tickets and Plan Your Holiday Easily
        </Heading>
        <Text p='2rem 0' color={theme ? 'darkgray' : 'gray'}>
          Discover a place that suits your kind of trip. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
        </Text>
      </Box>
    </Flex>


    <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} p='4.5rem' >

      <GridItem lineHeight='2rem'>
        <Flex direction='column' minH='17rem' justifyContent='start' textAlign='center' gap='2rem'>
          <Box w='70%' mx='auto'>
            <Flex justify='center'>
              <Image src={iconOne} blendMode={theme ? 'lighten' : 'darken'} />
            </Flex>

            <Text fontWeight='500' fontSize='1.2rem' color={theme ? 'white' : 'black'} >
              Easy to Buy Tickets
            </Text>
            <Text color='gray' fontWeight='500' >
              Sed ut perspiciatis unde omnis iste natus.
            </Text>
          </Box>
        </Flex>
      </GridItem>

      <GridItem lineHeight='2rem'>
        <Flex direction='column' minH='17rem' justifyContent={{ base: 'start', lg: 'end' }} textAlign='center' gap='1rem'>
          <Box w='70%' mx='auto'>
            <Flex justify='center'>
              <Image src={iconTwo} blendMode={theme ? 'lighten' : 'darken'} />
            </Flex>

            <Text fontWeight='500' fontSize='1.2rem' color={theme ? 'white' : 'black'} >
              Best Tour Guide
            </Text>
            <Text color='gray' fontWeight='500' >
              Sed ut perspiciatis unde omnis iste natus.
            </Text>
          </Box>
        </Flex>
      </GridItem>

      <GridItem lineHeight='2rem'>
        <Flex direction='column' minH='17rem' justifyContent='start' textAlign='center' gap='1rem'>
          <Box w='70%' mx='auto'>
            <Flex justify='center'>
              <Image src={iconThree} blendMode={theme ? 'lighten' : 'darken'} />
            </Flex>

            <Text fontWeight='500' fontSize='1.2rem' color={theme ? 'white' : 'black'} >
              Lot of Choices
            </Text>
            <Text color='gray' fontWeight='500' >
              Sed ut perspiciatis unde omnis iste natus.
            </Text>
          </Box>
        </Flex>
      </GridItem>

      <GridItem lineHeight='2rem'>
        <Flex direction='column' minH='17rem' justifyContent={{ base: 'start', lg: 'end' }} textAlign='center' gap='1rem'>
          <Box w='70%' mx='auto'>
            <Flex justify='center'>
              <Image src={iconFour} blendMode={theme ? 'lighten' : 'darken'} />
            </Flex>

            <Text fontWeight='500' fontSize='1.2rem' color={theme ? 'white' : 'black'} >
              Various Top Products
            </Text>
            <Text color='gray' fontWeight='500' >
              Sed ut perspiciatis unde omnis iste natus.
            </Text>
          </Box>
        </Flex>
      </GridItem>

    </Grid>

  </Box>

  )
}

export default Categories