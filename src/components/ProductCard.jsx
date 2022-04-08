import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, SimpleGrid, Image, Stack, Text } from "@chakra-ui/react";


function ProductCard({ product, onClick }) {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      marginleft={"20vh"}
      spacing="24px"
      border={"1px"}
      borderColor={"gray.100"}
    >
      <Box alignItems={"center"}>
        <Image
          alt={product.title}
          src={product.image}
          margin={"30px"}
          
         
          width="200px"
          
          marginleft={"50%"}
          alignItems={"center"}
        />
    <Text align={"center"}>{product.category}</Text>
        <Text align={"left"} size={"2rem"}>
          {product.title}
        </Text>
        <Text align="left">{product.price}$</Text>

        <Stack alignItems={"left"} marginLeft={10}>
          <Button
            size="sm"
            width="6rem"
            onClick={onClick}
            bg="gray.300"
            color="black.400"
          >
            Add to Cart
          </Button>
          <Button
            size="sm"
            width="6rem"
            onClick={onClick}
            as={Link}
            to={`/products/${product.id}`}
            bg="gray.300"
            color="gray.400"
          >
            product page
          </Button>
        
        </Stack>
      </Box>
    </Stack>
  );
}

export default ProductCard;
