import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {
    image: string;
    title: string;
    body: string;
};

export const Parallax: React.FC<Props> = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const boxPosition = document.getElementById("parallaxBox")?.getBoundingClientRect().top;
        const scrollPosition = window.innerHeight / 1.5;

        if (boxPosition && boxPosition < scrollPosition) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Attach event listener when component mounts
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Flex
            minH="50vh"
            minW="100vw"
            backgroundColor="#a8a8a8"
            backgroundSize="cover"
            backgroundPosition="center"
            position="relative"
            overflowX="hidden"
            overflowY="auto"
            justify="center"
            alignItems="center"
        >
            <Box
                id="parallaxBox"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                color="white"
                textAlign="center"
                opacity={isVisible ? "1" : "0"}
                transition="opacity 0.2s, transform 0.2s"
                _hover={{ opacity: 1, transform: "translate(-50%, -50%)" }}
            >
                <Heading as="h1" size="2xl">
                    Parallax Text Scroll
                </Heading>
                <Text>
                    This is some parallax text. Scroll down to see the effect!
                </Text>
            </Box>
        </Flex>
    );
};