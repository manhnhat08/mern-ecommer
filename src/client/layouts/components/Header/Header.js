import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faSignOut,
    faSignIn,
    faGear,
    faBookBookmark,
    faPager,
    faBlog,
    faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import images from '~/client/assets/images';
import Button from '~/client/components/Button';
import Menu from '~/client/components/Popper/Menu';
import { UplloadIcon } from '~/client/components/Icons';
import Image from '~/client/components/Image';
import Search from '../Search';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'ko',
                    title: '한국인',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Hỏi đáp',
        to: '/feeback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Bàn phím',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faAddressCard} />,
        title: 'Trang cá nhân',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faBlog} />,
        title: 'Viết Blog',
        to: '/new-post',
        separate: true,
    },
    {
        icon: <FontAwesomeIcon icon={faPager} />,
        title: 'Bài viết của tôi',
        to: '/posts',
    },
    {
        icon: <FontAwesomeIcon icon={faBookBookmark} />,
        title: 'Bài viết đã lưu',
        to: '/bookmark',        
        separate: true,
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Cài đặt',
        to: '/settings',
        separate: true,
    },
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Đăng xuất',
        to: '/logout',
    },

]


function Header() {
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home}>
                        <img src={images.logo} alt="logo-header" />
                    </Link>
                    <h4 className={cx('logo-heading')}>Học tiếng anh để làm gì</h4>
                </div>
                <div className={cx('search')}>
                    {/* Search */}
                    <Search />
                </div>
                {/* Show action after login */}
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <button className={cx('action-btn-text')}>Khóa học của tôi</button>
                            <Tippy content='Thông báo' placement='bottom' delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <UplloadIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary rounded leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Đăng nhập
                            </Button>
                            <Button outline rounded rightIcon={<FontAwesomeIcon icon={faSignOut} />}>
                                Đăng xuất
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src=""
                                className={cx('user-avatar')}
                                
                                alt="Dang Ngoc Manh Nhat"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
