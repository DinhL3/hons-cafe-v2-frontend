import { Outlet } from 'react-router';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

function Layout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
