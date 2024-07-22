import Columns from "./Columns";
import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";

const App = () => {
  return (
    <Box bg="black" minHeight="100vh">
      <Box textAlign="center" paddingTop="20px">
        <Heading
          as="h1"
          size="lg"
          mb="15px"
          textTransform="uppercase"
          noOfLines={1}
          color="white"
        >
          Zustand Trello App
        </Heading>
      </Box>
      <Container maxW="7xl" padding="20px">
        <SimpleGrid minChildWidth="200px" spacing="20px">
          <Box w="100%">
            <Columns state="planned" />
          </Box>
          <Box w="100%">
            <Columns state="ongoing" />
          </Box>
          <Box w="100%">
            <Columns state="done" />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default App;
