import React from "react";
import useCart from "../Cartago/useCart";
import { Heading, Stack, Flex, Text, Box, SimpleGrid } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import productsState from "../stores/products/atom";
import ProductCard from "../components/ProductCard";

function Products() {
  const products = useRecoilValue(productsState);
  const cart = useCart();

  return (
    <Box
      maxW="6x1"
      mx="auto"
  
    >
      <Flex alignItems={"center"}>
        <Stack >
          <Text fontSize={"2rem"} align={"center"}>Products</Text>
          <Heading paddingBottom="10" paddingTop="10" textAlign="center">
           
          </Heading>
          <SimpleGrid columns={3} alignitems={"center"}gridColumn="2">
            {products.map((product) => {
             
              return (
                
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => cart.addItem(product.id)}
                />
              );
            })}
          </SimpleGrid>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Products;
