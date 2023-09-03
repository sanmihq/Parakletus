"use client";
import { Button, Link } from "@chakra-ui/react";

export default function GetStarted() {
  return (
    <Link href="https://wa.me/message/76LLMSAFP7JIE1" target="blank">
      <Button rounded={"lg"} bg={"whiteAlpha.400"} fontWeight={400} p={"6"}>
        Get Started Now
      </Button>
    </Link>
  );
}
