import React, { useEffect, useState } from 'react'
import { Box, Flex, Text, Heading, Image, IconButton, Spacer, Divider, Center, HStack, Stack, Button, Grid, GridItem, AspectRatio, Menu, MenuButton, MenuList, MenuItem, Input, theme } from '@chakra-ui/react'
import { Card, CardBody } from '@chakra-ui/react'
import { SlLocationPin, SlCalender } from 'react-icons/sl'
import { FiSearch } from 'react-icons/fi'
import { ArrowForwardIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import ReviewCarousel from './ReviewCarousel'


function Testimonials() {

    const theme = true;
    const [val, setval] = useState(0);

    const carouselData = [
        {
          id: "1",
          heading: '"Memorable Trip"',
          description: "This is a really memorable trip for me. Ut enim ad minim veniam, nostrud exercit tation ullamco laboris nisi ut aliquip exera commodo consequat aute irure sint.",
          avatar: "https://bit.ly/sage-adebayo",
          user: "Segun Adebayo",
          profession: "Creator, Chakra UI"
        },
        {
          id: "2",
          heading: '"Greate Tour Guide"',
          description: "This is a really memorable trip for me. Ut enim ad minim veniam, nostrud exercit tation ullamco laboris nisi ut aliquip exera commodo consequat aute irure sint.",
          avatar: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
          user: "Chris Hemsworth",
          profession: "Traveller"
        },
        {
          id: "3",
          heading: '"This tour was so Amazing"',
          description: "This is a really memorable trip for me. Ut enim ad minim veniam, nostrud exercit tation ullamco laboris nisi ut aliquip exera commodo consequat aute irure sint.",
          avatar: "https://pixlr.com/images/index/remove-bg.webp",
          user: "Jennifer",
          profession: "Influencer"
        },
        {
          id: "4",
          heading: '"The UI is Simple and easy to use"',
          description: "This is a really memorable trip for me. Ut enim ad minim veniam, nostrud exercit tation ullamco laboris nisi ut aliquip exera commodo consequat aute irure sint.",
          avatar: "https://pfpmaker.com/_nuxt/img/blog-preview-2.db10f37.webp",
          user: "Emma",
          profession: "Tourister"
        },
        {
          id: "5",
          heading: '"Totally Worth it"',
          description: "This is a really memorable trip for me. Ut enim ad minim veniam, nostrud exercit tation ullamco laboris nisi ut aliquip exera commodo consequat aute irure sint.",
          avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDlnJNm22oYIpXVpYmslWoHbBfgF_E_L0esvlUKggZsw&usqp=CAU&ec=48600113",
          user: "Fatima",
          profession: "Creator"
        },
      ]
    
  return (
    <>
    <Box  p={{ base: '0 1.5rem', md: '0 3rem', lg: '3rem 4.5rem' }}  bg={theme ? '#101214' : '#edf2f7'} >
    <Text fontWeight='500' color={theme ? "#3DC6EF" : "#008cc9"}>
      What They Say
    </Text>

    <Flex mt='0.7rem' flexDirection={{ base: 'column', md: 'column', lg: 'row' }}>
      <Box w={{ base: '90%', md: '80%', lg: '30%' }}>
        <Heading color={theme ? 'white' : 'black'}>
          Our Customers Say About Us
        </Heading>
      </Box>

      <Spacer />

      <Flex gap={3} align='end' p={{ base: '1rem 0', md: 'none', lg: 'none' }}>
        <IconButton
          onClick={() => { setval(val + 300) }} isDisabled={val === 0}
          bg={theme ? "#3DC6EF" : "#008cc9"}
          color={theme ? 'black' : 'white'}
          colorScheme='none'
          size='lg'
          borderRadius='0.8rem'
          icon={<IoIosArrowBack />}
        />

        <IconButton
          onClick={() => { setval(val - 300) }} isDisabled={val <= -900}
          bg={theme ? "#3DC6EF" : "#008cc9"}
          color={theme ? 'black' : 'white'}
          colorScheme='none'
          size='lg'
          borderRadius='0.8rem'
          icon={<IoIosArrowForward />}
        />
      </Flex>
    </Flex>


    <Box >
      <Box mt='2.5rem'>
        <Box overflow='hidden'>
          <div style={{ display: 'flex', translate: `${val}px 0px`, transition: '1s' }}>
            {
              carouselData.map((item) => {
                return <ReviewCarousel theme={theme} {...item} />
              })
            }
          </div>
        </Box>
      </Box>
    </Box>
    <Flex mt={'5rem'} align='center' justify='space-between' flexWrap='wrap'>
            <Box >
              <Text p={{ base: '1rem 0', md: 'none', lg: 'none' }} fontWeight='500' color={theme ? "#3DC6EF" : "#008cc9"}>Stay Connected</Text>
              <Heading color={theme ? 'white' : 'black'}>Get Started with Adventour!</Heading>
            </Box>

            <Box p={{ base: '1rem 0', md: 'none', lg: 'none' }}>
              <Button onClick={()=>{
                window.scrollTo({
                  top: 0, 
                  behavior: 'smooth'
                });
              }} rightIcon={<ArrowForwardIcon />} bg={theme ? "#3DC6EF" : "#008cc9"} _hover={theme ? { bg: '#74d4f0' } : { bg: '#008cc9' }} color={theme ? 'black' : 'white'} borderRadius='0.8rem' p='0 2rem'><Text fontWeight='600'>Get Started</Text></Button>
            </Box>
          </Flex>
    </Box>



    </>
  )
}

export default Testimonials