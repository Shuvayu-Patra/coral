import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import HeroImage from "../Assets/HeroImage.png";
import { FaShoppingBag } from "react-icons/fa";
import Vector1 from "../Assets/Vector1.png";
import Vector2 from "../Assets/Vector2.png";

function HeroSection() {
  return (
    <>
      <Box p={[4, 8]} bgGradient='linear(to-b, #ffffff, #f4f4f5)' pos={"relative"} >
        <Image src={Vector1} pos={"absolute"} left={0} bottom={'6rem'} />
        <Image src={Vector2} pos={"absolute"} right={0} bottom={'2rem'}/>
        <Stack
          direction={["column", "row"]}
          maxW={"fit-content"}
          py={10}
          justifyContent={"center"}
          mx={"auto"}
        >
          <VStack align={"left"} justifyContent={"center"} order={[2, 1]}>
            <Heading
              fontSize="5xl"
              fontFamily={"'Roboto','sans-serif'"}
              fontWeight={300}
              my={4}
              alignSelf={["center", "flex-start"]}
            >
              Collections
            </Heading>
            <Container px={1}>
              <Text
                fontSize={["md", "xl"]}
                textTransform={"capitalize"}
                fontFamily={"'Roboto','sans-serif'"}
                fontWeight={400}
                pr={[0, 0]}
                textAlign={["center", "left"]}
                // alignSelf={["center", "flex-start"]}
                lineHeight={"180%"}
              >
                You can explore Ans shop many different collection from various
                brands here
              </Text>
            </Container>
            <Button
              leftIcon={<FaShoppingBag color="white" />}
              bgColor={"#1E2832"}
              variant="solid"
              color={"white"}
              size={"lg"}
              maxW={"fit-content"}
              _hover={{
                bgColor: "rgb(30, 40, 50, 0.9)",
              }}
              borderRadius={0}
              my={4}
              alignSelf={["center", "flex-start"]}
            >
              Shop Now
            </Button>
          </VStack>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            order={[1, 2]}
          >
            <Image
              src={HeroImage}
              alt="HeroImage"
              width={["80%", "70%"]}
              objectFit="cover"
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default HeroSection;
