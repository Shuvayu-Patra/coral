import {
  Button,
  Card,
  CardBody,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa6";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("men's clothing");
  const [sortBy, setSortBy] = useState("desc");

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}?sort=${sortBy}`)
      .then((res) => {
        setProducts(res.data);
      });
  }, [category,sortBy]);

  return (
    <>
      <Heading
        size={["lg", "xl"]}
        fontFamily={"'Roboto','sans-serif'"}
        textTransform={"capitalize"}
        p={[2, 8]}
        textAlign={"center"}
        fontWeight={400}
      >
        Hot New Releases
      </Heading>
      <HStack justifyContent={"space-between"} p={5} px={[2,10]}>
        <Select
          variant={"flushed"}
          maxW={"fit-content"}
          size={['sm','md']}
          onChange={(e) => setCategory(e.currentTarget.value)}
        >
          <option value={"men's clothing"}>Men's Fashion</option>
          <option value={"women's clothing"}>Women's Fashion</option>
          <option value={"electronics"}>Electronics</option>
          <option value={"jewelery"}>Jewellery</option>
        </Select>
        <Select
          variant={"outline"}
          placeholder="Filter"
          icon={<FaFilter color="white" />}
          maxW={"fit-content"}
          borderRadius={0}
          bg={"#1E2832"}
          color={"white"}
          size={['sm','md']}
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
        {/* <Button
          leftIcon={<FaFilter color="white" />}
          bgColor={"#1E2832"}
          variant="solid"
          color={"white"}
          size={"sm"}
          maxW={"fit-content"}
          _hover={{
            bgColor: "rgb(30, 40, 50, 0.9)",
          }}
          borderRadius={0}
          my={4}
          justifySelf={["center", "flex-end"]}
        >
          Filter
        </Button> */}
      </HStack>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]}
        templateRows={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={6}
        p={6}
      >
        {products &&
          products.map((product) => {
            return (
              <GridItem rowSpan={1} colSpan={1} my={5} key={product.id}>
                <Card height={"100%"}>
                  <CardBody>
                    <Image
                      src={product.image}
                      alt={product.title}
                      borderRadius="lg"
                      aspectRatio={1 / 1}
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md" fontFamily={"'Roboto','sans-serif'"}>
                        {product.title}
                      </Heading>

                      <HStack justifyContent={"space-between"}>
                        <Text textTransform={"capitalize"}>
                          {product.category}
                        </Text>
                        <Text color="blue.600" fontSize="2xl">
                          ${product.price}
                        </Text>
                      </HStack>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>
            );
          })}
      </Grid>
    </>
  );
}

export default ProductList;
