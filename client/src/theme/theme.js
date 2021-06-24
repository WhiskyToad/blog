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
        fontSize: "100px",
        color: "white",
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
        float: "left",
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
      fontSize: "30px",
      fontFamily: "Pacifico",
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
