import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaBehance,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <>
      <Center>
        <Box
          position={{ xl: "fixed", lg: "fixed" }}
          bottom={5}
          display={{ base: "block", lg: "block" }}
        >
          <Flex justifyContent={"center"} alignItems={"baseline"} gap={4} m={4}>
            <Link to="https://www.facebook.com/unofficial.abj" target="_blank">
              <FaFacebook fontSize={22} className="hoverable-icon" />
            </Link>

            <Link to="https://www.instagram.com/unofficial.abj" target="_blank">
              <FaInstagram className="hoverable-icon" fontSize={22} />
            </Link>

            <Link
              to="https://www.linkedin.com/in/unofficialabj"
              target="_blank"
            >
              <FaLinkedin className="hoverable-icon" fontSize={22} />
            </Link>
            <Link to="https://www.facebook.com/unofficial.abj" target="_blank">
              <FaGithub className="hoverable-icon" fontSize={22} />
            </Link>
            <Link to="https://www.behance.net/unofficial_abj" target="_blank">
              <FaBehance className="hoverable-icon" fontSize={22} />
            </Link>
          </Flex>

          <Text color={"gray.300"} align={"center"} fontSize={16}>
            Copyright@{new Date().getFullYear()} | Anish Bhakta Joshi
          </Text>
        </Box>
      </Center>
    </>
  );
};

export default Social;
