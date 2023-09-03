"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
  Link,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import LogoLight from "./LogoLight";
import LogoDark from "./LogoDark";
import GetStarted from "./GetStarted";

interface Props {
  children: React.ReactNode;
}

const Links = ["Home", "About", "Contact"];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      w={"100%"}
      maxW={"7xl"}
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
    >
      <Box>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>{colorMode === "dark" ? <LogoLight /> : <LogoDark />}</Box>
          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
            fontSize={"sm"}
          >
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <Flex alignItems={"center"} justifyContent={"center"} gap={"4"}>
            <Box>
              <IconButton
                onClick={toggleColorMode}
                fontSize="sm"
                aria-label="Toggle Dark Mode"
              >
                {colorMode === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
              </IconButton>
            </Box>
            <Flex alignItems={"center"}>
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
            </Flex>
            <Box display={{ base: "none", md: "block" }}>
              <GetStarted />
            </Box>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} textAlign={"center"}>
            <Stack as={"nav"} spacing={4} w={"50%"} mx={"auto"}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <Box>
                <GetStarted />
              </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Container>
  );
}
