import { Box, HStack, Image, Stack } from "@chakra-ui/react";
import React from "react";
import Bl1 from '../Assets/01.png';
import Bl2 from '../Assets/02.png';
import Bl3 from '../Assets/03.png';
import Bl4 from '../Assets/04.png';
import Bl5 from '../Assets/05.png';

function BrandLogo() {
  return (
    <>
      <HStack direction={["column", "row"]} justifyContent={"center"} p={[2,6]} bgColor={"#ffffff"}>
        <Box >
          <Image src={Bl1} alt="Brandlogo" width={"70%"}/>
        </Box>
        <Box >
        <Image src={Bl2} alt="Brandlogo" width={"70%"}/>
        </Box>
        <Box >
        <Image src={Bl3} alt="Brandlogo" width={"70%"}/>
        </Box>
        <Box >
        <Image src={Bl4} alt="Brandlogo" width={"70%"}/>
        </Box>
        <Box >
        <Image src={Bl5} alt="Brandlogo" width={"70%"}/>
        </Box>
      </HStack>
    </>
  );
}

export default BrandLogo;
