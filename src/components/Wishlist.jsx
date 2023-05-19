import { Box, Radio, RadioGroup, Stack, useDisclosure,Button, Input, Text, Image, HStack, VStack, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'

import "../styles/Watchlist.css"
import axios from 'axios';
import { server } from "../index";
import { Link, useParams } from 'react-router-dom';

const Wishlist = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [coin,setCoin]=useState([])
  const [loading,setLoading]=useState([])
  

  const WishListcoins=JSON.parse(localStorage.getItem("CoinName"))
  console.log("WishListcoins",WishListcoins)

  // const params = useParams();
  // const currency= "inr";
  // const days= "24h";
  // const page=1;
  // const Endname=WishListcoins.length-1;
  // useEffect(() => {
  //   const fetchCoin = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `${server}/coins/${WishListcoins.coinname[0]}/market_chart?vs_currency=${currency}&days=${days}`
  //       );

        
  //       setCoin(data);
        
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   };
  //   fetchCoin();
  // }, []);
  const clearList=()=>{
    localStorage.removeItem("CoinName")
  }

  console.log(coin)
  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen} variant={"outline"} color={"gray.200"} >
        Watch List 
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg={"blue.500"} textAlign={"center"} color={"white"} fontSize={"26px"}  >WATCH LIST COINS</DrawerHeader>

          <DrawerBody  >
            
            {/* <Input placeholder='Search Coins...' mb={"7%"}  /> */}
            <Button w={"100%"} mb={"6%"} bg={"gray.400"} fontSize={"18px"} onClick={()=>clearList()} > Clear List </Button>
            { 
              WishListcoins?.map((el)=>(
               <Link to={`/coins/${el.coinname}`} >  <HStack   key={el.coinname}  w={"98%"}  m={"auto"}   >
                  
                  <HStack bg={"gray.200"} borderRadius={"42px"} mt={"5px"} mb={"7px"} 
                   className="watchlist" >
                    <Box ml={"1.2vw"} w={"100%"}  
                     
                    >
                <Image ml={"-3"} w={"100%"} src={el.image}  />

                    </Box>
                    <Box   w={"100%"} >
                  <Text fontSize={"26"} fontWeight={"600"} color={"green.700"}  >{el.name}</Text>

                    </Box>
                    <Box  pr={"1.6vw"}  w={"100%"}   >
                  <Text fontSize={"21"} fontWeight={"600"} color={"green.700"}  >  {`$${el.price}`}</Text>

                    </Box>

                  </HStack>
                  
                  
                </HStack>
                </Link>
              ))
            }
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  )
};

export default Wishlist;