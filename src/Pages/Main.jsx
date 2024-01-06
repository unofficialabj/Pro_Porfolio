import { Box, Highlight, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Social from "../Component/Social";
import { keyframes } from "@emotion/react";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
const Main = () => {
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const newColor1 = generateRandomColor();
  const newColor2 = generateRandomColor();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <VStack height={"100vh"} mt={{ base: -10 }} justifyContent={"center"}>
          <Box>
            <Text
              bgGradient={`linear(to-l, ${newColor1}, ${newColor2})`}
              bgClip="text"
              fontSize={{ base: 40, lg: 84, xl: 120 }}
              fontWeight={"800"}
              textAlign={"center"}
              fontFamily={"poppins"}
              css={{
                animation: `${gradientAnimation} 1s ease infinite`,
                // Adjust any other styles here as needed
              }}
            >
              anishbhaktajoshi.
            </Text>
          </Box>
          <Box maxW={"720px"}>
            <Text
              color="gray.500"
              textAlign={"center"}
              p={{ base: 1 }}
              px={{ base: 6, lg: 0 }}
              fontSize={{ base: 12, lg: 14, xl: 20 }}
              fontFamily={"poppins"}
              fontWeight={400}
            >
              <Highlight
                query={["Frontend Developer", "Motion Designer"]}
                styles={{
                  bgGradient: `linear(to-l, ${newColor2}, ${newColor1})`,
                  bgClip: "text",
                  fontWeight: 600,
                }}
              >
                Hi, I am full-time Frontend Developer and part-time Motion
                Designer. Blending creativity and technology, I craft
                interactive user experiences through clean code and captivating
                visuals.
              </Highlight>
            </Text>
          </Box>
        </VStack>
      </motion.div>
      <Social />
    </>
  );
};

export default Main;
