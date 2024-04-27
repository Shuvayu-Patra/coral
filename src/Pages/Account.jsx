import {
  Avatar,
  Button,
  Container,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { onValue, ref, update } from "firebase/database";
import React, { useEffect, useState } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { capitalizeFirstLetter, db, useFirebase } from "../Context/Firebase";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const [name, setName] = useState("");
  const [changedName, setChangedName] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [email, setEmail] = useState("");
  const user = useFirebase().user;
  const [rename, setRename] = useState(false);
  const navigate = useNavigate();
  

  const firebase = useFirebase()

  const fileUploadRef = useRef();

  const toast = useToast();

  const handleFileUpload = async () => {
    fileUploadRef.current.click();
    fileUploadRef.current.onchange = async () => {
      const file = fileUploadRef.current.files[0];
      console.log(file);
      await firebase.uploadImage(file)
      
    };
  };

  const HandleSaveClick = () => {
    update(ref(db, `users/${user?.uid}`), { name: changedName })
      .then(() => {
        toast({
          title: "Name Updated Successfully.",
          status: "success",
          variant: "subtle",
          position: "top",
          isClosable: true,
        });
        setRename(false);
      })
      .catch((error) => {
        toast({
          title: capitalizeFirstLetter(
            error.code.split("auth/")[1].split("-").join(" ")
          ),
          status: "error",
          variant: "subtle",
          position: "top",
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    if(!firebase.loggedin){
      navigate("/")
    }
    const getUserData = () => {
      if (user) {
        const dbR = ref(db, `users/${user?.uid}`);
        onValue(dbR, (snapshot) => {
          const data = snapshot?.val() || {};
          console.log(data);
          setName(data.name);
          setChangedName(data.name);
          setEmail(data.email);
          setProfilePic(data.profilePic)
          // console.log(data.profilePic)
        });
      }
    };
    getUserData();
  }, [user?.uid, user, navigate, firebase.loggedin]);

  return (
    <>
      <Container p={8} maxW={"xl"}>
        <Stack gap={5} flexDir={["column", "row"]} align={"center"}>
          <Avatar
            size={"2xl"}
            name={name}
            src={profilePic}
            onClick={handleFileUpload}
          />
          <input
            hidden
            type="file"
            accept="image/png, image/jpeg"
            ref={fileUploadRef}
          />
          {rename ? (
            <>
              <Input
                placeholder="Enter your name here"
                textAlign={["center", "left"]}
                value={changedName}
                onChange={(e) => {
                  setChangedName(e.target.value);
                }}
              />
              <HStack justifyContent={"space-between"}>
                <Button
                  colorScheme="teal"
                  variant="solid"
                  width={"4rem"}
                  onClick={HandleSaveClick}
                >
                  save
                </Button>
                <Button
                  colorScheme="teal"
                  variant="outline"
                  width={"4rem"}
                  onClick={() => setRename(false)}
                >
                  cancel
                </Button>
              </HStack>
            </>
          ) : (
            <>
              <VStack align={["center", "start"]} gap={3}>
                <HStack>
                  <Text fontSize={"xl"}>{name}</Text>
                  <MdDriveFileRenameOutline
                    cursor={"pointer"}
                    onClick={() => {
                      setRename(true);
                    }}
                    size={20}
                  />
                </HStack>
                <Text fontSize={"xl"}>{email}</Text>
              </VStack>
            </>
          )}
        </Stack>
      </Container>
    </>
  );
}
