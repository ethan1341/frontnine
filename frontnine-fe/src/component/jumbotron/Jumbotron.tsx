import {Button, Flex, Heading, HStack} from "@chakra-ui/react";
import React from "react";

export const Jumbotron = () => {
    return (
        <Flex minH="100%" minW="100%" backgroundImage="./jumbotron-img.jpg"
              backgroundSize="cover"
              backgroundPosition="center"
              position="relative">
            <Flex
                position="relative"
                w="100%"
                minH="100%"
                align="center"
                justify="center"
                direction="column"
            >
                <Heading as='h1' size='xl' noOfLines={1}>
                    2024 Pinehurst Pro-Am
                </Heading>
                <Heading as='h3' m="5" size='md' noOfLines={1}>Pinehurst Resort & Country Club</Heading>
                <HStack m="2">
                    <Button>Book a Tee Time</Button>
                    <Button>Pinehurst Resort</Button>
                </HStack>
            </Flex>
        </Flex>
    )
}