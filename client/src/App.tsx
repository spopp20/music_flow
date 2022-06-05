import * as React from 'react';
import { ChakraProvider, createLocalStorageManager, theme } from '@chakra-ui/react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layout';
import { HomePage } from './pages';
import { AboutPage } from './pages';
import { MusicPage } from './pages';
import { SelectionPage } from './pages';
import { LoginPage } from './pages';
import { SignupPage } from './pages';
import { ForgotPasswordPage } from './pages';
import { ResetPasswordPage } from './pages';
import { UserProfilePage } from './pages';
import { ProtectedRoute } from './routes';

const manager = createLocalStorageManager('storage-manager');

export const App = () => (
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
);
