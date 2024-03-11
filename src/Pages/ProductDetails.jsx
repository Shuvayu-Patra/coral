import { Box, Heading, Image, Stack, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

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
            <Heading></Heading>
        </VStack>
      </Stack>
    </>
  );
}
