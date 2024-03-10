import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import coral from "../Assets/coral.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <Grid
        templateRows={"1fr"}
        templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
        py={8}
      >
        <GridItem colSpan={[2, 1]} p={[4, 8]}>
          <Image src={coral} width={"50%"} my={1} mx={["auto", 0]} />
          <Text
            fontSize="md"
            color="gray.400"
            textAlign={["center", "left"]}
            my={5}
          >
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore
            et dolore magna aliqua
          </Text>
          {/* <HStack gap={8} my={8} justifyContent={["center", "left"]}>
            <a
              href="https://www.linkedin.com/in/shuvayu-patra-2506b8221/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.facebook.com/shuvayu.patra"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://github.com/Shuvayu-Patra"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.instagram.com/ami_shuvayu/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={20} />
            </a>
          </HStack> */}
        </GridItem>
        <GridItem colSpan={[1, 1]} p={[4, 8]} textAlign="center">
          <VStack align={["start"]}>
            <Heading
              textAlign={["left"]}
              fontFamily={'"Roboto", "sans-serif"'}
              fontSize={["md", "lg"]}
            >
              About Us
            </Heading>
            <Text
              fontFamily={'"Roboto", "sans-serif"'}
              fontSize={["sm", "md"]}
              color="gray.400"
              textAlign={["left"]}
              mt={2}
            >
              Our Producers
            </Text>
            <Text
              fontFamily={'"Roboto", "sans-serif"'}
              fontSize={["sm", "md"]}
              color="gray.400"
              textAlign={["left"]}
            >
              Sitemap
            </Text>
            <Text
              fontFamily={'"Roboto", "sans-serif"'}
              fontSize={["sm", "md"]}
              color="gray.400"
              textAlign={["left"]}
            >
              FAQ
            </Text>
            <Text
              fontFamily={'"Roboto", "sans-serif"'}
              fontSize={["sm", "md"]}
              color="gray.400"
              textAlign={["left"]}
            >
              About Us
            </Text>
            <Text
              fontFamily={'"Roboto", "sans-serif"'}
              fontSize={["sm", "md"]}
              color="gray.400"
              textAlign={["left"]}
            >
              Terms & Conditions
            </Text>
          </VStack>
        </GridItem>
        <GridItem colSpan={[1, 1]} p={[4, 8]} textAlign="center">
          <VStack align={["start"]}>
            <Heading
              textAlign={["left"]}
              fontFamily={'"Roboto", "sans-serif"'}
              fontSize={["md", "lg"]}
            >
              CUSTOMER SERVICES
            </Heading>
            <Text
              fontFamily={'"Roboto", "sans-serif"'}
              fontSize={["sm", "md"]}
              color="gray.400"
              textAlign={["left"]}
              mt={2}
            >
              Contact Us
            </Text>
            <Text
              fontFamily={'"Roboto", "sans-serif"'}
              fontSize={["sm", "md"]}
              color="gray.400"
              textAlign={["left"]}
            >
              Track Your Order
            </Text>
            <Text
              fontFamily={'"Roboto", "sans-serif"'}
              fontSize={["sm", "md"]}
              color="gray.400"
              textAlign={["left"]}
            >
              Product Care & Repair
            </Text>
            <Text
              fontFamily={'"Roboto", "sans-serif"'}
              fontSize={["sm", "md"]}
              color="gray.400"
              textAlign={["left"]}
            >
              Book an Appointment
            </Text>
            <Text
              fontFamily={'"Roboto", "sans-serif"'}
              fontSize={["sm", "md"]}
              color="gray.400"
              textAlign={["left"]}
            >
              Shipping & Returns
            </Text>
          </VStack>
        </GridItem>
      </Grid>
      <Box borderTop={"2px solid gray"}>
        <HStack gap={8} my={4} justifyContent={["center"]}>
          <a
            href="https://www.linkedin.com/in/shuvayu-patra-2506b8221/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.facebook.com/shuvayu.patra"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://github.com/Shuvayu-Patra"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.instagram.com/ami_shuvayu/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={20} />
          </a>
        </HStack>
        <Text textAlign="center" color="gray.400" fontSize="sm" mt={2}>
          &copy; 2024 Coral, All rights reserved.
        </Text>
        <Text textAlign="center" color="gray.400" fontSize="sm" mt={2} pb={5}>
          Made with ❤️ by Shuvayu Patra.
        </Text>
      </Box>
    </>
  );
}
