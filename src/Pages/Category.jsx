import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Select,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Rating from "../Components/Rating";

export default function Category({ title = "", categories = "" }) {
  const { category } = useParams();
  const [product, setProduct] = useState([]);
  const [sortby, setSortby] = useState("desc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://fakestoreapi.com/products/category/${
          categories ? categories : category
        }?sort=${sortby}`
      )
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      });
  }, [category, categories, sortby]);

  return (
    <>
      <HStack justifyContent={"space-between"} p={[4, 8]}>
        <Heading textTransform={"capitalize"}>
          {title ? title : category}
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
          product.map((product) => {
            return (
              <Link to={`/product/${product?.id}`} key={product?.id}>
                <Card key={product?.id}>
                  <CardBody p={[2, 6]}>
                    <VStack
                      justifyContent={"space-between"}
                      align={"center"}
                      p={[2, 15]}
                      minH={["58vh", "68vh"]}
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
