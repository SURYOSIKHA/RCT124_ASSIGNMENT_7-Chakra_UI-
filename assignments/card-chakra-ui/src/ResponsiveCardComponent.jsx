import { Box, Image, Text, Heading, VStack, Container } from '@chakra-ui/react';

const ResponsiveCardComponent = () => {
  return (
    <Container
      maxW={{ base: '100%', md: '50%', lg: '25%' }}
      shadow='lg'
      borderRadius='lg'
      p={4}
    >
      <VStack spacing={4}>
        <Heading size='md'>Title</Heading>
        <Image src='https://c4.wallpaperflare.com/wallpaper/1017/333/245/anime-attack-on-titan-attack-on-titan-blood-wallpaper-preview.jpg' alt='image-alt' boxSize='150px' />
        <Text>Description text goes here.</Text>
      </VStack>
    </Container>
  );
};

export default ResponsiveCardComponent;
