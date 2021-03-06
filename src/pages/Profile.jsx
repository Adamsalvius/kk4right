import React from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { authState } from "../stores/auths/atom";
import { Link } from "react-router-dom";
import { Box, Button,  Text } from "@chakra-ui/react";


function Profile() {
  const { user } = useRecoilValue(authState);
  
  const Handlereset = useResetRecoilState(authState);

  if (!user) {
    return (
      <Box>
       
        <Text align="center" marginTop={"2em"}>
       Login if you want to see your profile
        </Text>
      
      </Box>
    );
  }


  return (
    <Box>
      
      <Box align={"center"} marginTop={"2em"}>
        <Text fontSize={"2em"}>Profile</Text>
        <Text>Email: {user.email}</Text>

        <Text>Username: {user.username}</Text>
        <Text></Text>
        <Text fontSize={"1.5em"}>Full name</Text>
        <Text>{user.name.firstname} {user.name.lastname}</Text>
        <Text fontSize={"1.2em"}>Adress: </Text>
        <Text>{user.address.street} {user.address.number}</Text>
        <Text>{user.address.city} {user.address.zipcode}</Text>
       
        <Text>Phone: {user.phone}</Text>
        <Text>role in hierarchy: {user.role}</Text>
      
        <Button
          marginTop={"2em"}
          marginBottom={"2em"}
          size="md"
          bg="gray.400"
          color="white"
         
          onClick={Handlereset}
          as={Link}
          to="/Products"
        >
          Log out
        </Button>
      </Box>
    </Box>
  );
}
export default Profile;
