import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Switch>
            <ChakraProvider>
              <Route exact path="/" component={() => <Redirect to="/blog" />} />
              <Route exact path="/blog" component={BlogList} />
              <Route exact path="/blog/:id" component={BlogDetail} />
            </ChakraProvider>
          </Switch>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
