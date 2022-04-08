import React from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box>
      <Stack as="nav" direction="column" align="center">
        <Text
          as={Link}
          to="/"
          alt="logo"
          color="#000000"
          textAlign={"center"}
          fontSize="3rem"
          marginRight="4"
        >
          <Image
            boxSize="100px"
            objectFit="cover"
            src="https://www.shareicon.net/data/128x128/2016/02/15/719466_animal_512x512.png"
            alt="Crow"
          />
        </Text>

        <Link to="/">Home</Link>

        <Link to="/products">Products</Link>

        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

        <Link to="/profile">Profile</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/cart">Cart</Link>
      </Stack>
    </Box>
  );
}

export default Navbar;
