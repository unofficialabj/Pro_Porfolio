import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
    <>
      <Box
        position={{ xl: "fixed" }}
        bottom={5}
        display={{ base: "none", lg: "block" }}
      >
        <Flex justifyContent={"center"} alignItems={"baseline"} gap={4} m={4}>
          <a href="https://www.facebook.com/unofficial.abj">
            <FaFacebook fontSize={22} className="hoverable-icon" />
          </a>
          <a href="https://www.facebook.com/unofficial.abj">
            <FaInstagram className="hoverable-icon" fontSize={22} />
          </a>

          <a href="https://www.facebook.com/unofficial.abj">
            <FaLinkedin className="hoverable-icon" fontSize={22} />
          </a>
          <a href="https://www.facebook.com/unofficial.abj">
            <FaGithub className="hoverable-icon" fontSize={22} />
          </a>
        </Flex>

        <Text
          color={"gray.300"}
          align={"center"}
          fontSize={14}
          fontWeight={"thin"}
        >
          Copyright@2023 | Anish Bhakta Joshi
        </Text>
      </Box>
    </>
  );
};

export default Social;
