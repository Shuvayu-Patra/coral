import {
  Button,
  Card,
  Container,
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
import { db, useFirebase } from "../Context/Firebase";



export default function Login() {
  // const putData = () => {
  //   set(ref(db, "users/shuvayu"), {
  //     id: 1,
  //     name: "Shuvayu",
  //     age: 20,
  //   });
  // };

  const [showPassword, setShowPassword] = useState(false);
  const [signedup, setSignedUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const firebase = useFirebase();
  const signupUserWithEmailandPassword =
    firebase.signupUserWithEmailandPassword;
  const signinUserWithEmailandPassword =
    firebase.signinUserWithEmailandPassword;
  const signinWithGoogle = firebase.signinWithGoogle;
  const HandleButtonClick = () => {
    if (signedup) {
      signupUserWithEmailandPassword(name, email, password);
    } else {
      signinUserWithEmailandPassword(email, password);
    }
  };

  return (
    <>
      <Container my={10}>
        <Card>
          <Stack p={[4, 8]} alignItems={"start"} gap={5}>
            <Heading
              fontFamily={'"Roboto","sans-serif"'}
              borderBottom={"2px solid black"}
              maxWidth={"fit-content"}
              fontSize={["2xl", "5xl"]}
              mx={"auto"}
            >
              {signedup ? "Sign Up" : "Login"}
            </Heading>
            {signedup && (
              <>
                <Text
                  fontFamily={'"Roboto","sans-serif"'}
                  fontSize={["md", "xl"]}
                  textAlign={"center"}
                  mt={2}
                >
                  Name
                </Text>
                <Input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter your name"
                  size="md"
                  required
                />
              </>
            )}
            <Text
              fontFamily={'"Roboto","sans-serif"'}
              fontSize={["md", "xl"]}
              textAlign={"center"}
              mt={2}
            >
              Email address
            </Text>
            <Input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Enter your email"
              size="md"
              required
            />
            <Text
              fontFamily={'"Roboto","sans-serif"'}
              fontSize={["md", "xl"]}
              textAlign={"center"}
            >
              Password
            </Text>
            <InputGroup size="md">
              <Input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                required
              />
              <InputRightElement
                width="4.5rem"
                px={0}
                onClick={handleClickShowPassword}
                cursor={"pointer"}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </InputRightElement>
            </InputGroup>
            <Button
              colorScheme="teal"
              mx={"auto"}
              mt={4}
              w={"full"}
              onClick={HandleButtonClick}
            >
              {signedup ? "Sign Up" : "Login"}
            </Button>
            <Text
              fontFamily={'"Roboto","sans-serif"'}
              fontSize={["md", "xl"]}
              textAlign={"center"}
              mx={"auto"}
              mt={2}
            >
              Or Login with
            </Text>
            <Button
              leftIcon={<FcGoogle />}
              colorScheme="teal"
              variant="outline"
              mx={"auto"}
              size={["md", "lg"]}
              mt={2}
              w={"full"}
              onClick={signinWithGoogle}
            >
              Login with Google
            </Button>
            <Button
              leftIcon={<FaFacebook />}
              colorScheme="teal"
              variant="outline"
              mx={"auto"}
              size={["md", "lg"]}
              mt={2}
              w={"full"}
            >
              Login with Facebook
            </Button>
            <Button
              leftIcon={<FaGithub />}
              colorScheme="teal"
              variant="outline"
              mx={"auto"}
              size={["md", "lg"]}
              mt={2}
              w={"full"}
            >
              Login with Github
            </Button>
            <Text
              fontFamily={'"Roboto","sans-serif"'}
              fontSize={["md", "xl"]}
              textAlign={"center"}
              mx={"auto"}
              mt={2}
            >
              {signedup ? "Already have an account?" : "Don't have an account?"}
            </Text>
            <Button
              colorScheme="teal"
              mx={"auto"}
              mt={2}
              w={"full"}
              onClick={() => {
                setSignedUp(!signedup);
                window.scrollTo(0, 0);
              }}
            >
              {signedup ? "Login" : "Sign Up"}
            </Button>
          </Stack>
        </Card>
      </Container>
    </>
  );
}
