import {
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
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ProductList({ title = "", isBestseller = false }) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("men's clothing");
  const [sortBy, setSortBy] = useState("desc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://fakestoreapi.com/products/category/${category}?sort=${sortBy}`
      )
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
  }, [category, sortBy]);

  return (
    <>
      <Heading
        size={["lg", "xl"]}
        fontFamily={"'Roboto','sans-serif'"}
        textTransform={"capitalize"}
        p={[2, 8]}
        mt={10}
        textAlign={"center"}
        fontWeight={800}
      >
        {title}
      </Heading>
      <HStack justifyContent={"space-between"} p={5} px={[2, 10]}>
        <Select
          variant={"flushed"}
          maxW={"fit-content"}
          size={["sm", "md"]}
          onChange={(e) => setCategory(e.currentTarget.value)}
        >
          <option value={"men's clothing"}>Men's Fashion</option>
          <option value={"women's clothing"}>Women's Fashion</option>
          <option value={"electronics"}>Electronics</option>
          <option value={"jewelery"}>Jewellery</option>
        </Select>
        {isBestseller ? (
          <Button
            bgColor={"#1E2832"}
            variant="solid"
            color={"white"}
            size={["sm", "md"]}
            maxW={"fit-content"}
            _hover={{
              bgColor: "rgb(30, 40, 50, 0.9)",
            }}
            borderRadius={0}
            my={4}
            justifySelf={["center", "flex-end"]}
          >
            Show All
          </Button>
        ) : (
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
            onChange={(e) => setSortBy(e.currentTarget.value)}
          >
            <option style={{ color: "black" }} value={"asc"}>
              Price: Low To High
            </option>
            <option style={{ color: "black" }} value={"desc"}>
              Price: High to Low
            </option>
          </Select>
        )}
      </HStack>
      {/* <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]}
        templateRows={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={6}
        p={6}
      > */}
      <SimpleGrid minChildWidth="120px" spacing="1rem" p={2}>
        {loading ? (
          <Box display={'flex'} alignItems={"center"} justifyContent={"center"} minH={"72vh"}>
            <Spinner
              thickness="3px"
              speed="0.65s"
              // emptyColor="gray.200"
              color="red.500"
              size="xl"
            />
          </Box>
        ) : (
          products.map((product) => {
            return (
              <Link to={`/product/${product?.id}`} key={product?.id}>
                <Card key={product?.id}>
                  <CardBody>
                    <VStack
                      h={"100%"}
                      justifyContent={"space-around"}
                      align={"center"}
                    >
                      <Image
                        src={product?.image}
                        alt={product?.title}
                        borderRadius="lg"
                        aspectRatio={1 / 1}
                      />
                      <Stack mt="6" spacing="3">
                        <Heading
                          fontSize={["sm", "md"]}
                          fontFamily={"'Roboto','sans-serif'"}
                        >
                          {product?.title}
                        </Heading>

                        <HStack justifyContent={"space-between"}>
                          <Text
                            textTransform={"capitalize"}
                            fontSize={["sm", "md"]}
                          >
                            {product?.category}
                          </Text>
                          <Text color="blue.600" fontSize={["xl", "2xl"]}>
                            ${product?.price}
                          </Text>
                        </HStack>
                      </Stack>
                    </VStack>
                  </CardBody>
                </Card>
              </Link>
            );
          })
        )}
      </SimpleGrid>
      {/* </Grid> */}
    </>
  );
}

export default ProductList;
