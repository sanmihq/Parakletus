import { Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function LogoDark() {
  return (
    <Link href="./">
      <Image src="/images/logo-black.png" />
    </Link>
  );
}
