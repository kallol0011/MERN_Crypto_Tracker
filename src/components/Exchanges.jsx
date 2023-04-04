import React from 'react';
import { useEffect } from 'react';
import axios from "axios"
import {server} from "../index"
import { useState } from 'react';
import Loder from "./Loader"
import { Container, HStack } from '@chakra-ui/react';
import ExchangeCard from './ExchangeCard';
import ErrorCard from "./ErrorComponent";
import Footer from './Footer';

const Exchanges = () => {
const [exchanges,setExchanges]=useState([])
const [loading,setLoding]=useState(true)
const [error , setError]=useState(false)

    useEffect(()=>{

        const fetchExchanges = async ()=>{
 
             try{

                const {data} =await axios.get(`${server}/exchanges`);
                setExchanges(data)
                console.log(data)
                setLoding(false)
             
            }
             catch(error)
             {
                setError(true)
                setLoding(false)
                
             }
    
        }
        
        fetchExchanges()
        
    },[])
 

    if(error){
      return <ErrorCard  msg={"somthing went wrong in url"}  />
    }

    return (
        <Container maxW={"container.xl"} >
            {
                loading? <Loder/> :
                
                <HStack wrap={"wrap"} justifyContent={"space-evenly"} >
                   { exchanges.map(({name,image,rank,url,trust_score_rank})=>(
                        <ExchangeCard
                         name={name}
                         image={image}
                         rank={rank}
                         url={url}
                         trust_score_rank={trust_score_rank}
                        
                        />
                    )) 
         
                   }
                   
                </HStack>
            }

            
        </Container>
        
    );
};

export default Exchanges;