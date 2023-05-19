import React, { useEffect, useState } from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
  } from '@chakra-ui/react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchData } from '../../Redux/Auth/actions';
// import axios from 'axios';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
  
  export default function Login() {
    //const navigate= useNavigate();
    // const dispatch = useDispatch();
    // const {isAuth} = useSelector((store)=>store.auth)
    const location = useLocation();
    // const comingFrom = location.state?.data || "/";

    const [email,setemail] = useState('')
    const [password,setpassword] = useState("")

    const navigate=useNavigate()
    const toast = useToast()

  const login = async () => {
   
    const payload = {
      
      email,
      
      password,
      
   }  
  
   let res = await fetch("https://strange-crown-worm.cyclic.app/user/login",{
         method:'POST',
         headers:{
          "content-type":"application/json"
         },
         body:JSON.stringify(payload)
   })
      res = await res.json()
      localStorage.setItem("token",res.token)
    console.log(res)
    toast({
      title: 'LOGIN DONE',
          description: "Wealcome to CRYPTON",
          status: 'success',
          duration: 5000,
          position:"top",
          isClosable: true,
    })
    navigate("/coins")
  };
 
    // if(isAuth===true){
    //   alert("Logged in");
    //   navigate(comingFrom, {replace:true});
    // }
    
    return (
      <Flex
        minH={'67vh'}
        // w={"115%"}
        align={'center'}
        justify={'center'}
        // justifyContent={"left"}
        mt={"-5vh"}
        // ml={"-2vw"}
        // bg={useColorModeValue('gray.50', 'gray.800')}
        >
            
        <Stack spacing={8} mx={'auto'} w={"full"}   px={"1"} mt={"-5vh"}  >
          <Stack align={'center'}>
          <Heading fontSize={'3xl'} color={"gray.600"} textAlign={'center'}>
            LOGIN
          </Heading>
            {/* <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text> */}
          </Stack>
          <Box
            rounded={'lg'}
            // bg={useColorModeValue('white', 'gray.700')}
            // boxShadow={'lg'}
            px={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>setemail(e.target.value)} value={email} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type={'password'}  onChange={(e)=>setpassword(e.target.value)} value={password} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  onClick={login}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Log in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }