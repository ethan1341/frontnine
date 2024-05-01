import { extendTheme } from "@chakra-ui/react";

export const frontNineTheme = extendTheme({
    fonts: {
        heading: "'Montserrat', sans-serif",
        body: "'Merriweather', serif",
        Text: "'Merriweather', serif", // Corrected key to 'Text' instead of 'text'
    },
    styles: {
        global: {
            html: {
                height: "100%",
            },
            body: {
                height: "100%",
            },
            "#root": {
                height: "100%",
            },
        },
    },
    components: {
        Heading: {
            baseStyle: {
                color: "white", // Set h2 text color to white
                fontFamily: "'Merriweather', serif",
            },
        },
        Text: {
            baseStyle: {
                color: "white", // Set Text component text color to white
            },
        },
        Button:{
            baseStyle:{
                color:'white',
                background:'transparent',
                border:"1px solid white",
                fontFamily: "'Montserrat', sans-serif",
                borderRadius:0,
                transition: "background-color 0.3s, color 0.3s",
                fontWeight:300,
                _hover: {
                    color: "black", // Text color on hover
                    background: "white", // Background color on hover
                },
            },


            defaultProps: {
                // Then here we set the base variant as the default
                variant: 'base'
            }
        }
    },
});