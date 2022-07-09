import MainNavbar from './MainNavbar';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <>
      <div className="main-layout">
        <Sidebar />

        <div className="page-container">
          <MainNavbar />
          {children}
        </div>
      </div>
    </>
  );
}
