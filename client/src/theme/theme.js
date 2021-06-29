import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    grey: "#232023",
    blue: "#1397c1",
    pink: "#fff0f5",
    selected: "#ebf6f7",
  },
  styles: {
    global: {
      body: {
        fontFamily: "Roboto",
        lineHeight: "1.64",
        bg: "#f0f0f0",

        fontSize: { base: "14px", md: "16px" },
      },
      h1: {
        fontFamily: "Pacifico",
        fontSize: { base: "60px", md: "100px" },
        color: "white",
      },
      h2: {
        fontFamily: "Aldrich",
        fontSize: "40px",
      },
      h3: {
        fontFamily: "Aldrich",
        fontSize: "30px",
        color: "white",
      },
      a: {
        _hover: {
          textColor: "white",
        },
      },
      li: {
        listStyle: "none",
        float: { base: "null", md: "left" },
        p: "10px",
        fontFamily: "Aldrich",
        cursor: "pointer",
        _hover: {
          bg: "#f0f0f0",
        },
      },
    },
  },
  textStyles: {
    excerpt: {
      fontSize: "20px",
    },
    navbarTitle: {
      fontSize: "25px",
      fontFamily: "Pacifico",
      color: "white",
      textShadow: "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",
    },
    heading: {
      fontFamily: "Raleway",
      fontSize: "40px",
    },
  },
});

export default theme;
