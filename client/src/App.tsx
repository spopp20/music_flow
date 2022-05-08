import {
  ChakraProvider,
  theme
 } from "@chakra-ui/react"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout"
import { HomePage } from "./pages"
import { AboutPage } from "./pages"
import { MusicPage } from "./pages";
import { SelectionPage } from "./pages";
import { LoginPage } from "./pages"
import { SignupPage } from "./pages"
import { ForgotPasswordPage } from "./pages";
import { ResetPasswordPage } from "./pages";
import { UserProfilePage } from "./pages"


export const App = () => (  
  <ChakraProvider theme={theme}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/music" element={<MusicPage/>} / >
              <Route path="/selection" element={<SelectionPage />} />
              <Route path="/userprofile" element={<UserProfilePage />} />
            </Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/forgot" element={<ForgotPasswordPage />} />
              <Route path="/reset" element={<ResetPasswordPage />} />
          </Routes>
      </BrowserRouter>

  </ChakraProvider>
)
