import { Outlet } from 'react-router';
import Navigation from './components/Navigation/Navigation';

function Layout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
