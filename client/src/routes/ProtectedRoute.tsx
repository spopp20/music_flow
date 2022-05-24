import { Navigate } from 'react-router';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

export const ProtectedRoute = ({ isAuthenticated, authenticationPath, outlet }: ProtectedRouteProps): JSX.Element => {
  if (isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
};
