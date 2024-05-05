import {Button, Card, CardBody, CardFooter, Stack, Image, Text} from "@chakra-ui/react";
import {ReactNode} from "react";

type props ={
    image: string;
    title: string;
    description: string;
}

function Heading(props: { size: string, children: ReactNode }) {
    return null;
}

export const HCard:React.FC<props> = ({image,title,description})=>{
    return(
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            height='auto'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                h={'130px'}
                src={image}
                alt='Caffe Latte'
            />

            <Stack>
                <CardBody>
                    <text color="grey.800" fontSize="md">Find a course</text>

                    <Text py='2' fontSize="sm" color="grey.800">
                       Find a course in Boise Idaho!!!!!!!!
                    </Text>
                </CardBody>
            </Stack>
        </Card>
    )
}