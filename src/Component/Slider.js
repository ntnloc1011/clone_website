import React, { useState, useEffect } from 'react'

function Slider() {
    const [classContainer, setClassContainer] = useState('')

    useEffect(() => { // add thêm property class khi ui đã render hoàn tất 
        setClassContainer('clippart finish')
    }, [])
    
    return (
        <div className={`container ${classContainer}`} id="home-page">
            <div className="title-page"><h1>Trang chủ</h1></div>
            <div className="box-nav show">
                <ul>
                    <li><a data-page="banner-home">01</a></li>
                    <li><a data-page="video-home">02</a></li>
                    <li><a data-page="business-home">03</a></li>
                    <li><a data-page="news-home">04</a></li>
                    <li><a data-page="contact-home">05</a></li>
                </ul>
            </div>
            <div className="box-slider">
            <div className="group-central" data-name="banner-home">
                    <div className="slide-pics slide-slidebox" data-time="4000">
                            <div className="banner-home">
                            <div className="bg-home" style={{backgroundImage: `url("https://cattuonggroup.com.vn/pictures/catalog/project-details/parkhouse/home-parkhouse.jpg")` }}></div>
                            <div className="text-banner">
                                <div className="description">
                                    <h2>Cát Tường Park House</h2>
                                    <p><p style={{ textAlign: "justify" }}>Nơi mang đến niềm tin yêu và hy vọng bởi những tia sáng tương lai, là "tâm điểm" kết nối giữa thiên nhiên và con người trong một không gian thanh bình của <b>khu dân cư chuẩn Nhật hàng đầu Đông Nam Bộ</b></p></p>
                                    <a className="go-page" href="/vi/du-an/bat-dong-san-dan-dung/cat-tuong-park-house.html"></a>
                                </div>
                            </div>
                        </div>
                        <div className="banner-home">
                            <div className="bg-home" style={{ backgroundImage: `url("https://cattuonggroup.com.vn/pictures/catalog/projects/home-cat-tuong-western-pearl.jpg")` }}></div>
                            <div className="text-banner">
                                <div className="description">
                                    <h2>Khu Đô Thị Cát Tường Western Pearl</h2>
                                    <p><p style={{ textAlign: "justify" }}>...  Giữa miền sông xanh, muôn kỳ quan hội tụ, tái sinh những tinh hoa ngàn năm, Kiến tạo một đô thị đẳng cấp, trẻ trung và hiện đại…</p>
                                        <p style={{ textAlign: "justify" }}><strong>Cát Tường Western Pearl</strong><br /> Đô thị giao thương - Cộng đồng thịnh vượng</p></p>
                                    <a className="go-page" href="/vi/du-an/bat-dong-san-dan-dung/khu-do-thi-cat-tuong-western-pearl.html"></a>
                                </div>
                            </div>
                        </div>
                        <div className="banner-home">
                            <div className="bg-home" style={{ backgroundImage: `url("https://cattuonggroup.com.vn/pictures/catalog/projects/home-taka-garden.jpg")` }}></div>
                            <div className="text-banner">
                                <div className="description">
                                    <h2>Taka Garden Riverside Homes</h2>
                                    <p>
                                        <p style={{ textAlign: "justify" }}>... Bên dòng sông Vàm Cỏ Tây hiền hoà, êm đềm sóng nước phương Nam; những mái nhà phố thấp thoáng ẩn hiện giữa khu vườn Nhật xanh mướt. Đâu đây ngân nga tiếng cười nói, con trẻ hồn nhiên chơi đùa, người lớn gặp chào nhau cùng đôi lời thăm hỏi. Con đường rợp bóng cây dẫn lối trở về nhà, sau ô cửa với các tiện ích thông minh chỉ “một nút chạm” đã mở ra không gian sống với yêu thương và hạnh phúc luôn đong đầy. </p>
                                        <p style={{ textAlign: "justify" }}><strong>Taka Garden Riverside Homes </strong><br /> Sống Chất Chuẩn Nhật</p></p>
                                    <a className="go-page" href="/vi/du-an/bat-dong-san-dan-dung/taka-garden-riverside-homes.html"></a>
                                </div>
                            </div>
                        </div>
                        <div className="banner-home">
                            <div className="bg-home" style={{ backgroundImage: `url("https://cattuonggroup.com.vn/pictures/catalog/projects/home-cat-tuong-phu-hung.jpg")` }}></div>
                            <div className="text-banner">
                                <div className="description">
                                    <h2>Khu Đô Thị Phức Hợp - Cảnh Quan Cát Tường Phú Hưng</h2>
                                    <p>
                                        <p style={{ textAlign: "justify" }}>… Như bước ra từ câu chuyện cổ tích, một Châu Âu hoa lệ ẩn mình giữa không gian thiên nhiên thuần khiết. Nơi thảm cỏ, vườn hoa hòa ca cùng những tinh hoa kiến trúc... Một thiên đường đong đầy hạnh phúc, nơi khởi nguồn cho sự thành công. Cát Tường Phú Hưng: “Kiến trúc tinh hoa - Hài hòa cuộc sống”</p>
                                    </p>
                                    <a className="go-page" href="/vi/du-an/bat-dong-san-dan-dung/cat-tuong-phu-hung.html"></a>
                                </div>
                            </div>
                        </div>
                            <div className="banner-home">
                            <div className="bg-home" style={{ backgroundImage: `url("https://cattuonggroup.com.vn/pictures/catalog/projects/home-auroraip.jpg")` }}></div>
                            <div className="text-banner">
                                <div className="description">
                                    <h2>Khu Công Nghiệp Dệt May Rạng Đông - Aurora IP</h2>
                                    <p><p style={{ textAlign: "justify" }}>Khu Công Nghiệp Dệt May Rạng Đông - Aurora IP cung cấp gói giải pháp toàn diện cho những khu liên hợp đô thị - công nghiệp như quy hoạch tổng thể quốc tế, hạ tầng bền vững và thu hút nhà đầu tư nước ngoài, khuyến khích phát triển công nghệ cao, mang lại giá trị sản xuất thặng dư cao hơn. </p></p>
                                    <a className="go-page" href="/vi/du-an/bat-dong-san-cong-nghiep/khu-cong-nghiep-det-may-rang-dong-aurora-ip.html"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group-central" data-name="video-home">
                    <div className="box-video-center">
                        <div className="video-cover" id="videocontainer" data-fullscreen="false">
                            <a className="player-vid" id="playervid"></a>
                            <div className="pic-video" style={{ backgroundImage: `url("https://cattuonggroup.com.vn/pictures/catalog/video/clip-introduce-logo-ctg.jpg")` }}></div>
                            <video id="video-full" className="video-full" preload="auto" loop muted controls>
                                <source src="https://cattuonggroup.com.vn/download/ctg-introduce-logo.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                            </video>
                            <div id="videocontrols" className="controls" data-state="hidden">
                                <button id="stop" type="button" data-state="stop"></button>
                                <button id="playpause" type="button" data-state="play"></button>
                                <div className="progress"><progress id="progress" value="0" min="0"><span id="progressbar"></span></progress></div>
                                <button id="mute" type="button" data-state="mute"></button>
                                <button id="fullscreen" type="button" data-state="go-fullscreen"></button>
                            </div>
                            <span className="overlay"></span>
                        </div>
                    </div>
                </div>

                <div className="group-central bg-gradient" data-name="business-home">
                    <div className="box-bg"></div>
                    <div className="content-main">
                        <div className="box-intro">
                            <h2>Hoạt động đầu tư</h2>
                            <div className="all-business">
                                <div className="business-home color-grey">
                                    <div className="box-business-home">
                                        <div className="pic-business-home pic-thumb-bg" style={{backgroundImage: `url("https://cattuonggroup.com.vn/pictures/catalog/background/bds-dan-dung.jpg")`}}>
                                            <img src="https://cattuonggroup.com.vn/pictures/catalog/background/bds-dan-dung.jpg" alt="Đầu Tư BĐS Dân Dụng"/>
                                        </div>
                                        <a className="link-load" href="https://cattuonggroup.com.vn/vi/hoat-dong-dau-tu/dau-tu-bat-dong-san-dan-dung.html">
                                            <h3>
                                                <strong>Đầu tư</strong><br />Bất Động Sản<br />Dân Dụng
                                            </h3>
                                            <span>xem chi tiết</span>
                                        </a>
                                        <span className="hover"></span>
                                    </div>
                                    <div className="box-business-home">
                                        <div className="pic-business-home pic-thumb-bg" style={{backgroundImage: `url("https://cattuonggroup.com.vn/pictures/catalog/projects/home-auroraip.jpg")`}}>
                                            <img src="https://cattuonggroup.com.vn/pictures/catalog/projects/home-auroraip.jpg" alt="Đầu Tư BĐS Công Nghiệp"/>
                                        </div>
                                        <a className="link-load" href="https://cattuonggroup.com.vn/vi/hoat-dong-dau-tu/dau-tu-bat-dong-san-cong-nghiep.html">
                                            <h3>
                                                <strong>Đầu tư</strong><br />Bất Động Sản<br />công nghiệp
                                            </h3>
                                            <span>xem chi tiết</span>
                                        </a>
                                        <span className="hover"></span>
                                    </div>
                                    <div className="box-business-home">
                                        <div className="pic-business-home pic-thumb-bg" style={{backgroundImage: `url("https://cattuonggroup.com.vn/pictures/catalog/background/bg2.jpg")`}}>
                                            <img src="https://cattuonggroup.com.vn/pictures/catalog/background/bg2.jpg" alt="Đầu Tư Bất Động Sản Thương Mại"/>
                                        </div>
                                        <a className="link-load" href="https://cattuonggroup.com.vn/vi/hoat-dong-dau-tu/dau-tu-bat-dong-san-thuong-mai.html">
                                            <h3>
                                                <strong>Đầu Tư </strong><br />BĐS Thương Mại
                                            </h3>
                                            <span>xem chi tiết</span>
                                        </a>
                                        <span className="hover"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="group-central bg-gradient" data-name="news-home">
                    <div className="box-bg"></div>
                    <div className="content-main">
                        <div className="box-intro">
                            <h2>TIN TỨC CÁT TƯỜNG GROUP</h2>
                        
                            <div className="news-home">
                                <div className="box-news-home">
                                    <a className="link-load" href="https://cattuonggroup.com.vn/vi/tin-tuc/tin-noi-bo/tap-san-xuan-cat-tuong-so-06-nhip-song-xanh.html">
                                        <div className="pic-news-home pic-thumb-bg" style={{backgroundImage: `url("https://cattuonggroup.com.vn/pictures/catalog/project-details/parkhouse/home-parkhouse.jpg")`}}>
                                            <img src="https://cattuonggroup.com.vn/pictures/catalog/tintuc/tin-noi-bo/tap-san-nhip-song-xanh-062022.jpg" alt="Tập san Xuân Cát Tường số 06  - Nhịp Sống Xanh"/>
                                        </div>
                                        <div className="text-news-home">
                                            <div className="center-text-news">
                                                <h3>Tập san Xuân Cát Tường số 06  - Nhịp Sống Xanh</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="box-news-home">
                                    <a className="link-load" href="https://cattuonggroup.com.vn/vi/tin-tuc/tin-du-an/loi-the-an-cu-va-dau-tu-tai-cat-tuong-park-house.html">
                                        <div className="pic-news-home pic-thumb-bg" style={{backgroundImage: `url("https://cattuonggroup.com.vn/pictures/catalog/project-details/parkhouse/cv-kintarou-2-parkhouse.jpg")`}}>
                                            <img src="https://cattuonggroup.com.vn/pictures/catalog/project-details/parkhouse/cv-kintarou-2-parkhouse.jpg" alt="Lợi thế an cư và đầu tư tại Cát Tường Park House"/>
                                        </div>
                                        <div className="text-news-home">
                                            <div className="center-text-news">
                                                <h3>Lợi thế an cư và đầu tư tại Cát Tường Park House</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="box-news-home">
                                    <a className="link-load" href="https://cattuonggroup.com.vn/vi/tin-tuc/tin-du-an/song-tron-ven-va-dau-tu-ly-tuong-tai-khu-do-thi-cat-tuong-park-house.html">
                                        <div className="pic-news-home pic-thumb-bg" style={{backgroundImage: `url("https://cattuonggroup.com.vn/pictures/catalog/project-details/parkhouse/view-parkhouse.jpg")`}}>
                                            <img src="https://cattuonggroup.com.vn/pictures/catalog/project-details/parkhouse/view-parkhouse.jpg" alt="Sống trọn vẹn và đầu tư lý tưởng tại Khu đô thị Cát Tường Park House"/>
                                        </div>
                                        <div className="text-news-home">
                                            <div className="center-text-news">
                                                <h3>Sống trọn vẹn và đầu tư lý tưởng tại Khu đô thị Cát Tường Park House</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="box-news-home">
                                    <a className="link-load" href="https://cattuonggroup.com.vn/vi/tin-tuc/tin-tap-doan/khong-khi-soi-dong-tai-le-ra-mat-khu-dan-cu-cat-tuong-park-house.html">
                                        <div className="pic-news-home pic-thumb-bg" style={{backgroundImage: `url("https://cattuonggroup.com.vn/pictures/catalog/project-details/parkhouse/cv-taiyou-3-parkhouse.jpg")`}}>
                                            <img src="https://cattuonggroup.com.vn/pictures/catalog/project-details/parkhouse/cv-taiyou-3-parkhouse.jpg" alt="Không khí sôi động tại lễ ra mắt Khu dân cư Cát Tường Park House"/>
                                        </div>
                                        <div className="text-news-home">
                                            <div className="center-text-news">
                                                <h3>Không khí sôi động tại lễ ra mắt Khu dân cư Cát Tường Park House</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="box-news-home">
                                    <a className="link-load" href="https://cattuonggroup.com.vn/vi/tin-tuc/tin-thi-truong/bat-dong-san-binh-phuoc-vung-trung-hut-dau-tu-nam-2022.html">
                                        <div className="pic-news-home pic-thumb-bg" style={{backgroundImage: `url("https://cattuonggroup.com.vn/pictures/catalog/tintuc/2022/becamex-chon-thanh.jpg")`}}>
                                            <img src="https://cattuonggroup.com.vn/pictures/catalog/tintuc/2022/becamex-chon-thanh.jpg" alt="Bất động sản Bình Phước - ‘vùng trũng’ hút đầu tư năm 2022"/>
                                        </div>
                                        <div className="text-news-home">
                                            <div className="center-text-news">
                                                <h3>Bất động sản Bình Phước - ‘vùng trũng’ hút đầu tư năm 2022</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group-central bg-gradient" data-name="contact-home">
                    <div className="box-bg"></div>
                    <div className="content-main">
                        <div className="box-intro">
                            <h2>Công ty thành viên</h2>
                            <div className="member">
                                <div className="all-logo">
                                    <a className="pic-logo link-load" href="https://cattuonggroup.com.vn/vi/cong-ty-thanh-vien/dau-khi-mien-nam.html">
                                        <img src="https://cattuonggroup.com.vn/pictures/catalog/member/dau-khi-mien-nam.jpg" alt="Dầu Khí Miền Nam"/>
                                    </a>
                                    <a className="pic-logo link-load" href="https://cattuonggroup.com.vn/vi/cong-ty-thanh-vien/cat-tuong-thao-nguyen.html">
                                        <img src="https://cattuonggroup.com.vn/pictures/catalog/member/cat-tuong-thao-nguyen.jpg" alt="Cát Tường Thảo Nguyên"/>
                                    </a>
                                    <a className="pic-logo link-load" href="https://cattuonggroup.com.vn/vi/cong-ty-thanh-vien/my-hanh-duc-hoa.html">
                                        <img src="https://cattuonggroup.com.vn/pictures/catalog/member/my-hanh-duc-hoa.jpg" alt="Mỹ Hạnh Đức Hòa"/>
                                    </a>
                                    <a className="pic-logo link-load" href="https://cattuonggroup.com.vn/vi/cong-ty-thanh-vien/aurora.html">
                                        <img src="https://cattuonggroup.com.vn/pictures/catalog/member/aurora.jpg" alt="Aurora"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
