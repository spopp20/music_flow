import { Outlet } from 'react-router-dom';
import { Navbar } from '../layout';

export const DefaultLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};
