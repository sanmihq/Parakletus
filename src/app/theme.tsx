"use client";

import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Poppins', sans-serif`,
};

const theme = extendTheme({
  config,
  fonts,
});

export default theme;
