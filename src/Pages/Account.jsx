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

export default function Account() {
  const [name, setName] = useState("");
  const [changedName, setChangedName] = useState("");
  const [email, setEmail] = useState("");
  const user = useFirebase().user;
  const [rename, setRename] = useState(false);

  const toast = useToast();

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
    const getUserData = () => {
      if (user) {
        const dbR = ref(db, `users/${user?.uid}`);
        onValue(dbR, (snapshot) => {
          console.log(snapshot?.val());
          const data = snapshot?.val() || {};
          setName(data.name);
          setChangedName(data.name);
          setEmail(data.email);
        });
      }
    };
    getUserData();
  }, [user?.uid, user]);

  return (
    <>
      <Container p={8} maxW={"xl"}>
        <Stack gap={5} flexDir={["column", "row"]} align={"center"}>
          <Avatar
            size={"2xl"}
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
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
