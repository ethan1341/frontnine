import {Link} from "react-router-dom";
import React from "react";
import {Flex, Text, Image} from "@chakra-ui/react";
import {navText} from "../../styles/chakra-styles";

export const Navbar = ()=>{
    return (
        <nav>
            <Flex  w="100%" align="center" justify="space-around" p="5" zIndex="5" position="fixed">
                <Text sx={navText}>Courses</Text>
                <Text sx={navText}>Book</Text>
                <Image
                    width="100px"
                    objectFit="cover"
                    src="./logo.png"

                />
                <Text sx={navText}>Contact</Text>
                <Text sx={navText}>Feature</Text>
            </Flex>
        </nav>
    )
}