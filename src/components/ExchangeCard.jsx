import { VStack,Image,Text,Heading } from '@chakra-ui/react';
import React from 'react';

const ExchangeCard = ({name,image,rank,url,trust_score_rank}) => {
    return (
        <a href={url} target={"blank"}>
           <VStack w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"alt 0.3s"} m={"4"} 
             
             css={{
                 "&:hover":{transform:"scale(1.1)"}
             }}

           >
             <Image src={image} 
               objectfit={"contain"}
              alt={"Exchange"}
              />

              <Heading size={"md"} noOfLines={1} >{trust_score_rank}</Heading>
              <Text noOfLines={1} >{name}</Text>



           </VStack>


        </a>
    );
};

export default ExchangeCard;