import {
  Box,
  Flex,
  Grid,
  GridItem,
  Highlight,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { motion } from "framer-motion";
import {
  AiIcon,
  FigmaIcon,
  GitIcon,
  JSIcon,
  JiraIcon,
  PsIcon,
  ReactIcon,
  TSIcon,
} from "../Assets/svg";

const Home = () => {
  return (
    <>
      <Flex
        direction={{ base: "column", lg: "row" }}
        width={"100%"}
        color={"white"}
        gap={"28px"}
        pt={"60px"}
        px={{ base: 0, lg: 250 }}
      >
        <Stack
          flex={1}
          width={{ base: "100%", lg: "auto" }}
          height={"500px"}
          gap={5}
          alignItems={{ base: "center", lg: "flex-start" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              w={"150px"}
              borderRadius={"50%"}
              h={"150px"}
              bgGradient=" radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%)"
              position="relative"
              overflow="hidden"
            >
              <Image
                src="hero-image.png"
                alt="Hero Image"
                w={"100%"}
                h={"100%"}
                objectFit="cover"
                position="absolute"
                top="0"
                left="0"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Stack gap={0} alignItems={{ base: "center", lg: "flex-start" }}>
              <Text color={"whiteAlpha.600"} fontWeight={300}>
                Designer & Developer
              </Text>
              <Text fontSize={"32px"} fontWeight={600} color={"whiteAlpha.800"}>
                Anish Bhakta Joshi
              </Text>
              <Text
                color={"whiteAlpha.600"}
                fontWeight={300}
                width={"320px"}
                align={{ base: "center", lg: "left" }}
                mt={-0.5}
              >
                Blending creativity and technology for sleek UI/UX experiences.
              </Text>
            </Stack>
          </motion.div>
        </Stack>
        <Box
          flex={2.5}
          height={{ base: "500px", lg: "auto" }}
          width={{ base: "100%", lg: "auto" }}
        >
          <Grid
            templateColumns={"repeat(5,1fr)"}
            gap={8}
            px={{ base: 10, lg: 0 }}
          >
            <GridItem
              className="grid-item"
              border="1px solid"
              borderColor={"whiteAlpha.400"}
              borderRadius={16}
              colSpan={3}
              h={"100%"}
            >
              <Text color={"whiteAlpha.800"} fontSize={20} fontWeight={600}>
                About Me
              </Text>
              <Text
                color={"whiteAlpha.500"}
                fontSize={20}
                fontWeight={300}
                mt={2}
              >
                <Highlight
                  query={["Frontend Developer", "Motion Designer"]}
                  styles={{
                    fontWeight: 600,
                  }}
                >
                  I consider myself a hardworking and enthusiastic team player
                  who can be depended upon to get the job done. I am confident
                  to handle pressures at busy times and great at handling stress
                  at busy hours.
                </Highlight>
              </Text>
            </GridItem>
            <GridItem
              className="grid-item"
              colSpan={2}
              rowSpan={2}
              h={"100%"}
              border="1px solid"
              borderColor={"whiteAlpha.400"}
              borderRadius={16}
            >
              <Text color={"whiteAlpha.800"} fontSize={20} fontWeight={600}>
                Skills
              </Text>
              <SimpleGrid minChildWidth={"70px"} gap={"30px"} mt={5} px={5}>
                <ReactIcon />
                <TSIcon />
                <JSIcon />
                <PsIcon />
                <JiraIcon />
                <AiIcon />
                <GitIcon />
                <FigmaIcon />
              </SimpleGrid>
            </GridItem>
            <GridItem className="grid-item" bg={"white"}></GridItem>
            <GridItem className="grid-item" bg={"white"}></GridItem>
            <GridItem className="grid-item" bg={"white"}></GridItem>
            <GridItem className="grid-item" bg={"white"}></GridItem>
            <GridItem className="grid-item" bg={"white"}></GridItem>
          </Grid>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
