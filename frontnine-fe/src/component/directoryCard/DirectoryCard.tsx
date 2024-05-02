import React from "react";
import {Box, Flex, Heading, HStack, Text} from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import {HCard} from "../common/HCard";

export const DirectoryCard = ()=>{
    return(
        <Box maxW="calc(4/5 * 100%)" marginTop="-100px" zIndex="100" backgroundColor={'gray.100'}  p={5}  boxShadow='dark-lg' rounded='md' textAlign={'center'}>
            <Text fontSize='2xl' mt={5} color={'grey.800'}>Now Entering Boise Golf Hub</Text>
            <Text fontSize='lg' p={5} color={'grey.800'}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
            <HStack>
            <Box maxW="calc(1/3 * 100%)" p={5}>  <HCard image={'ethan'} title={'ethan'} description={'ethan'}/></Box>
            <Box maxW="calc(1/3 * 100%)" p={5}>  <HCard image={'ethan'} title={'ethan'} description={'ethan'}/></Box>
            <Box maxW="calc(1/3 * 100%)" p={5}>  <HCard image={'ethan'} title={'ethan'} description={'ethan'}/></Box>
            </HStack>
        </Box>

    )
}