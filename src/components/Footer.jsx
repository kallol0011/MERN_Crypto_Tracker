import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";



const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Welcome to crypton.in

            Our goal is help traders providing rich data via crypton.in. 
            We created Crypton for the traders who want to make use of data for daily trading.
             This is a continuous effort to make it a great tool for everyone. 
             We appreciate the support and love we got from you.

           <p>
           For any support or feedback, feel free to contact us via <span style={{color:"skyblue"}} > contact@crypton.in </span> 
           </p>
            
          </Text>
        </VStack>

        
      </Stack>
    </Box>
  );
};

export default Footer;
