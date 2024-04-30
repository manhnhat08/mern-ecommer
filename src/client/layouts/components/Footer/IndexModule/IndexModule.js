import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './IndexModule.module.scss';
import FooterItem from './Footer_item';
import { Link } from 'react-router-dom';
import images from '~/client/assets/images';

const cx = classNames.bind(styles);

const Item1 = [
    {
        Logo: (
            <Link className={cx('link-info')}>
                <img className={cx('top-logo')} src={images.logo} alt="logo-header" />
            </Link>
        ),
        Slogan: <h2 className={cx('top-slogan')}>Học tiếng anh để làm gì</h2>,
        Content: (
            <p className={cx('contact-list')}>
                Điện thoại: 
                <Link className={cx('link-info')}> 0246.329.1102</Link>
                <br />
                Email: 
                <Link className={cx('link-info')}> contact@fullstack.edu.vn</Link>
                <br />
                245 Trần Đại Nghĩa, Ngũ Hành Sơn, Đà Nẵng.
            </p>
        ),
    },
];

const Item2 = [
    {
        Slogan: <h2 className={cx('top-heading')}>Về LangCourse</h2>,
        Content: (
            <ul className={cx('list')}>
                <li><Link className={cx('link-info')}>Giới thiệu</Link></li>
                <li><Link className={cx('link-info')}>Liên hệ</Link></li>
                <li><Link className={cx('link-info')}>Điều khoản</Link></li>
                <li><Link className={cx('link-info')}>Bảo mật</Link></li>
                <li><Link className={cx('link-info')}>Cơ hội làm việc</Link></li>
            </ul>
        ),
    },
];

const Item3 = [
    {
        Slogan: <h2 className={cx('top-heading')}>Sản Phẩm</h2>,
        Content: (
            <ul className={cx('list')}>
                <li><Link className={cx('link-info')}>Game Nester</Link></li>
                <li><Link className={cx('link-info')}>Game CSS Diner</Link></li>
                <li><Link className={cx('link-info')}>Game CSS Selectors</Link></li>
                <li><Link className={cx('link-info')}>Game Proggy</Link></li>
                <li><Link className={cx('link-info')}>Game Proggy Pro</Link></li>
                <li><Link className={cx('link-info')}>Game Scoops</Link></li>
            </ul>
        ),
    },
];

const Item4 = [
    {
        Slogan: <h2 className={cx('top-heading')}>Contact Us</h2>,
        Content: (
            <div>
                <input type='email' className={cx('inp-contact')} placeholder='Your email id here' />
                <button className={cx('btn-contact')}>Subscribe</button>
            </div>
        ),
    },
];

function IndexModule() {
    return (
        <section className={cx('grid')}>
            <section className={cx('row')}>
                <section className={cx('col')}>
                    {Item1.map((item, index) => (
                        <FooterItem key={index} Logo={item.Logo} Slogan={item.Slogan} Content={item.Content} />
                    ))}
                </section>
                <section className={cx('col')}>
                    {Item2.map((item, index) => (
                        <FooterItem key={index} Slogan={item.Slogan} Content={item.Content} />
                    ))}
                </section>
                <section className={cx('col')}>
                    {Item3.map((item, index) => (
                        <FooterItem key={index} Slogan={item.Slogan} Content={item.Content} />
                    ))}
                </section>
                <section className={cx('col')}>
                    {Item4.map((item, index) => (
                        <FooterItem key={index} Slogan={item.Slogan} Content={item.Content} />
                    ))}
                </section>
            </section>
            <section className={cx('row')}>
                <section className={cx('col-12')}>
                    <div className={cx('bottom')}>
                        <p className={cx('copyright')}>© 2013 - 2025  LangCourse - Nền tảng học hàng đầu Việt Nam.</p>
                        <div className={cx('social-list')}>
                            <Link  className={cx('social-google')}><i class="fab fa-google-plus-g text-white"></i></Link>
                            <Link  className={cx('social-facebook')}><i class="fab fa-facebook-f text-white"></i></Link>
                            <Link  className={cx('social-twitter')}><i class="fab fa-twitter text-white"></i></Link>
                            <Link  className={cx('social-pinterest')}><i class="fab fa-pinterest-p text-white"></i></Link>
                            <Link  className={cx('social-vimeo')}><i class="fab fa-vimeo-v text-white"></i></Link>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}

export default IndexModule;
