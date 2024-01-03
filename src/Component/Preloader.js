import { Flex } from "@chakra-ui/react";
import React from "react";

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
      </Flex>
    </>
  );
};

export default Preloader;
