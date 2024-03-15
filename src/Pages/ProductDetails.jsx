import {
  Badge,
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "../Components/Rating";
import axios from "axios";
import Category from "./Category";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {loading ? (
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          minH={"72vh"}
        >
          <Spinner
            thickness="3px"
            speed="0.65s"
            // emptyColor="gray.200"
            color="red.500"
            size="xl"
          />
        </Box>
      ) : (
        <Stack
          p={[4, 20]}
          gap={10}
          flexDirection={["column", "row"]}
          justifyContent={"space-evenly"}
          my={5}
        >
          <Image src={product?.image} width={["50%", "25%"]} mx={"auto"} />
          <VStack
            justifyContent={"space-between"}
            align={"start"}
            p={[5, 15]}
            gap={5}
          >
            <Heading textAlign={"left"} fontFamily={'"Roboto","sans-serif"'}>
              {product?.title}
            </Heading>
            <Badge colorScheme="green">{product?.category}</Badge>
            <Rating rating={product?.rating?.rate} />
            <Text fontSize={["md", "xl"]}>{product?.description}</Text>
            <HStack gap={5}>
              <Text fontSize={["2xl", "4xl"]}>${product?.price}</Text>
              <Text
                fontSize={["xl", "2xl"]}
                textDecoration={"line-through"}
                color={"gray"}
              >
                ${(product?.price + 25).toPrecision(4)}
              </Text>
            </HStack>
            <HStack gap={5}>
              <Button colorScheme="green" variant="solid">
                Buy Now
              </Button>
              <Button colorScheme="green" variant="outline">
                Add to Cart
              </Button>
            </HStack>
          </VStack>
        </Stack>
      )}
      <Category title={"Similar Products"} categories={product?.category}/>

    </>
  );
}
