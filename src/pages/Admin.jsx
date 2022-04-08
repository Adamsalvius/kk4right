import React from "react";
import { authState } from "../stores/auths/atom";
import productState from "../stores/products/atom";
import { userState } from "../stores/users/atom";
import { Box, Image, Text, Grid, Button, Heading } from "@chakra-ui/react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { Link } from "react-router-dom";

function Admin() {

  const products = useRecoilValue(productState);
  const users = useRecoilValue(userState);

  const { user } = useRecoilValue(authState);
  const reset = useResetRecoilState(authState);

  if (!user) {
    return (
      <Box>
        
        <Button
          size="md"
          marginLeft="50%"
          marginTop="25px"
          bg="blue.400"
          color="white"
          _hover={{ bg: "blue.500" }}
          as={Link}
          to="/login"
        >
          Login
        </Button>
      </Box>
    );
  }

  return (
    <Box >
      <Heading align="center"> Admin log </Heading>
     
      {products.map((product) => {
        return (
          <Grid margin={4} >
            <Box border="1px" borderColor="gray.300" align={"center"} key={product.id} to={`/product/${product.id}`}>
              <Image width="5rem" src={product.image} />
              <Text fontWeight="semibold">{product.title}</Text>
              <Text fontWeight="semibold">{product.category}</Text>
              <Text fontWeight="semibold">rating {product.rating.rate}</Text>
              <Text fontWeight="semibold">$ {product.price}</Text>
            </Box>
          </Grid>
        );
      })}

      {users.map((user) => {
        return (
          <Box key={user.id}>
            <Grid margin={4}border='1px' borderColor='gray.200' >
              <Box key={users} align={"center"}>
                <Text key={user.email}>{user.email}</Text>
                <Text key={user.username, user.id}>{user.username}</Text>
                <Text key={user.password}>{user.password}</Text>
                <Text key={user.name.firstname}>{user.name.firstname}</Text>
                <Text key={user.name.lastname}>{user.name.lastname}</Text>
                <Text key={user.address.city}>{user.address.city}</Text>
                <Text key={user.address.street}>{user.address.street}</Text>
                <Text key={user.address.zipcode}>{user.address.zipcode}</Text>
                <Text key={user.address.number}>{user.address.number}</Text>
                <Text key={user.phone}>{user.phone}</Text>
              </Box>
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
}

export default Admin;
