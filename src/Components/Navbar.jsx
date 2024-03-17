import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Image,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import coral from "../Assets/coral.svg";
import { FaBagShopping, FaUser } from "react-icons/fa6";
import { CgMenuMotion } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useFirebase } from "../Context/Firebase";
const category = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];
function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firebase = useFirebase();
  const signinWithGoogle = firebase.signinWithGoogle;
  return (
    <>
      <HStack
        bgColor={"#ffffff"}
        p={[2, 6]}
        justifyContent={["space-between", "space-evenly"]}
        alignItems={"center"}
        borderBottom={"1px solid #e3e3e3"}
        id="nav"
      >
        <Link to={"/"}>
          <Image src={coral} alt="logo" width={["10rem", "13rem"]} />
        </Link>
        <HStack display={["none", "flex"]} gap={8} justifyContent={"center"}>
          {category.map((item, index) => (
            <Link to={`category/${item}`} key={index}>
              <Button
                variant={"unstyled"}
                textTransform={"capitalize"}
                
              >
                <Text fontWeight={100} fontFamily={"'Open Sans','sans-serif'"}>
                  {item}
                </Text>
              </Button>
            </Link>
          ))}
        </HStack>
        <HStack
          gap={[2, 8]}
          justifySelf={"flex-end"}
          fontFamily={"'Roboto','sans-serif'"}
        >
          {/* <Button leftIcon={<FaUser size={20} />} variant="unstyled" onClick={signinWithGoogle}>
            <Text display={["none", "inline-block"]}>Account</Text>
          </Button>
          <Button leftIcon={<FaBagShopping size={20} />} variant="unstyled">
            <Text display={["none", "inline-block"]}>Shopping</Text>
          </Button> */}
          <Link to={  "/login" }>
          <Button leftIcon={<FaUser size={20} />} variant="unstyled" >
            <Text display={["none", "inline-block"]}>Sign up</Text>
          </Button>
          </Link>
          <Button
            display={["inline-block", "none"]}
            leftIcon={<CgMenuMotion size={20} />}
            variant="unstyled"
            onClick={onOpen}
          >
            <Text display={["none", "inline-block"]}>Menu</Text>
          </Button>
        </HStack>
      </HStack>

      <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent borderRadius={"1rem 1rem 0 0"}>
          <DrawerHeader
            fontFamily={"'Roboto','sans-serif'"}
            borderBottomWidth="1px"
          >
            Categories
          </DrawerHeader>
          <DrawerBody>
            <VStack gap={4} justifyContent={"center"} alignItems={"start"}>
              {category.map((item, index) => (
                <Link to={`category/${item}`} key={index}>
                  <Button
                    variant={"unstyled"}
                    textTransform={"capitalize"}
                    
                  >
                    <Text
                      fontWeight={100}
                      fontFamily={"'Open Sans','sans-serif'"}
                    >
                      {item}
                    </Text>
                  </Button>
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
