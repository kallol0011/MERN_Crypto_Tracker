import { Alert, AlertIcon,Text } from '@chakra-ui/react';
import React from 'react';

const ErrorCard = ({msg}) => {
    return (
        <Alert 
         position={"fixed"}
         bottom={"4"}
         transform={"translate(-50%)"}
         w={"container.lg"}

        >

            <AlertIcon/>
          <Text>{msg}</Text> 


        </Alert>
    );
};

export default ErrorCard;
