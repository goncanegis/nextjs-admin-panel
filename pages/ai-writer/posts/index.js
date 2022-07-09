import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import NestedLayout from '../../../components/NestedLayout';
import styles from '../../../styles/ai-writer.module.css';
import { v4 as uuidv4 } from 'uuid';
import CartIcon from '../../../public/images/CartIcon';

const filtersData = [
  {
    title: 'E-Ticaret',
    url: '#',
    color: '#66D158',
  },
  {
    title: 'Ürün & Marka',
    url: '#',
    color: '#FF9F0A',
  },
  {
    title: 'Sosyal Medya',
    url: '#',
    color: '#0A84FF',
  },
  {
    title: 'Reklamlar',
    url: '#',
    color: '#FF375F',
  },
  {
    title: 'Blog Yazımı',
    url: '#',
    color: '#AC8E68',
  },
  {
    title: 'Satış & Pazarlama',
    url: '#',
    color: '#FFD60A',
  },
  {
    title: 'E-Mail',
    url: '#',
    color: '#64D2FF',
  },
  {
    title: 'SEO',
    url: '#',
    color: '#BF5AF2',
  },
];

export default function Posts() {
  return (
    <>
      <Head>
        <title>NextJS Admin Panel 🖤</title>
      </Head>

      <section className={`m-3 mt-0 p-3 ${styles.mainSection}`}>
        <div className="d-flex">
          <div className="filters-container me-3 d-flex flex-direction-column justify-content-between">
            <div className="d-flex justify-content-between">
              <div className="filter select">
                <p className="filter-label">Konu Başlığı</p>
                <div className="dropdown">
                  <button
                    className="btn btn-dark dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Konu Başlığı
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    {filtersData.map((filter) => (
                      <div key={uuidv4()}>
                        <li>
                          <a className="dropdown-item" href={filter.url}>
                            <CartIcon fill={filter.color || 'black'} />
                            {filter.title}
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="filter select">
                <p className="filter-label">Dil Seçimi</p>
                <div className="dropdown">
                  <button
                    className="btn btn-dark dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Konu Başlığı
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a className="dropdown-item" href={'#'}>
                        Some Language
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href={'#'}>
                        Another Language
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href={'#'}>
                        Third Language
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between ">
              <div className="filter select">
                <p className="filter-label">Alt Başlık</p>
                <div className="dropdown">
                  <button
                    className="btn btn-dark dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Konu Başlığı
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a className="dropdown-item" href={'#'}>
                        Some Language
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href={'#'}>
                        Another Language
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href={'#'}>
                        Third Language
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="filter select">
                <p className="filter-label">Dil Tonu</p>
                <div className="dropdown">
                  <button
                    className="btn btn-dark dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Konu Başlığı
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a className="dropdown-item" href={'#'}>
                        Some Language
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href={'#'}>
                        Another Language
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href={'#'}>
                        Third Language
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="d-flex ">
              <div
                className="filter textarea large w-100
              "
              >
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="filter-label"
                >
                  Örnek Metin
                </label>
                <textarea
                  id="exampleFormControlTextarea1
                "
                  placeholder="Konu Başlığı"
                ></textarea>
              </div>
            </div>

            <div className="d-flex ">
              <div className="filter textarea small w-100">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="filter-label"
                >
                  Örnek Metin
                </label>
                <textarea
                  id="exampleFormControlTextarea1
                "
                  placeholder="Konu Başlığı"
                ></textarea>
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div className="filter select">
                <p className="filter-label">Yaratıcılık Seçimi</p>
                <div className="dropdown">
                  <button
                    className="btn btn-dark dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Konu Başlığı
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a className="dropdown-item" href={'#'}>
                        Some Language
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href={'#'}>
                        Another Language
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href={'#'}>
                        Third Language
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="filter select">
                <p className="filter-label">Varyant Sayısı</p>
                <div className="dropdown">
                  <button
                    className="btn btn-dark dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Konu Başlığı
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a className="dropdown-item" href={'#'}>
                        Some Language
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href={'#'}>
                        Another Language
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href={'#'}>
                        Third Language
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="d-flex w-100 justify-content-center">
              <button type="submit" className="btn result-button">
                Sonuç Bul
              </button>
            </div>
          </div>

          <div className="d-flex flex-column">
            <Link href="/ai-writer/posts/first-post">
              <a>First Post</a>
            </Link>
            <Link href="/ai-writer/posts/second-post">
              <a>Second Post</a>
            </Link>
            <Link href="/ai-writer/posts/third-post">
              <a>Third Post</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

Posts.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
