import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import banner from "../Assets/banner.png";
import zaralogo from "../Assets/zaralogo.png";
import zarabglogo from "../Assets/zarabglogo.png";

export default function Banner() {
  return (
    <>
      <Box pos={"relative"}>
        <Image src={banner} pos={"absolute"} />
        <Image
          src={zarabglogo}
          pos={"absolute"}
          right={0}
          top={"2rem"}
          width={"35%"}
        />
        <Image
          src={zaralogo}
          pos={"absolute"}
          width={"10%"}
          right={["8rem", "32rem"]}
          top={["4.2rem", "12rem"]}
        />
        {/* <Container maxW="container.sm">
          <Text
            pos={"absolute"}
            color={"white"}
            fontFamily={"'Roboto','sans-serif'"}
            //   fontSize={["md", "xl"]}
            textTransform={"capitalize"}
            fontWeight={400}
            p={"20rem"}
            transform={'translateX(7.3%)'}
            // left={"5rem"}
          >
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </Text>
        </Container> */}
      </Box>
    </>
  );
}
