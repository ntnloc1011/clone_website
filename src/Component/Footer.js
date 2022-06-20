
import React from 'react'

function Footer() {
    return (
            <footer className="footer">
                <div className="footer-right">
                    <div className="company-text">
                        <h3>Công Ty Cổ Phần Tập Đoàn Địa Ốc Cát Tường</h3>
                        <ul className="company-info">
                            <li>
                                <span className="address"></span>
                                <p>Trụ sở: 789 ấp Mới 1, Mỹ Hạnh Nam, Đức Hoà, Long An<br /> TPHCM: 259A Nguyễn Văn Trỗi, P.10, Q.Phú Nhuận, TP.HCM<br /> Cần Thơ: 357 đường 30 Tháng 4, P.Hưng Lợi, Ninh Kiều, Cần Thơ<br /> Hậu Giang: 2 Trần Hưng Đạo, P.5, TP.Vị Thanh, Hậu Giang</p></li>                <li><span className="call"></span><p><a href="tel:19002836">19002836</a> - <a href="tel:0945717170">0945717170</a> - <a href="tel:0901237858">0901237858</a></p></li><li><span className="email"></span><p><a href="mailto:info@cattuonggroup.com.vn">info@cattuonggroup.com.vn</a></p></li>            </ul>
                    </div>
                </div>
                <div className="footer-left">
                    <div className="newletter">
                        <h3>Đăng ký nhận tin</h3>
                        <div className="form-newletter">
                        <form method="post" id="frmEmail">
                            <input type="hidden" value="8" name="type"/>
                            <input name="email" type="text" data-holder="Email" data-error="Email không hợp lệ!" className="required" data-validate="email" value="Email"/>
                            <button type="button" className="button" data-action="/contact-none.html" id="regEmail">nhận tin</button>
                        </form>
                        </div>
                    </div>
                    <div className="social">
                        <ul>
                            <li>
                                <a className="facebook" target="_blank" rel="nofollow noreferrer" href="https://www.facebook.com/tapdoandiaoccattuong"></a>
                            </li>
                            <li>
                                <a className="youtube" rel="nofollow noreferrer" target="_blank" href="https://www.youtube.com/c/CátTườngGroup"></a>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-text">
                        <div className="copyright">
                            2018 <strong>Cat tuong Group</strong>.  All Rights Reserved. <a href="http://www.btq.vn" rel="nofollow noreferrer" target="_blank">DEVELOPED BY 3GRAPHIC</a>
                        </div>
                    </div>
                </div>
            </footer>
    );
}

export default Footer;
