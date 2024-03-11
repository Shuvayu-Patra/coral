import {
  Card,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

function PopularStyles() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=4").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      {/* <Box minW={'fit-content'}> */}
      <Grid
        templateRows={["1fr", "repeat(2, 1fr)"]}
        templateColumns={["1fr", "repeat(4, 1fr)"]}
        gap={10}
        px={[5, 40]}
        py={[5, 20]}
        pos={"relative"}
      >
        <GridItem
          rowSpan={[1, 2]}
          colSpan={[1, 2]}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text
            maxWidth={["100%", "fit-content"]}
            fontFamily={"'Roboto','sans-serif'"}
            fontWeight={600}
            textTransform={"uppercase"}
            transform={["", "rotate(-90deg)"]}
            pos={["", "absolute"]}
            left={"-5rem"}
            top={"47%"}
            fontSize={["1rem", "1.5rem"]}
            textAlign={"center"}
            p={[5, 0]}
          >
            Explore new and popular styles
          </Text>
          <Card variant={"elevated"}>
            <Image
              src={"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"}
              aspectRatio={1 / 1}
            />
          </Card>
        </GridItem>
        {products.length > 0 &&
          products.map((product) => {
            return (
              <GridItem
                rowSpan={1}
                colSpan={1}
                key={product.id}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Card variant={"elevated"}>
                  <Image src={product?.image} aspectRatio={1 / 1} />
                </Card>
              </GridItem>
            );
          })}
        {/* <GridItem rowSpan={1} colSpan={1}>
            <Image src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" />
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Image src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" />
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Image src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" />
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Image src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" />
          </GridItem> */}
      </Grid>
      {/* </Box> */}
    </>
  );
}

export default PopularStyles;
