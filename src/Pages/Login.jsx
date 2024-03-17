import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaFacebook, FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <Stack p={[4, 8]} alignItems={"start"} gap={5}>
        <Heading
          fontFamily={'"Roboto","sans-serif"'}
          borderBottom={"2px solid black"}
          maxWidth={"fit-content"}
          fontSize={["2xl", "5xl"]}
          mx={"auto"}
        >
          Login
        </Heading>
        <Text
          fontFamily={'"Open Sans","sans-serif"'}
          fontSize={["md", "xl"]}
          textAlign={"center"}
          mx={""}
        >
          Email address
        </Text>
        <Input placeholder="Enter your email" size="md" />
        <Text
          fontFamily={'"Open Sans","sans-serif"'}
          fontSize={["md", "xl"]}
          textAlign={"center"}
          mx={""}
        >
          Password
        </Text>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size={["sm", "md"]}
              onClick={handleClickShowPassword}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Box
          as="button"
          height="24px"
          lineHeight="1.2"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border="1px"
          px="8px"
          borderRadius="2px"
          fontSize="14px"
          fontWeight="semibold"
          bg="#f5f6f7"
          borderColor="#ccd0d5"
          color="#4b4f56"
          _hover={{ bg: "#ebedf0" }}
          _active={{
            bg: "#dddfe2",
            transform: "scale(0.98)",
            borderColor: "#bec3c9",
          }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          mx={"auto"}
          mt={5}
        >
          Login
        </Box>
        <Text
          fontFamily={'"Roboto","sans-serif"'}
          fontSize={["md", "xl"]}
          textAlign={"center"}
          mx={"auto"}
          mt={2}
        >
          Or Login with
        </Text>
        <Button leftIcon={<FcGoogle />} colorScheme="teal" variant="outline" mx={"auto"} size={["md","lg"]} mt={2}>
          Login with Google
        </Button>
        <Button leftIcon={<FaFacebook />} colorScheme="teal" variant="outline" mx={"auto"} size={["md","lg"]} mt={2}>
          Login with Facebook
        </Button>
        <Button leftIcon={<FaGithub />} colorScheme="teal" variant="outline" mx={"auto"} size={["md","lg"]} mt={2}>
          Login with Github
        </Button>
        <Text
          fontFamily={'"Roboto","sans-serif"'}
          fontSize={["md", "xl"]}
          textAlign={"center"}
          mx={"auto"}
          mt={2}
        >
          Don't have an account?
        </Text>
        <Button colorScheme='teal' mx={"auto"} mt={2}>Sign up</Button>
      </Stack>
    </>
  );
}
