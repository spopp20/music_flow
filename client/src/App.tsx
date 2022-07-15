import * as React from 'react';
import { ChakraProvider, createLocalStorageManager, theme } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MusicPage from './pages/MusicPage';
import SelectionPage from './pages/SelectionPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import UserProfilePage from './pages/UserProfilePage';
import ProtectedRoute from './routes/ProtectedRoute';

const manager = createLocalStorageManager('storage-manager');

const App = () => {
  return (
  <React.StrictMode>
    <ChakraProvider theme={theme} colorModeManager={manager}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot" element={<ForgotPasswordPage />} />
          <Route path="/reset" element={<ResetPasswordPage />} />
          <Route element={<DefaultLayout />}>
            <Route
              path="/"
              element={<ProtectedRoute isAuthenticated={true} authenticationPath="/login" outlet={<HomePage />} />}
            />
            <Route
              path="/"
              element={<ProtectedRoute isAuthenticated={true} authenticationPath="/login" outlet={<HomePage />} />}
            />
            <Route
              path="/about"
              element={<ProtectedRoute isAuthenticated={true} authenticationPath="/login" outlet={<AboutPage />} />}
            />
            <Route
              path="/music"
              element={<ProtectedRoute isAuthenticated={true} authenticationPath="/login" outlet={<MusicPage />} />}
            />
            <Route
              path="/selection"
              element={<ProtectedRoute isAuthenticated={true} authenticationPath="/login" outlet={<SelectionPage />} />}
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={true} authenticationPath="/login" outlet={<UserProfilePage />} />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)};

export default App;
