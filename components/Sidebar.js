import Link from 'next/link';

import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

const sidebarData = [
  {
    title: 'Yeni Proje',
    href: '/new-project',
    icon: 'addIcon',
  },
  {
    title: 'Keşfet',
    href: '/discover',
    icon: 'discoverIcon',
  },
  {
    title: 'AI Metin Yazarı',
    href: '/ai-writer',
    icon: 'aiTextIcon',
  },
  {
    title: 'AI Görsel Oluşturucu',
    href: '/ai-image-creator',
    icon: 'imageIcon',
  },
  {
    title: 'Trendler',
    href: '/trends',
    icon: 'trendsIcon',
  },
  {
    title: 'Renk Analizi',
    href: '/color-analysis',
    icon: 'colorIcon',
  },
  {
    title: 'Projelerim',
    href: '/my-projects',
    icon: 'projectsIcon',
  },
  {
    title: 'Favorilerim',
    href: '/my-favorites',
    icon: 'heartIcon',
  },
  {
    title: 'Paketler',
    href: '/pricing',
    icon: 'packagesIcon',
  },
  {
    title: 'Ayarlar',
    href: '/settings',
    icon: 'settingsIcon',
  },
];

export default function Sidebar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav
      className="navbar d-flex flex-column flex-shrink-0 ps-4 pe-3 sidebar"
      style={{ width: '253px' }}
    >
      <div className="logo-container mb-3">
        <Link href="/">
          <a>
            <img
              src={'/images/logo.svg'}
              width="135.4px"
              height="56px"
              alt="logo"
            />
          </a>
        </Link>
      </div>

      <div className="nav nav-pills flex-column mb-4 w-100">
        {sidebarData.map(({ title, href, icon }) => (
          <div className="nav-item" key={uuidv4()}>
            <Link href={href}>
              <a
                className={
                  currentRoute.includes(href) ? 'nav-link active' : 'nav-link'
                }
              >
                <img src={`/images/icon/${icon}.svg`} alt={title} />
                {title}
              </a>
            </Link>
          </div>
        ))}
      </div>

      <div className="nav nav-pills flex-column mb-4 w-100">
        <div className="nav-item">
          <Link href={'/logout'}>
            <a
              className={
                currentRoute === '/logout' ? 'nav-link active' : 'nav-link'
              }
            >
              <img src={'/images/icon/logoutIcon.svg'} alt={'logout'} />
              {'Çıkış Yap'}
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
