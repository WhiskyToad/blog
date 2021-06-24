import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    grey: "#E6ECF8",
    blue: "#1397c1",
    pink: "#fff0f5",
    selected: "#ebf6f7",
  },
  styles: {
    global: {
      body: {
        fontFamily: "Roboto",
        lineHeight: "1.64",
        bg: "black",
        color: "white",
        fontSize: { base: "14px", md: "16px" },
      },
      h1: {
        fontFamily: "Pacifico",
        fontSize: "120px",
        textShadow: "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",
      },
      h3: {
        fontFamily: "Roboto Mono",
        fontSize: "30px",
      },
      a: {
        _hover: {
          textColor: "white",
        },
      },
    },
  },
  textStyles: {
    excerpt: {
      fontSize: "20px",
    },
    descriptiveSmall: {
      fontSize: ["10px", "10px", "13px", "13px"],
      color: "gray",
    },
    heading: {
      fontFamily: ["BebasNeue"],
      fontSize: ["20px", "20px", "25px", "25px"],
      color: "orange",
      fontWeight: "bold",
    },
    headingSmall: {
      fontFamily: ["BebasNeue"],
      fontSize: ["16px", "16px", "20px", "20px"],
    },
  },
});

export default theme;
