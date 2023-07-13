import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Link as RouterLink} from 'react-router-dom';
import {
    Box,
    Heading,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Text,
    Button,
    Flex,
    Spacer,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Input,
    Checkbox,
    Center,
    CheckboxGroup,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Collapse,
    AspectRatio
} from '@chakra-ui/react';



const TourList = () => {
    const [tourList, settourList] = useState([]);
    const [sliderValue, setSliderValue] = useState(5)
    const {location} = useParams();
    const [value,setValue] = useState('');
    const [sortVal,setSortVal]= useState('');

    const handlePrice = (event) => {
        setValue('price_per_day');
        setSortVal(event.target.value);
    }

    const handleDuration = (event) => {
        setValue('tour_length')
        setSortVal(event.target.value)
    }

    const handleGroup = (event) => {
        setValue('group_size')
        setSortVal(event.target.value)
    }

    const labelStyles = {
        mt: '2',
        ml: '-2.5',
        fontSize: 'sm',
    }

    const getTourList = () => {
        axios.get(`https://adventourapi.onrender.com/${location}?_limit=${10}&_sort=${value}&_order=${sortVal}`)
            .then((res) => {
                console.log(res.data)
                settourList(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect((sortVal,value) => {
        getTourList();
    }, [sortVal,value])

    return (
        <Box bg='black' w='100%' color='white' minH='350vh' display="flex" flexDirection="column">
            <Center marginTop={"20px"} marginBottom={"20px"}>
            <Heading as='i' color='rgb(17,158,197)' >Deals and Discount</Heading>
            </Center>
            <br />
            
            <Flex>
            <AspectRatio w='400px' h='200' marginLeft='5%' border='5px solid aliceblue'>
                <video autoPlay loop muted>
                    <source src='https://cdn.pixabay.com/vimeo/145116966/mykonos-1282.mp4?width=480&hash=d199187a3446e5c6c13466f7b184681233dd8220' type='video/mp4' /> 
                </video>
            </AspectRatio>

            <AspectRatio w='400px' h='200' marginLeft='5%' border='5px solid aliceblue'>
                <video autoPlay loop muted>
                    <source src='https://cdn.pixabay.com/vimeo/454713939/high-way-48504.mp4?width=640&hash=3cb0bb065df70be4aa8718e08947088a26a29a4f' type='video/mp4' /> 
                </video>
            </AspectRatio>

            <AspectRatio w='400px' h='200' marginLeft='5%' border='5px solid aliceblue'>
                <video autoPlay loop muted>
                    <source src='https://cdn.pixabay.com/vimeo/409042530/ferris-36034.mp4?width=640&hash=358ce484282798d997e0be2d48b971d6d8a9638b' type='video/mp4' /> 
                </video>
            </AspectRatio>
            </Flex>
           

            <Flex marginRight='10%'>
                

                <Box w='40%' mt='2%'>
                    <Button colorScheme='linkedin' marginLeft='11%' mt='1%' size='lg' w='220px' position='absolute'>Sort & Filter</Button>
                    
                    <Accordion mt='15%' w='40%' border='1px solid gray' allowMultiple position='relative' marginLeft='30%'>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Price
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>

                            <AccordionPanel pb={4}>
                            <Stack spacing={[1, 3]} direction={['column']}>                                    
                                        <Checkbox value='asc' onChange={handlePrice}>Price : low to high</Checkbox>
                                        <Checkbox value='desc' onChange={handlePrice}>Price : high to low</Checkbox>                                       
                                    </Stack>
                            </AccordionPanel>

                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Duration
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>

                            <AccordionPanel pb={4}>
                            <Stack spacing={[1, 3]} direction={['column']}>
                                        <Checkbox value='asc' onChange={handleDuration}>Sortest Duration First</Checkbox>
                                        <Checkbox value='desc' onChange={handleDuration}>Longest Duration First</Checkbox>
                                    </Stack>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Group Size
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>

                            <AccordionPanel pb={4}>
                            <Stack spacing={[1, 3]} direction={['column']}>
                                        <Checkbox value='asc' onChange={handleGroup}>Small</Checkbox>
                                        <Checkbox value='desc'onChange={handleGroup}>Large</Checkbox>
                                    </Stack>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>



                    <Accordion defaultIndex={[0]} w='40%' border='1px solid gray' allowMultiple position='relative' mt='10%' marginLeft='30%'>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Must-see Countries
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                                    <Stack spacing={[1, 3]} direction={['column']}>
                                        <Checkbox value='india'>India</Checkbox>
                                        <Checkbox value='thailand'>Thailand</Checkbox>
                                        <Checkbox value='vietnam'>Vietnam</Checkbox>
                                        <Checkbox value='nepal'>Nepal</Checkbox>
                                        <Checkbox value='combodia'>Combodia</Checkbox>
                                        <Checkbox value='srilanka'>Srilanka</Checkbox>
                                        <Checkbox value='pakistan'>Pakistan</Checkbox>
                                    </Stack>
                                </CheckboxGroup>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Length
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Box pt={6} pb={2}>
                                    <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
                                        <SliderMark
                                            value={sliderValue}
                                            textAlign='center'
                                            bg='blue.500'
                                            color='white'
                                            mt='-10'
                                            ml='-5'
                                            w='15'
                                        >
                                            {sliderValue}
                                        </SliderMark>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb />
                                    </Slider>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Departure Date
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Input
                                    placeholder="Select Date and Time"
                                    size="md"
                                    type="date"
                                />
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Adventure Type
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                                    <Stack spacing={[1, 3]} direction={['column']}>
                                        <Checkbox value='10'>Family</Checkbox>
                                        <Checkbox value='15'>Custom</Checkbox>
                                        <Checkbox value='20'>Private</Checkbox>
                                        <Checkbox value='25'>Group</Checkbox>
                                        <Checkbox value='30'>Explorer</Checkbox>
                                    </Stack>
                                </CheckboxGroup>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Age Range
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                                    <Stack spacing={[1, 3]} direction={['column']}>
                                        <Checkbox value='10'>10-15</Checkbox>
                                        <Checkbox value='15'>15-20</Checkbox>
                                        <Checkbox value='20'>20-25</Checkbox>
                                        <Checkbox value='25'>25-30</Checkbox>
                                        <Checkbox value='30'>30-40</Checkbox>
                                        <Checkbox value='40'>40-50</Checkbox>
                                        <Checkbox value='50'>50-Above</Checkbox>
                                    </Stack>
                                </CheckboxGroup>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Price
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Box pt={6} pb={2}>
                                    <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
                                        <SliderMark
                                            value={sliderValue}
                                            textAlign='center'
                                            bg='blue.500'
                                            color='white'
                                            mt='-10'
                                            ml='-5'
                                            w='15'
                                        >
                                            ₹{sliderValue},000
                                        </SliderMark>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb />
                                    </Slider>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Maximum group size
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                                    <Stack spacing={[1, 3]} direction={['column']}>
                                        <Checkbox value='10'>10 People</Checkbox>
                                        <Checkbox value='15'>15 People</Checkbox>
                                        <Checkbox value='20'>20 People</Checkbox>
                                        <Checkbox value='25'>25 People</Checkbox>
                                        <Checkbox value='30'>30 People</Checkbox>
                                        <Checkbox value='40'>40 People</Checkbox>
                                        <Checkbox value='50'>50 People</Checkbox>
                                    </Stack>
                                </CheckboxGroup>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    <Flex direction="column" align="center"
                        mt='8%'
                        marginLeft='-55%'>

                  
                        <Box mb={60}>
                        <Image position='absolute'
                        src='https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_640.jpg'
                        width={300}
                        height={200}
                        border='5px solid white'/>
                    
                        </Box>

                        <Box mb={60}>
                        <Image position='absolute'
                        src='https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416135_640.jpg'
                        width={300}
                        height={200}
                        border='5px solid white' />
                    
                        </Box>

                        <Box mb={60}>
                        <Image position='absolute'
                        src='https://cdn.pixabay.com/photo/2019/10/19/12/21/hot-air-balloons-4561267_640.jpg'
                        width={300}
                        height={200}
                        border='5px solid white' />
                    
                        </Box>

                        <Box mb={60}>
                        <Image position='absolute'
                        src='https://cdn.pixabay.com/photo/2020/08/18/19/23/monument-valley-5499156_640.jpg'
                        width={300}
                        height={200}
                        border='5px solid white' />
                    
                        </Box>

                        <Box mb={60}>
                        <Image position='absolute'
                        src='https://cdn.pixabay.com/photo/2016/03/27/17/09/kuala-lumpur-1283140_640.jpg'
                        width={300}
                        height={200}
                        border='5px solid white' />
                        </Box>

                    </Flex> 

                </Box>

                <Box bg='black' color='white'
                    w='60%'
                    position='absolute'
                    right='5%'
                    p='4'
                >
                    {tourList.map((elem, ind) => {
                        return <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            key={ind}
                            mt='2%'
                        >
                            <Image
                                objectFit='cover'
                                w={{ base: '100%', sm: '300px' }}
                                h={{ sm: '200px' }}
                                src={elem.main_image}
                                alt='Caffe Latte'
                            />

                            <Stack>
                                <CardBody>
                                    <Heading size='md'>{elem.title}</Heading>

                                    <Flex justifyContent='space-between'>
                                        <Text py='2' as='b'>
                                            Price - ₹ {elem.price_per_day}/day
                                        </Text>
                                        <Spacer />
                                        <Text py='2' as='b' position='absolute' right='2'>
                                            Tour Length - {elem.tour_length} days
                                        </Text>
                                    </Flex>
                                    <hr />
                                    <Text position='absolute' left='37%'>
                                        Travel style - {elem.category}
                                    </Text>
                                    <br />
                                    <Text position='absolute' left='37%'>
                                        Group Size - {elem.group_size}
                                    </Text>
                                </CardBody>

                                <CardFooter position='absolute' bottom='0' right='0'>
                                    <Button variant='solid' colorScheme='blue'>
                                        <RouterLink to={`/tourdetail/${location}/${elem.id}`}>View Details</RouterLink> 
                                    </Button>
                                </CardFooter>
                            </Stack>
                        </Card>
                    })}
                </Box>
            </Flex>
        </Box>
    )
}

export default TourList



