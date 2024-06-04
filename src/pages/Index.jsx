import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
          <Link href="#" color="white">Tech</Link>
          <Link href="#" color="white">Life & Arts</Link>
        </HStack>
      </Flex>

      {/* Main Headline Section */}
      <Box bg="gray.100" p={8} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Main Headline: Financial Times Inspired Landing Page</Heading>
        <Text fontSize="lg">Stay updated with the latest news and insights from around the world.</Text>
      </Box>

      {/* Featured Articles Section */}
      <VStack spacing={8} p={8} alignItems="flex-start">
        <Heading as="h3" size="lg">Featured Articles</Heading>
        <HStack spacing={8} wrap="wrap">
          <Box bg="white" p={4} shadow="md" borderWidth="1px" flex="1" minW="300px">
            <Image src="https://via.placeholder.com/300" alt="Article 1" mb={4} />
            <Heading as="h4" size="md" mb={2}>Article 1</Heading>
            <Text>Summary of the first featured article. This is a brief description to entice readers to click and read more.</Text>
          </Box>
          <Box bg="white" p={4} shadow="md" borderWidth="1px" flex="1" minW="300px">
            <Image src="https://via.placeholder.com/300" alt="Article 2" mb={4} />
            <Heading as="h4" size="md" mb={2}>Article 2</Heading>
            <Text>Summary of the second featured article. This is a brief description to entice readers to click and read more.</Text>
          </Box>
          <Box bg="white" p={4} shadow="md" borderWidth="1px" flex="1" minW="300px">
            <Image src="https://via.placeholder.com/300" alt="Article 3" mb={4} />
            <Heading as="h4" size="md" mb={2}>Article 3</Heading>
            <Text>Summary of the third featured article. This is a brief description to entice readers to click and read more.</Text>
          </Box>
        </HStack>
      </VStack>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={4}>
            <Link href="#" color="white">About</Link>
            <Link href="#" color="white">Contact</Link>
            <Link href="#" color="white">Privacy Policy</Link>
            <Link href="#" color="white">Terms of Service</Link>
          </HStack>
          <HStack spacing={4}>
            <Link href="#" color="white"><FaTwitter /></Link>
            <Link href="#" color="white"><FaFacebook /></Link>
            <Link href="#" color="white"><FaLinkedin /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;