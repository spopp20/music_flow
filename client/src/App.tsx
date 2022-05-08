import {
  ChakraProvider,
  theme
 } from "@chakra-ui/react"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout"
import { HomePage } from "./pages"
import { AboutPage } from "./pages"
import { LoginPage } from "./pages"

export const App = () => (
  <ChakraProvider theme={theme}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Route>
              <Route path="/login" element={<LoginPage />} />
          </Routes>
      </BrowserRouter>

  </ChakraProvider>
)
