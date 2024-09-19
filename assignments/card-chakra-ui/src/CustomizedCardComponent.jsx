import { Box, Image, Text, Heading, VStack, Container } from '@chakra-ui/react';

const CustomizedCardComponent = () => {
  return (
    <Container
      maxW='md'
      shadow='lg'
      borderRadius='lg'
      p={4}
      bg='brand.100'
      color='brand.500'
      fontSize='lg'
    >
      <VStack spacing={4}>
        <Heading size='lg'>Title</Heading>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQ1fs7FNlS-ODVH8tYg1J3hOwVtjynLOWcw&s' alt='image-alt' boxSize='200px' />
        <Text fontSize='md'>Description text goes here.</Text>
      </VStack>
    </Container>
  );
};

export default CustomizedCardComponent;
