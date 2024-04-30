import {Container, Flex, Image} from "@chakra-ui/react";
import React from "react";

export const Home = ()=>{
    console.log('this ran')
    return (
        <Flex height="100%" w="100%" background="red">
            <Image
                zIndex="1" position="relative"
                w="100%"
                objectFit="cover"
                src="./jumbotron-img.jpg"
            />
        </Flex>

    )
}