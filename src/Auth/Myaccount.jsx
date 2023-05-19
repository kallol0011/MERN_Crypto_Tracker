import React, { useEffect, useState } from 'react';
import { Box, Flex, VStack , Image , FormControl, FormLabel, Input, Heading, Button, Avatar, useEditable} from '@chakra-ui/react';


import { Helmet } from 'react-helmet';
import Loader from '../components/Loader';


const getData=()=>{
  
  return fetch(`https://strange-crown-worm.cyclic.app/admin/getuser`,{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "Authorization":localStorage.getItem("token")
    }
  })
  .then((res)=>res.json())
}


const Myaccount = () => {
    const [loading,setLoading]=useState(false)
    const [data,setData]=useState([])


  useEffect(()=>{
    getData().then((res)=>setData(res))
  },[])


  console.log(data[data.length-1])
  
  var lastuser=data[data.length-1]

    return (
      



      <Flex marginTop={"60px"} pl={"7%"} w={"100%"}  >
            <Helmet>
        <title>  Profile </title>
      </Helmet>
            
            <Box overflow={"auto"} width="90%"> 
              {loading ? (
                <Box margin="auto" marginTop="230px">
                <Loader />
              </Box>
              ) : (
                <>
                  <VStack w={{lg:"34%",sm:"100%",base:"100%"}}   margin={"auto"} marginTop={"2.4%"}  paddingBottom={"4%"}   >
                      <Heading color={"blue.600"} pb={"4vh"} >YOUR DETAILS</Heading>
                     <FormControl w={"100%"}   p={"4%"} borderRadius={"4%"}  px={"7%"}
                      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                     >
                      <Box    >
                     {/* <Image margin={"auto"} borderRadius={"56%"} w={"18%"}  src="https://avatars.githubusercontent.com/u/110187301?v=4" alt={"K S"} /> */}
                     <Avatar
              size={"md"}
              textColor={"white"}
              // name={"Kallol Sarkar"}
              bg={"red.600"}
              />
                     </Box>
                        <FormLabel  > Name </FormLabel>
                        <Input placeholder="Enter your name" value={`${lastuser.firstname} ${lastuser.firstname}` } />
                        <FormLabel pt="2vh" > Email Id </FormLabel>
                        <Input  placeholder="Enter your email" />
                        <FormLabel pt="2vh" > Password </FormLabel>
                        <Input type="password" placeholder={"Enter your password"} />
                        <FormLabel pt="2vh" > image </FormLabel>
                        <Input  placeholder={"avtar image link"} />
                        <Flex  justifyContent={"space-around"} mt={"4%"} >
                        <Button bg={"blue.400"} w={"41%"} > Reset </Button>
                        <Button bg={"blue.400"} w={"41%"} > Update </Button>
                        </Flex>
                     </FormControl>
                  </VStack>
                  
                </>
              )}
      
             </Box>
          </Flex>

    )
};

export default Myaccount;





