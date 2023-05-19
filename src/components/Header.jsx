import { HStack , Button, Box, Text, Heading, useColorMode, useColorModeValue, useDisclosure, Flex, Stack, IconButton } from '@chakra-ui/react';
import React from 'react';
import {Link, useNavigate} from "react-router-dom"
import Wishlist from './Wishlist';
import "../styles/Headers.css"
import { Avatar, AvatarBadge, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const theme =useColorModeValue("gray.100", "gray.900")

  
  const logout=()=>{
    console.log("logout")
    localStorage.removeItem("token")
    navigate("/newuser")
  }


    return (
      <>
              <Box className="NavBox"  px={"4"} pt={"3"}  h={{lg:"11vh",sm:"7vh",base:"7vh"}}  gap={"7"} shadow={"base"} textAlign={"center"} 
              
          // bgColor={"rgb(3,8,27)"}
          bg={useColorModeValue("blue.500", "rgb(3,8,27)")}
            >

          <HStack  Color={"black"} display={{ sm: "none", base: "none", md: "block", lg: "flex" }} >
               <Heading size={"lg"} color={"white"} >
                <Link to="/" >
                CRYPTON
                </Link>
                </Heading>
          </HStack>
           <HStack px={"4"} gap={"12"}  textAlign={"center"} justifyContent={"center"} display={{ sm: "none", base: "none", md: "flex", lg: "flex" }} >
            <Button variant={"unstyled"} color={"white"} fontSize={"18px"} >
              <Link to="/" > Home </Link>
            </Button>
            
            <Button variant={"unstyled"} color={"white"} fontSize={"18px"} >
              <Link to="/exchanges" > Exchanges </Link>
            </Button>

            <Button variant={"unstyled"} color={"white"} fontSize={"18px"} >
              <Link to="/coins" > Coins </Link>
            </Button>

            </HStack>

            <HStack  justifyContent={"center"} gap={"7%"} display={{ sm: "none", base: "none", md: "flex", lg: "flex" }}  >

            <Wishlist/>
            
            <Button
                onClick={toggleColorMode}
                variant={"outline"}

                
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
             <Box  >
             <Menu>
      <MenuButton >
      <Avatar
              size={"md"}
              textColor={"white"}
              // name={"Kallol Sarkar"}
              bg={"red.600"}
              />
      </MenuButton>
      <MenuList>
        <Link to={"/myaccount"} ><MenuItem>My Account</MenuItem></Link>
        <MenuItem>Settings</MenuItem>
        <MenuItem
         onClick={logout}
        >Logout</MenuItem>
      </MenuList>
    </Menu>
             
             </Box>
            {/* <Button  color={"white"} bg={"rgb(2,19,56)"} >
              <Link to="/login" > Log In </Link>
            </Button>
            <Button  color={"white"} bg={"rgb(20,82,191)"} >
              <Link to="/signup" > Sign Up </Link>
            </Button> */}

            </HStack>
            
            

        <Flex>
            <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

            {isOpen ? (
          <Box pb={4} display={{ md: "none" }} mt={"48px"} ml={"-100px"} position={"relative"} w={"99vw"} bg={"rgb(3,2,27)"} color={"white"} zIndex={"25"} >
            <Stack as={"nav"} spacing={4}>
              <Button onClick={onClose} variant={"outline"}>
                <Link to="/">Home</Link>
              </Button>
              <Button onClick={onClose} variant={"outline"}>
                <Link to="/exchanges">Exchanges</Link>
              </Button>
              <Button onClick={onClose} variant={"outline"}>
                <Link to="/coins">Coins</Link>
              </Button>
              {/* <Button onClick={onClose} variant={"outline"}> */}
              <Box w={"100%"} borderRadius={"7%"}  border={"1px"} >
                <Wishlist/>
              {/* </Button> */}
              {/* <Button onClick={onClose} variant={"outline"}>
                <Link to="/admin/feedback">Feedback</Link>
              </Button> */}
              </Box>
              <Flex>
                <Button
                                    
                  variant={"outline"}
                  ml={"38vw"}
                  // onClick={() => LogOut()  }
                >
                  Logout
                </Button>
                <Button ml={"23vw"} onClick={toggleColorMode} variant={"outline"}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Flex>
            </Stack>
          </Box>
        ) : null}
        </Box>
        </>
    );
};

export default Header;