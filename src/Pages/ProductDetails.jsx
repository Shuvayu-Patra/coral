import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Select,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "../Components/Rating";
import { FaFilter } from "react-icons/fa6";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [sortby, setSortby] = useState("desc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // window.scrollTo(0, 0);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .then(() => {
        axios.get(
          `https://fakestoreapi.com/products/category/${product?.category}?sort=${sortby}`
        ).then((response) => {
          setSimilarProducts(response.data);
          setLoading(false);
        });
      });
  }, [id, sortby, product?.category]);

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
      <HStack justifyContent={"space-between"} p={[4, 8]}>
        <Heading textTransform={"capitalize"}>
          Similar Products
        </Heading>
        <Select
          variant={"outline"}
          placeholder="Filter"
          icon={<FaFilter color="white" />}
          maxW={"fit-content"}
          borderRadius={0}
          bg={"#1E2832"}
          color={"white"}
          size={["sm", "md"]}
          _hover={{
            bgColor: "rgb(30, 40, 50, 0.9)",
          }}
          onChange={(e) => setSortby(e.currentTarget.value)}
        >
          <option style={{ color: "black" }} value={"asc"}>
            Price: Low To High
          </option>
          <option style={{ color: "black" }} value={"desc"}>
            Price: High to Low
          </option>
        </Select>
      </HStack>

      <SimpleGrid minChildWidth="120px" spacing="1rem" p={[2, 4]}>
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
          similarProducts.map((product) => {
            return (
              <Link to={`/product/${product?.id}`} key={product?.id}>
                <Card key={product?.id}>
                  <CardBody p={[2, 6]}>
                    <VStack
                      justifyContent={"space-between"}
                      align={"center"}
                      p={[2, 15]}
                      minH={["62vh", "76vh"]}
                    >
                      <Image
                        src={product?.image}
                        alt={product?.title}
                        borderRadius="lg"
                        aspectRatio={1 / 1}
                      />
                      <Heading
                        fontSize={["sm", "md"]}
                        fontFamily={"'Roboto','sans-serif'"}
                        textAlign={"center"}
                        justifyContent={"space-around"}
                      >
                        {product?.title}
                      </Heading>
                      <Rating rating={product?.rating?.rate} />

                      <Text
                        textTransform={"capitalize"}
                        fontSize={["sm", "md"]}
                      >
                        {product?.category}
                      </Text>
                      <Text color="blue.600" fontSize={["xl", "2xl"]}>
                        ${product?.price}
                      </Text>
                      <Text
                        fontSize={["xl", "2xl"]}
                        textDecoration={"line-through"}
                        color={"gray"}
                      >
                        ${(product?.price + 25).toPrecision(4)}
                      </Text>
                    </VStack>
                  </CardBody>
                </Card>
              </Link>
            );
          })
        )}
      </SimpleGrid>
    </>
  );
}
