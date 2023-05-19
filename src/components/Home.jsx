import React, { useEffect, useState } from 'react';
import { Box , Button, Container, Flex, Grid, HStack, Heading, Image , Stack, Table, Text, VStack } from "@chakra-ui/react"
import Homeimg from "../image/btc.png" 
import { motion } from "framer-motion";
import Footer from './Footer';
import "../styles/Home.css"
import {AiFillRightCircle} from "react-icons/ai"
import {FaQuestion} from "react-icons/fa"
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { server } from '..';
import "../styles/Home.css"
import {
  
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

const Home = () => {

const [coins,setCoins]=useState([])
const [loading,setLoading]=useState(false)

const navigate=useNavigate()

const currency="usd"
const page=1;
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        // setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

console.log(coins)

    return (
    //     <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
    //   <motion.div
    //     style={{
    //       height: "80vh",
    //     }}
    //     animate={{
    //       translateY: "20px",
    //     }}
    //     transition={{
    //       duration: 2,
    //       repeat: Infinity,
    //       repeatType: "reverse",
    //     }}
    //   >
    //     <Image
    //       w={"full"}
    //       h={"full"}
    //       objectFit={"contain"}
    //       src={Homeimg}
    //       filter={"grayscale(1)"}
    //     />
    //   </motion.div>

    //   <Text
    //     fontSize={"6xl"}
    //     textAlign={"center"}
    //     fontWeight={"thin"}
    //     color={"whiteAlpha.700"}
    //     mt={"-20"}
    //   >
    //     Crypton
    //   </Text>
      
    // </Box>
   
    <>
      <Box w={"94%"} h={"full"} m={"auto"} pb={"18vh"} >
        <Stack w={"100%"} h={"90vh"}  >
          <Flex
          
          w={"100%"}
          gap={"7px"}
          direction={{
              base: "column",
              md: "row",
            }}  h={"100%"}    >
             <VStack w={"100%"}    textAlign={"left"} >
                <VStack textAlign={"left"} justifyContent={"start"} w={"100%"}  mt={"11%"} >
                  <HStack  w={"100%"} >
                    <Image src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAICSURBVHgBrVZLTsNADLWdqLQSi3KDIpV9OQHtDeAEUAmpqlgAJwBOUNiAgAX0BtyA3gD2FBFukBW/ZmawU2jTZPIp9ElRnMT283jezAShAGo3puoGwb7Regf50QB4hDgYKXXidSteXjzmEly81xyie0ke/yZkSutWHhGmVQ3GbBpjquxQhfGVBp/JfET0jFJ9VS7feW30U0myqi4K2+go6uAS9f5DIJB413FuYu/GWLv6anB7HmBBUE6p9rKLr2JPRmKCoAkLBI0+WhP71+CJ823O0mPQ+iS8J2GNGQdqf4ZEJlwTHdl8ZRKH3cqx3Gc+MPGws7TCLT6zkjhuT/JOSOZWlBAwsZiIZGwuUQFg/eK9CUySlk/ahFr3DdF2WEiEoH49OuLnY8guqOXyrZnlEybmVmJsBIUIBIQN4pXtQxH8hSCMM1Xipj7mOyYJclQXxSDsQv3yUxZhw+6Dp8NO6TBKIHag9apsHaIg3ilebJFSwHNnaZV+ArbyKpqrRTDdw8IyJ0nO3w7AcXppAXGJJ1QXj9G6/dyt3IrtQgHYksyoLgfTXbiIAOYAafWYIGH1DJhoAIvB3dPecpJEECjVLiDJTEg8C+kw+i55/MrpiHjAu/IGTOci8/gNkxs+go3uB+Xyaebxa8MifiQIciAJJJERuf60kqsOV7sqldaL/BJ9A2ZLIImKBZFzAAAAAElFTkSuQmCC"} alt={"discount"} />
                      <Text fontWeight={"500"} fontSize={"19px"} color={"rgb(30,153,246)"} >Investment made easy</Text>
                  </HStack>
                  <Stack textAlign={"left"} w={"100%"} >
                    <Text className='fonts'  fontWeight={"700"} mb={"4vh"} textAlign={"left"} 
                    fontSize={{base:"28px",lg:"71px",sm:"28px"}}
                     >The Easies Way to Track Multiple Currencies</Text>
                  </Stack>
                </VStack>
                  <VStack  w={"100%"} >
                    <Stack>

                    <Text fontSize={"19px"} fontWeight={"500"} mb={"2.4vh"}  >Market Watchman allow you tu monitor your balances, trade without, 
                      limits and earn rewards for specific coins.</Text>
                    </Stack>
                    <HStack  textAlign={"left"} w={"100%"} >
                      <Link to="/coins" > <Button color={"white"} bg={"blue.500"} > Try Now  &nbsp; <AiFillRightCircle/> </Button>
                      </Link>
                       <Button color={"white"} bg={"blue.700"} > How It Works <FaQuestion/> </Button>
                    </HStack>
                  </VStack>
             </VStack>



             <VStack  w={"100%"}  h={"100%"} >
              <Image w={"90%"} mt={"7%"} src="https://koolkishan.github.io/react-coinbase-landing/static/media/home.a9136be591eabf538074.png" alt="heroImage" />
             </VStack>
                               
      
          </Flex>
        </Stack>

        {/* /////////////////// */}

        <Stack w={"100%"} mt={"16vh"} fontSize={"19px"}  px={"2"}  borderRadius={"11px"} scrollBehavior={"auto"} border={"1px"} >
        <TableContainer ml={{lg:"6vw" , base:"2px",sm:"2px"}}  justifyContent={"space-between"} >
  <Table variant='none' cursor={"pointer"} >
    <Thead  >
      <Tr   >
        <Th >Rank</Th>
        <Th >Name</Th >
        <Th >Price</Th>
        <Th >Change</Th>
        <Th>Market Cap</Th>
        
        
      </Tr>
    </Thead>
    <Tbody>
      

       
       {
  coins.slice(0, 5).map((el)=>(
   <Tr key={el.id} onClick={()=>navigate(`/coins/${el.id}`)} >
       <Td>
         {el.market_cap_rank}
       </Td>
       
       
       <Td display={"flex"} >
        <Image w={"28px"} src={el.image} /> &nbsp; {el.name} &nbsp; {el.symbol}
         
       </Td>
       <Td  >
         ${el.current_price}
       </Td>
       <Td color={"blue.600"} >
         {el?.market_cap_change_percentage_24h} %
       </Td>
       <Td>
         ${Math.round(el.market_cap/1000000000)}.{Math.round(el.market_cap/8999993930)}B
       </Td>
       
   </Tr>
  ))

}
       
      
    </Tbody>
    
  </Table>
</TableContainer>
        </Stack>

    {/* //////////// about //////////////////// */}

     <VStack  w={"100%"}  mt={"11vh"} >
        <VStack>
          <Text fontSize={"21px"} fontWeight={"500"} color={"gray.500"} >About Us</Text>
          <Text fontSize={"31px"} fontWeight={"500"} color={"gray.500"} >
          Why would You Choose CTYPTON?
          </Text>
        </VStack>
        <Stack w={"100%"}   >
          <Flex
          
          w={"100%"}
          gap={"7px"}
          direction={{
              base: "column",
              md: "row",
            }}      >
             <VStack w={"100%"}    textAlign={"left"} >
                <VStack textAlign={"left"} justifyContent={"start"} w={"100%"}  mt={"11%"} >
                  <HStack  w={"100%"} >
                      <Text fontWeight={"500"} fontSize={"19px"} color={"gray.500"} >Easy To Learn Platform –</Text>
                  </HStack>
                  <Stack textAlign={"left"} w={"100%"} >
                    
                  </Stack>
                </VStack>
                  <VStack justifyContent={"start"}  textAlign={"left"}   >
                    {/* <Stack w={"76%"} bg={"silver"} ml={"-11vw"} > */}

                    <Text color={"gray.500"} fontSize={"19px"} fontWeight={"500"} my={{lg:"2.4vh",base:"7px",sm:"7px"}}  pb={"2.4vh"} >
                    Welcome to crypton.in Our goal is help traders providing rich data via crypton.in. We created Crypton for the traders who want to make use of data for daily trading. This is a continuous effort to make it a great tool for everyone. We appreciate the support and love we got from you.
                    For any support or feedback, feel free to contact us via contact@crypton.in</Text>
                    {/* </Stack> */}
                    <HStack  textAlign={"left"} w={"100%"} mt={"2.4vh"} >
                      <Link to="/coins" > <Button color={"white"}  py={"3.2vh"} bg={"blue.500"} > Start Earning  &nbsp; <AiFillRightCircle/> </Button>
                      </Link>
                       {/* <Button color={"white"} bg={"blue.700"} > How It Works <FaQuestion/> </Button> */}
                    </HStack>
                  </VStack>
             </VStack>



             <VStack  w={"100%"}  h={"100%"} >
              <Image w={"100%"}  src="https://koolkishan.github.io/react-coinbase-landing/static/media/about.6713d5aa6adaddde4f7a.png" alt="heroImage" />
             </VStack>


          </Flex>
        </Stack>
     </VStack>


     {/* ////////////////////////////////// */}

     <Flex 
    //  h={"42vh"} 
    //  direction={{
    //   base:"column",
    //   sm:"row"
    //  }} 
    mt={"11vh"}
     borderRadius={"11px"} w={"100%"} 
    //  bg={"rgb(116,136,219)"} 
    bgGradient='linear(rgb(126,143,221),rgb(94,117,223),rgb(93,116,213) )'
     >
      <Box w={{lg:"70%",base:"100%",sm:"100%"}}  px={{lg:"7vw",base:"0px",sm:"0px"}} textAlign={"center"}  >
         <Box   h={"100%"} alignItems={"center"} >
         <Text fontSize={{lg:"40px",base:"21px"}} color={"white"}  h={"100%"} fontWeight={"600"} py={"11%"} >Sign up without any bank account linking and card</Text>

         </Box>
      </Box>
     <Box  >
      
       <Image w={{lg:"100%",sm:"0%",base:"0%"}}    src="https://koolkishan.github.io/react-coinbase-landing/static/media/card.f9017bf395d5cc4917d5.png" alt={"card"} />
     </Box>
     </Flex>
    
      </Box>
    </>

    );
};

export default Home;
