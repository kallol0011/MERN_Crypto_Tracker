import React from 'react';
import {
    Badge,
    Box,
    Button,
    Container,
    HStack,
    Image,
    Progress,
    Radio,
    RadioGroup,
    Stat,
    StatArrow,
    StatHelpText,
    StatLabel,
    StatNumber,
    Text,
    VStack,
  } from "@chakra-ui/react";
const CustomBar = ({high,low}) => {
    return (
        <VStack w={"full"} >
    <Progress value={50} colorScheme={"teal"} w={"full"} />
       <HStack>
          <Badge mr={"7"} children={low} colorScheme={"red"}  />
          <Text fontSize={"sm"} >24 Hr Range</Text>
          <Badge children={high} colorScheme={"green"}  />

          <Badge/>
          
       </HStack>

  </VStack>
    );
};

export default CustomBar;
