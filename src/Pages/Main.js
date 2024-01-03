import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Social from "../Component/Social";

const Main = (loading) => {
  const navigate = useNavigate();

  const clickpersonal = () => {
    navigate("/personal");
  };
  const clickprofessional = () => {
    navigate("/professional");
  };
  console.log(loading);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100vh"}
          fontFamily={"poppins"}
          gap={20}
          mt={{ base: -10 }}
        >
          <Grid px={16} gap={5} mt={"100px"}>
            <Box>
              <Text
                color="whitesmoke"
                fontSize={{ base: 32, lg: 48, xl: 52 }}
                fontWeight={"800"}
                textAlign={"center"}
                fontFamily={"poppins"}
              >
                anishbhaktajoshi.
              </Text>
            </Box>
            <Box maxW={"700px"}>
              <Text
                color="gray.500"
                textAlign={"center"}
                fontSize={{ base: 12, lg: 14, xl: 16 }}
                fontWeight={500}
              >
                <Highlight
                  query={["Frontend Developer", "Motion Designer"]}
                  styles={{ textColor: "whatsapp.200" }}
                >
                  Hi, I am full-time Frontend Developer and part-time Motion
                  Designer. Blending creativity and technology, I craft
                  interactive user experiences through clean code and
                  captivating visuals.
                </Highlight>
              </Text>
            </Box>
          </Grid>
          <Grid gap={8}>
            <Heading
              fontSize={{ base: "14px", lg: "18px", xl: "24px" }}
              textAlign={"center"}
              textColor="gray.600"
              fontWeight={500}
            >
              Know More About Me
            </Heading>
            <Grid
              templateColumns="repeat(4, 1fr)"
              gap={{ base: "16px", lg: "20", xl: "70px" }}
              mb={6}
              fontSize={{ base: "12px", lg: "16px" }}
            >
              <GridItem colSpan={{ base: 4, lg: 2, xl: 2 }}>
                <Button
                  fontWeight={"medium"}
                  bg={"transparent"}
                  border={{
                    base: "1px solid #555",
                    lg: "2px solid #555",
                    xl: '"3px solid #555"',
                  }}
                  borderRadius={15}
                  width={{ base: "200px", lg: "120px", xl: "150px" }}
                  textAlign={"center"}
                  p={"20px"}
                  color="#555"
                  _hover={{ bg: "#555", textColor: "rgb(0,0,5)" }}
                  onClick={clickpersonal}
                >
                  Personal
                </Button>
              </GridItem>
              <GridItem colSpan={{ base: 4, lg: 2, xl: 2 }}>
                <Button
                  fontWeight={"medium"}
                  bg={"transparent"}
                  border={{
                    base: "1px solid #555",
                    lg: "2px solid #555",
                    xl: '"3px solid #555"',
                  }}
                  borderRadius={15}
                  width={{ base: "200px", lg: "120px", xl: "150px" }}
                  textAlign={"center"}
                  p={"20px"}
                  color="#555"
                  _hover={{ bg: "#555", textColor: "rgb(0,0,5)" }}
                  onClick={clickprofessional}
                >
                  Professional
                </Button>
              </GridItem>
            </Grid>
          </Grid>
          <Social />
        </Flex>
      </motion.div>
    </>
  );
};

export default Main;
