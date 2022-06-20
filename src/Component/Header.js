import React, { useState } from 'react'

function Header() {
    const [valueSearch, setValueSearch] = useState('')
    const [searchActive, setSearchActive] = useState(null)
    const [navBarActive, setNavBarActive] = useState(null)
    const [navigationShow, setNavigationShow] = useState(null)
    const onOpenSearch = () => {
        setSearchActive(searchActive === 'active' ? '': 'active')
    }

    const onOpenNavBar = () => {
        setNavBarActive(navBarActive === 'active' ? '': 'active')
        setNavigationShow(navigationShow === 'show' ? '': 'show')
    }

    const onBlurSearch = () => {
        setSearchActive('')
    }

    const onChangeValueSearch = (event) => {
        setValueSearch(event.target.value)
    }
    return (
        <header className="header show">
            <div className="logo"></div>
            <div className="slogan"><h2>Kiến Tạo Bất Động Sản  <mark>Nhân Văn bền vững</mark></h2></div>
            <div className="right-header">
                <a className="link-home" href="https://cattuonggroup.com.vn/"  data-name="home-page">
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                        <path fill="currentColor" d="M25,10L9,26h6l-0.1,12h20L35,26h6L25,10z M23.1,34.9H20v-7.2h3.1V34.9z M30,34.9h-3.1v-7.2H30V34.9z"></path>
                    </svg>
                </a>
                <a className="search-but" onClick={onOpenSearch}>
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                        <path fill="currentColor" d="M17.9,29.9L12,35.8c-0.9,0.9-0.9,2.4,0,3.4c0.9,0.9,2.4,0.9,3.4,0l5.9-5.9c-0.7-0.4-1.4-0.8-2-1.4C18.7,31.3,18.2,30.6,17.9,29.9z"></path>
                        <path  fill="currentColor" d="M37.7,13.4c-4.8-4.8-12.7-4.8-17.5,0s-4.8,12.6,0,17.4c4.8,4.8,12.7,4.8,17.5,0C42.5,25.9,42.5,18.2,37.7,13.4z M35.5,28.7c-3.7,3.7-9.6,3.7-13.3,0s-3.7-9.5,0-13.2c3.7-3.7,9.6-3.7,13.3,0C39.2,19,39.2,25,35.5,28.7z"></path>
                    </svg>
                </a>
                <div className={`search-form ${searchActive}`} tabIndex={0} onBlur={onBlurSearch}>
                    <div className="form-row-search" tabIndex={1}>
                        <form action="/tim-kiem.html" id="search" method="get">
                            <input
                                autoFocus
                                type="text"
                                id="qsearch"
                                name="qsearch"
                                placeholder="Tìm kiếm..."
                                value={valueSearch}
                                data-default="Tìm kiếm..."
                                onChange={onChangeValueSearch} 
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className={`nav-click ${navBarActive}`} onClick={onOpenNavBar}></div>
            <div className={`navigation ${navigationShow}`}>
                <div className="nav">
                    <ul>
                        <li>
                                <a className="link-load" href="https://cattuonggroup.com.vn/vi/gioi-thieu.html" data-title="Giới thiệu | Cát Tường Group" data-description="Cát Tường Group hoạt động trong lĩnh vực bất động sản tại Phía Nam với hơn 200 nhân viên chính thức và hơn 1000 cộng tác viên" data-keyword="Cát Tường Group, Cat Tuong Group, Tập đoàn Cát Tường" data-name="about-page">Giới thiệu</a>
                            </li>
        
                        <li>
                                <a className="link-load" href="https://cattuonggroup.com.vn/vi/hoat-dong-dau-tu.html" data-title="Hoạt động đầu tư | Cát Tường Group" data-description="Hoạt động đầu tư của Cát Tường Group: Đầu tư, kinh doanh, phân phối và tiếp thị các sản phẩm bất động sản, cung cấp giải pháp tài chính, tư vấn, thiết kế và cung cấp VLXD…" data-keyword="Hoạt động đầu tư của Cát Tường Group" data-name="business-page">Hoạt động đầu tư</a>
                            </li>
        
                        <li>
                                <a className="link-load" href="https://cattuonggroup.com.vn/vi/doi-tac.html" data-title="Đối tác | Cát Tường Group" data-description="Đối tác của Cát Tường Group" data-keyword="Đối tác của Cát Tường Group" data-name="partner-page">Đối tác</a>
                            </li>
        
                        <li>
                                <a className="link-load" href="https://cattuonggroup.com.vn/vi/du-an.html" data-title="Dự án | Cát Tường Group" data-description="Dự án Cát Tường Group" data-keyword="Dự án Cát Tường Group, Dự án Tập Đoàn Cát Tường" data-name="project-page">Dự án</a>
                            </li>
        
                        <li>
                                <a className="link-load" href="https://cattuonggroup.com.vn/vi/phat-trien-ben-vung.html" data-title="Phát triển bền vững | Cát Tường Group" data-description="Cát Tường Group Phát triển bền vững" data-keyword="Cát Tường Group Phát triển bền vững" data-name="sustainable-page">Phát triển bền vững</a>
                            </li>
        
                        <li>
                                <a className="link-load" href="https://cattuonggroup.com.vn/vi/con-nguoi-tai-cat-tuong-group.html" data-title="Con người | Cát Tường Group" data-description="Con người tại Cát Tường Group" data-keyword="Con người tại Cát Tường Group" data-name="recruitment-page">Con người tại Cát Tường Group</a>
                            </li>
        
                        <li>
                                <a className="link-load" href="https://cattuonggroup.com.vn/vi/tin-tuc.html" data-title="Tin tức | Cát Tường Group" data-description="Tin tức của Cát Tường Group" data-keyword="Tin tức Cát Tường Group" data-name="news-page">Tin tức</a>
                            </li>
        
                        <li>
                            <a className="link-load" href="https://cattuonggroup.com.vn/vi/dich-vu-khach-hang.html" data-title="Dịch vụ khách hàng" data-description="Dịch vụ khách hàng của Cát Tường Group" data-keyword="Dịch vụ khách hàng của Cát Tường Group" data-name="service-page">Dịch vụ khách hàng</a>
                        </li>
        
                        <li>
                            <a className="link-load" href="https://cattuonggroup.com.vn/vi/lien-he.html" data-title="Liên hệ | Cát Tường Group" data-description="Liên hệ với Cát Tường Group" data-keyword="Liên hệ với Cát Tường Group" data-name="-page">Liên hệ</a>
                        </li>
                    </ul>
                </div>
                <span/>
            </div>
        </header>
    );
}

export default Header;
