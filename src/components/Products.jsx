import React from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";
import { Flex, Grid } from "@chakra-ui/react";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  return (
    
    <Flex direction="column" align="center" >
      <AddProduct />
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Product />
      </Grid>
      <Pagination />
    </Flex>
  );
};

export default Products;
