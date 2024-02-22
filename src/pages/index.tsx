export default function Home() {
  return (
    <>
      <button
        className="btn btn-primary d-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvas"
        aria-controls="offcanvas"
      ></button>
      <div
        className="offcanvas offcanvas-start"
        style={{ zIndex: "100 !important" }}
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-header">
          <div className="d-flex align-items-center gap-2">
            <span className="navigation">Navigation</span>
          </div>
          <label className="theme-switch">
            <input className="toggle-checkbox" id="checkbox" type="checkbox" />
            <div className="switch-icon">
              <i className="bi bi-brightness-high yellowprim" />
            </div>
          </label>
        </div>
        <div className="offcanvas-body d-flex flex-column justify-content-between">
          <div className="link-list">
            <a href="https://alinea.co.id" className="nav-item-link active">
              <div className="icon-link">
                <i className="bi bi-house-door-fill" />
              </div>
              <div className="title">Beranda</div>
            </a>
            <a href="https://alinea.co.id/price" className="nav-item-link ">
              <div className="icon-link">
                <i className="bi bi-tags-fill" />
              </div>
              <div className="title">Pricelist</div>
            </a>
            <a href="https://alinea.co.id/transaksi" className="nav-item-link ">
              <div className="icon-link">
                <i className="bi bi-receipt-cutoff" />
              </div>
              <div className="title">Lacak Transaksi</div>
            </a>
            <a
              href="https://alinea.co.id/kalkulator"
              className="nav-item-link "
            >
              <div className="icon-link">
                <i className="bi bi-calculator-fill" />
              </div>
              <div className="title">Kalkulator</div>
            </a>
            <a href="https://alinea.co.id/blog" className="nav-item-link ">
              <div className="icon-link">
                <i className="bi bi-newspaper" />
              </div>
              <div className="title">Artikel</div>
            </a>
          </div>
          <div className=" flex align-content-end">
            <div className="d-flex gap-2 w-100">
              <a
                type="button"
                href="https://alinea.co.id/account/auth/login"
                className="btnYellowPrimary d-inline-flex flex-fill px-3 w-100"
              >
                Masuk
              </a>
              <a
                type="button"
                href="https://alinea.co.id/account/auth/register"
                className="btnYellowSecond d-inline-flex flex-fill px-3 w-100"
              >
                Daftar
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container position-relative justify-content-md-center ">
          <button
            className="search d-md-none d-block"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-search" />
          </button>
          <div className="d-flex align-items-center gap-2" id="navLogo">
            <img
              src="https://alinea.co.id/assets/images/1707578893_d5ad815fdc08781050cb.png"
              // onClick="window.location.href='https://alinea.co.id'"
              className="logo "
              alt=""
            />
            <span className="logoName ">Alinea</span>
          </div>
          <div
            className="collapse navbar-collapse order-2 "
            id="navbarNavDropdown"
          >
            <div className="py-3  d-flex d-md-none " id="navSearch">
              <form
                action="https://alinea.co.id/search"
                method="GET"
                className=" w-100"
              >
                <div className="navSearch ">
                  <input
                    type="text"
                    name="keyword"
                    id="searchInput"
                    defaultValue=""
                    placeholder="Cari Game"
                  />
                  <i className="bi bi-search" />
                </div>
              </form>
            </div>
          </div>
          <div className="navRight w-100 justify-content-end d-none d-md-flex">
            <form action="https://alinea.co.id/search" method="GET">
              <div className="navSearch">
                <input
                  type="text"
                  name="keyword"
                  id="searchInput"
                  defaultValue=""
                  placeholder="Cari Game"
                />
                <i className="bi bi-search" />
              </div>
            </form>
            <a
              href="https://alinea.co.id/account/auth/login"
              className="btnYellowPrimary login"
            >
              Masuk
            </a>
            <a
              href="https://alinea.co.id/account/auth/register"
              className="btnYellowSecond login"
            >
              Daftar
            </a>
            <div className="containerMenu">
              <div className="dropdown">
                <button className="dropdownMenu shadow">
                  <i className="bi bi-grid-fill" />
                </button>
                <div className="dropdown-content">
                  <a href="https://alinea.co.id">
                    <div className="containers">
                      <i className="bi bi-house-door-fill" />
                      <div className="name">Beranda</div>
                    </div>
                    <i className="bi bi-arrow-right-short" />
                  </a>
                  <a href="https://alinea.co.id/price">
                    <div className="containers">
                      <i className="bi bi-tags-fill" />
                      <div className="name">Daftar Harga</div>
                    </div>
                    <i className="bi bi-arrow-right-short" />
                  </a>
                  <a href="https://alinea.co.id/transaksi">
                    <div className="containers">
                      <i className="bi bi-receipt-cutoff" />
                      <div className="name">Lacak Pesanan</div>
                    </div>
                    <i className="bi bi-arrow-right-short" />
                  </a>
                  <a href="https://alinea.co.id/kalkulator">
                    <div className="containers">
                      <i className="bi bi-calculator-fill" />
                      <div className="name">Kalkulator</div>
                    </div>
                    <i className="bi bi-arrow-right-short" />
                  </a>
                  <a href="https://alinea.co.id/blog">
                    <div className="containers">
                      <i className="bi bi-newspaper" />
                      <div className="name">Artikel</div>
                    </div>
                    <i className="bi bi-arrow-right-short" />
                  </a>
                </div>
              </div>
            </div>
            <label className="theme-switch shadow">
              <input
                className="toggle-checkbox"
                id="checkbox"
                type="checkbox"
              />
              <div className="switch-icon">
                <i className="bi bi-brightness-high yellowprim" />
              </div>
            </label>
          </div>
          <input
            type="checkbox"
            role="button"
            aria-label="Display the menu order-1"
            className="menu d-md-none d-block"
            id="menuCheckbox"
          />
          {/* <button type="button" aria-label="Display the menu order-1" class="search d-md-none d-block" id="menuCheckbox">
    <i class="bi bi-list"></i>
      </button> */}
        </div>
      </nav>
      <div className="mobileNav">
        <a href="https://alinea.co.id" className="containers active">
          <i className="bi bi-house-door-fill" />
          <div className="text">Beranda</div>
        </a>
        <a href="https://alinea.co.id/price" className="containers ">
          <i className="bi bi-tags-fill" />
          <div className="text">Pricelist</div>
        </a>
        <a href="https://alinea.co.id/transaksi" className="containers ">
          <i className="bi bi-receipt-cutoff" />
          <div className="text">Riwayat</div>
        </a>
        <a href="https://alinea.co.id/kalkulator" className="containers ">
          <i className="bi bi-calculator-fill" />
          <div className="text">Kalkulator</div>
        </a>
        <a
          href="https://alinea.co.id/account/auth/login"
          className="containers "
        >
          <i className="bi bi-person-fill-lock" />
          <div className="text">Login</div>
        </a>
      </div>
    </>
  );
}
