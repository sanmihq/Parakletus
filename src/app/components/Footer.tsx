"use client";

import { Link, Box, Container, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Logo from "./LogoLight";

export default function Footer() {
  return (
    <Container maxW={"7xl"} my={20}>
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={4}
        alignItems={"center"}
        justifyContent={"center"}
        position={"relative"}
      >
        <Box position={{ md: "absolute" }} left={"0"}>
          <Logo />
        </Box>
        <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
          <Link href="https://wa.me/message/76LLMSAFP7JIE1" isExternal>
            <IconButton aria-label="whatsapp" icon={<FaWhatsapp />} />
          </Link>
          <Link href="https://parakletuspublishing@gmail.com" isExternal>
            <IconButton aria-label="email" icon={<MdAlternateEmail />} />
          </Link>
          <Link href="https://www.facebook.com/dparakletus" isExternal>
            <IconButton aria-label="facebook" icon={<FaFacebook />} />
          </Link>
          <Link href="https://twitter.com/parakletus_ng" isExternal>
            <IconButton aria-label="twitter" icon={<FaTwitter />} />
          </Link>
          <Link href="https://www.github.com/" isExternal>
            <IconButton aria-label="github" icon={<FaGithub />} />
          </Link>
          <Link
            href="https://instagram.com/parakletus.pub?igshid=MzRIODBiNWFIZA=="
            isExternal
          >
            <IconButton aria-label="instagram" icon={<FaInstagram />} />
          </Link>
          <Link href="https://t.me/@parakletus_ng" isExternal>
            <IconButton aria-label="telegram" icon={<FaTelegram />} />
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
}
