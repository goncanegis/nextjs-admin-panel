import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavbarInnerPage = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={`innerNavbar d-flex m-3 mb-0 p-3 align-items-center`}>
      <Link href="/ai-writer/posts">
        <a
          className={
            currentRoute.includes('/ai-writer/posts')
              ? 'innerNavLink d-flex align-items-center active'
              : 'innerNavLink d-flex align-items-center'
          }
        >
          <img src="/images/aiTextIcon.svg" alt="ai text writer" />
          <p>AI Metin Yazarı</p>
        </a>
      </Link>

      <Link href="/ai-writer/history">
        <a
          className={
            currentRoute === '/ai-writer/history'
              ? 'innerNavLink d-flex align-items-center active'
              : 'innerNavLink d-flex align-items-center'
          }
        >
          <img src="/images/historyIcon.svg" alt="history" />
          <p>Geçmiş</p>
        </a>
      </Link>
    </div>
  );
};

export default NavbarInnerPage;
