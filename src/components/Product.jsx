import React, { useEffect, useState } from "react";
import {
  VStack,
  Image,
  Box,
  Text,
  Heading,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import axios from "axios";

const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:8080/products");
      
      setData(res.data);
      console.log(res.data)
    };
    getData()
  }, []);
  return (
    <>
      {data.map((data) => (
        <VStack data-cy="product" key={data.id}>
          <Image data-cy="product-image" src={data.imageSrc}/>
          <Text data-cy="product-category">{data.category}</Text>
          <Tag>
            <TagLabel data-cy="product-gender">{data.gender}</TagLabel>
          </Tag>
          <Heading data-cy="product-title">{data.title}</Heading>
          <Box data-cy="product-price">{data.price}</Box>
        </VStack>
      ))}
    </>
  );
};

export default Product;
