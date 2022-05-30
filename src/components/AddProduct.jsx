import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  Input,
  Select,
  RadioGroup,
  Radio,
  useDisclosure,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  FormLabel,
} from "@chakra-ui/react";

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, setForm] = useState({
    title: "",
    category: "",
    gender: "",
    imageSrc: "https://picsum.photos/seed/picsum3/420/260",
    price: "",
  });

  const onChange = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  useEffect(() => {
    console.log(form)
  }, [form]);
  
  return (
    <>
      <Button
        my={4}
        data-cy="add-product-button"
        size="lg"
        variant="outline"
        onClick={onOpen}
      >
        Add New Product
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <FormLabel>Title</FormLabel>
              <Input
                data-cy="add-product-title"
                placeholder="Title"
                name="title"
                value={form.title}
                onChange={onChange}
              />
              <FormLabel>Category</FormLabel>
              <Select data-cy="add-product-category" placeholder="Category">
                <option data-cy="add-product-category-shirt">Shirt</option>
                <option data-cy="add-product-category-pant">Pant</option>
                <option data-cy="add-product-category-jeans">jeans</option>
              </Select>
              <FormLabel>Gender</FormLabel>
              <RadioGroup data-cy="add-product-gender">
                <Radio
                  data-cy="add-product-gender-male"
                  value="male"
                  name="gender"
                >
                  Male
                </Radio>
                <Radio
                  data-cy="add-product-gender-female"
                  value="female"
                  name="gender"
                >
                  Female
                </Radio>
                <Radio
                  data-cy="add-product-gender-unisex"
                  value="unisex"
                  name="gender"
                >
                  Unisex
                </Radio>
              </RadioGroup>
              <FormLabel>Price</FormLabel>
              <Input
                data-cy="add-product-price"
                placeholder="Price"
                name="price"
                value={form.price}
                onChange={onChange}
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              data-cy="add-product-submit-button"
              colorScheme="teal"
              mr={3}
              onClick={onClose}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
