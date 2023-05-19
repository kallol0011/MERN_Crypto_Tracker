import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text, position, useColorModeValue, useToast } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Login from './Login';
import Signup from './Signup';
import "../styles/NewUser.css"
const NewUser = () => {

   const toast=useToast()


  
    useEffect(()=>{
       toast({
        title: 'Log in First',
          description: "If you dont have an account then before LOG IN please SIGN UP ",
          status: 'error',
                          
          duration: 7000,
          position:"top",
          isClosable: true,
          
       })
    },[])

    return (
        <Container maxW={"xl"} centerContent maxH={"7870px"} 
        // bg={useColorModeValue("blue.500", "rgb(3,8,27)")}
        >
            <Box
            className="logoBox"
              display={"flex"}
              justifyContent="center"
              p={2}
              fontSize={"21px"}
            //   bg="white"
              
              m={"40px 0 15px 0"}
              w={"96%"}
              borderRadius="lg"
              borderWidth={"1px"}
            >
                <Text>
                CRYPTON 
                </Text>
            </Box>
            <Box className="loginform"
             display={"flex"}
             justifyContent="center"
             p={3}
            //  bg="white"
             
             m={"0px 0 15px 0"}
             w={"100%"}
             borderRadius="lg"
             borderWidth={"1px"}
            >
             
            <Tabs variant='soft-rounded'
            //  bg={"white"}
             width="100%" >
                <TabList mb={"1rem"} >
                    <Tab width="50%" >Login</Tab>
                    <Tab width="50%" >Sign up</Tab>
                    
                </TabList>
                <TabPanels>
                    <TabPanel>
                    <Login/>
                    </TabPanel>
                    <TabPanel>
                    <Signup/>
                    </TabPanel>
                    
                </TabPanels>
            </Tabs>


            </Box>
        </Container>
    );
};

export default NewUser;