import { Box, Image, Text, Heading, VStack, Container } from '@chakra-ui/react';

const BasicCardComponent = () => {
  return (
    <Container maxW='sm' shadow='lg' borderRadius='lg' p={4}>
      <VStack spacing={4}>
        <Heading size='md'>Title</Heading>
        <Image src='https://w0.peakpx.com/wallpaper/917/626/HD-wallpaper-attack-on-titan-poster-digital-2022.jpg' alt='image-alt' boxSize='150px' />
        <Text>Description text goes here.</Text>
      </VStack>
    </Container>
  );
};

export default BasicCardComponent;
