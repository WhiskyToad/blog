import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

import AllBlogs from "./pages/AllBlogs";
import View from "./pages/View";
import Category from "./pages/Category";
import Footer from "./components/Footer";

import { Box } from "@chakra-ui/react";

import theme from "./theme/theme";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Box minH="calc(100vh - 80px)">
                <Route
                  exact
                  path="/"
                  component={() => <Redirect to="/blog" />}
                />
                <Route exact path="/blog" component={AllBlogs} />
                <Route exact path="/blog/:id" component={View} />
                <Route exact path="/blog/category/:id" component={Category} />
              </Box>
            </Switch>
          </BrowserRouter>
          <Footer />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
