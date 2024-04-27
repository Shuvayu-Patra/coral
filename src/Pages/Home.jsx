import React, { useEffect, useState } from "react";
import HeroSection from "../Components/HeroSection";
import BrandLogo from "../Components/BrandLogo";
import PopularStyles from "../Components/PopularStyles";
import ProductList from "../Components/ProductList";
import Banner from "../Components/Banner";
import { useFirebase } from "../Context/Firebase";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

function Home() {
  const loggedin = useFirebase().loggedin;
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!loggedin) {
      navigate("/login");
    }
  }, [loggedin, navigate]);

  const [isOpen, setIsOpen] = useState(false);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   setTimeout(() => {
  // if (sessionStorage.getItem("isModalShown") === null) {
  //   sessionStorage.setItem("isModalShown", true);
  //       setIsOpen(true);
  //     }
  //   }, 5000);
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setIsOpen(true);
    }, 1000);
  }, []);

  return (
    <>
      <HeroSection />
      <BrandLogo />
      <PopularStyles />
      <ProductList title="Hot New Releases" />
      <Banner />
      <ProductList title="Best Sellers" isBestseller={true} />
      <Modal
        closeOnOverlayClick={false}
        onClose={() => setIsOpen(false)}
        isOpen={isOpen}
        isCentered
        size={["xs", "xl"]}
      >
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />
        <ModalContent>
        <ModalCloseButton _focusVisible={{ outline: "none" }} />
          <ModalBody boxShadow={"0 0 20px gray"}
            borderRadius={"1rem"}
            background={
              "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%)"
            }>
            <VStack p={[10, 20]} gap={5} textAlign={"center"}>
              <Heading fontFamily={"'Roboto', 'sans-serif'"}>Get Flat 20% off</Heading>
              <Text fontFamily={"'Roboto','sans-serif'"} textTransform={"capitalize"}>
                on your first purchase
              </Text>
              <Button fontFamily={"'Roboto','sans-serif'"}>Shop Now</Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Home;
