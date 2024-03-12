import { Badge, Box, Heading, Image, Stack, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "../Components/Rating";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Stack p={[4, 10]}>
        <Box>
          <Image
            src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
            width={"25%"}
          />
        </Box>
        <VStack>
            <Heading>Shuvayu</Heading>
            <Badge colorScheme='green'>Success</Badge>
            <Rating rating={5}/>
        </VStack>
      </Stack>
    </>
  );
}
