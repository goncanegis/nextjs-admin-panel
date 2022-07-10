import React, { useState } from 'react';

const MainNavbar = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="d-flex flex-column flex-nowrap flex-lg-row w-100 align-items-start align-items-lg-center top-nav p-3">
      <div className="welcome-text d-flex mb-sm-3 mb-lg-0">
        <p>Arge Projesi’ne Hoşgeldin Örnek İnsan</p>
      </div>
      <div className="d-flex w-100 w-lg-60 align-items-center justify-content-lg-end">
        <div className="search-bar d-flex bg-dark px-2">
          <img src="/images/icon/searchIcon.svg" alt="Arama Yapınız" />
          <input
            className="form-control border-0 bg-dark p-2 text-white "
            placeholder="Arama yapın..."
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <div className="d-flex notification-container position-relative mx-3">
          <img src="/images/icon/bellIcon.svg" alt="Bildirimler" />
          <img
            src="/images/icon/badge.svg"
            className="position-absolute notification-badge"
            alt="badge"
          />
        </div>

        <div className="d-flex">
          <div className="dropdown w-100">
            <button
              className="btn btn-dark dropdown-toggle d-inline-flex align-items-center position-relative pe-3"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="/images/Profile.png"
                alt="Kullanıcı"
                className="rounded-circle profile-pic"
              />
              <p className="profile-name mb-0 mx-2 text-bold">Örnek İnsan</p>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
