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

function OurExperiences() {
    const theme = true;
  return (
    <Flex p={{ base: '2rem 1.5rem', md: '4rem 3rem', lg: '5rem 4.5rem' }} flexDirection={{ base: 'column', md: 'column', lg: 'row' }}  bg={theme ? '#101214' : '#edf2f7'}>

    <Flex w={{ base: '100%', md: '80%', lg: '50%' }} justify='center' >
      <Flex w={{ base: '90%', md: '80%', lg: '70%' }} >
        <Image src={modelTwo} w='100%' />
      </Flex>
    </Flex>
    <Box p='5rem 0' w={{ base: '90%', md: '100%', lg: '50%' }}>
    <Box w={{ base: '100%', md: '90%', lg: '70%' }}>
      <Text fontWeight='500' color={theme ? "#3DC6EF" : "#008cc9"}>Our Experiences</Text>

      <Heading mt='0.5rem'  color={theme ?  'white' : '#191b1d'}>
        Save More With Our Best Deals
      </Heading>

      <Text p='2rem 0' color={theme ? 'darkgray' : 'gray'}>
        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
      </Text>

    </Box>

    <Flex w={{ base: '40%', md: '50%', lg: '60%' }} flexDirection={{ base: 'column', md: 'row', lg: 'row' }} justify='space-between'>
      <Box pt={{ base: '1rem', md: '0rem', lg: '0' }}>
        <Heading fontSize='2.1rem' mb='1rem' color={theme ? "#3DC6EF" : "#008cc9"}>12+</Heading>
        <Text color={theme ? 'darkgray' : 'gray'}>Years</Text>
        <Text color={theme ? 'darkgray' : 'gray'}>Experience</Text>
      </Box>

      <Box pt={{ base: '1rem', md: '0rem', lg: '0' }} px={{ base: '0', md: '1.5rem', lg: '0' }}>
        <Heading fontSize='2.1rem' mb='1rem' color={theme ? "#3DC6EF" : "#008cc9"}>15k+</Heading>
        <Text color={theme ? 'darkgray' : 'gray'}>Success</Text>
        <Text color={theme ? 'darkgray' : 'gray'}>Journey</Text>
      </Box>

      <Box pt={{ base: '1rem', md: '0rem', lg: '0' }} px={{ base: '0', md: '1rem', lg: '0' }}>
        <Heading fontSize='2.1rem' mb='1rem' color={theme ? "#3DC6EF" : "#008cc9"}>9+</Heading>
        <Text color={theme ? 'darkgray' : 'gray'}>Awards</Text>
        <Text color={theme ? 'darkgray' : 'gray'}>Winnig</Text>
      </Box>
    </Flex>

  </Box>
</Flex>


  )
}

export default OurExperiences