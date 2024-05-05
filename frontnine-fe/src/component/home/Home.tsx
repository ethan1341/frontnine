import {Box, Button, Container, Flex, Heading, HStack, Image} from "@chakra-ui/react";
import React from "react";
import {Jumbotron} from "../jumbotron/Jumbotron";
import {DirectoryCard} from "../directoryCard/DirectoryCard";
import {Parallax} from "../common/Parallax";

export const Home = ()=>{
    return (
        <Flex align="center" direction="column" height="100%" w="100%">
        <Jumbotron/>
            <DirectoryCard/>
            <Parallax image={"ethan"} title={"ethan"} body={"ethan"}/>
        </Flex>
    )
}