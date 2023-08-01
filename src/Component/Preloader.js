import { Box, Flex, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <>
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        fontFamily={"poppins"}
        color={"white"}
        height={"100vh"}
        fontSize={18}
        gap={5}
      >
        <div class="progress"></div>
        {/* <Text>Loading...</Text> */}
      </Flex>
    </>
  );
};

export default Preloader;
