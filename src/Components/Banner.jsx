import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import banner from "../Assets/banner.png";
import zaralogo from "../Assets/zaralogo.png";
import zarabglogo from "../Assets/zarabglogo.png";

export default function Banner() {
  return (
    <>
      <Box pos={"relative"} minH={['25vh', '100vh']} mt={10}>
        <Image src={banner} pos={"absolute"} />
        <Image
          src={zarabglogo}
          pos={"absolute"}
          right={0}
          top={["0.6rem", "2rem"]}
          width={"35%"}
        />
        <Image
          src={zaralogo}
          pos={"absolute"}
          width={"15%"}
          right={["6.8rem", "27.3rem"]}
          top={["2.2rem", "10.8rem"]}
        />
        <Text
          color={"white"}
          pos={"absolute"}
          fontFamily={"'Roboto','sans-serif'"}
          fontSize={["3xs", "lg"]}
          textTransform={"capitalize"}
          fontWeight={400}
          right={["1.75rem", "19.7rem"]}
          top={["4.2rem", "19rem"]}
        >
          Lustrous yet understated. The new evening <br /> wear collection
          exclusively offered at the <br /> reopened Giorgio Armani boutique in
          Los <br />
          Angeles.
        </Text>
        <Button bgColor={"white"} pos={"absolute"} borderRadius={0} size={["xs","lg"]} right={["4.6rem", "31.3rem"]}
          top={["7.6rem", "28rem"]} fontFamily={'"Roboto","sans-serif"'}>
          See Collection
        </Button>
      </Box>
    </>
  );
}
