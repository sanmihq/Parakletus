import { Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function LogoLight() {
  return (
    <Link href="./">
      <Image src="/images/logo-white.png" />
    </Link>
  );
}
