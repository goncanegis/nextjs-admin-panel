import NavbarInnerPage from './NavbarInnerPage';

export default function NestedLayout({ children }) {
  return (
    <>
      <div className="nested-layout">
        <NavbarInnerPage />

        <div className="page-container">{children}</div>
      </div>
    </>
  );
}
