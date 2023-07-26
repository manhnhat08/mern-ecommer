import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faSignOut, faSignIn } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/client/assets/images';
import { Wrapper as PopperWrapper } from '~/client/components/Popper';
import SearchItem from '~/client/components/SearchItem';
import Button from '~/client/components/Button';
import Menu from '~/client/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon : <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
    },
    {
        icon : <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Hỏi đáp',
        to: '/Feedback'
    },
    {
        icon : <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Bàn phím',
    }
];

function Header() {
    const [searchRessult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <a href="/">
                        <img src={images.logo} alt="logo-header" />
                    </a>
                    <h4 className={cx('logo-heading')}>Học tiếng anh để làm gì</h4>
                </div>
                <div className={cx('search')}>
                    <Tippy
                        interactive
                        visible={searchRessult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <div className={cx('search-result-key')}>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        <span>kết quả tìm kiếm cho '...'</span>
                                    </div>
                                    <div className={cx('search-title')}>
                                        <h4>Khóa học</h4>
                                        <a href="/" className={cx('search-title-seeMore')}>
                                            Xem thêm
                                        </a>
                                    </div>
                                    <SearchItem />
                                    <SearchItem />
                                    <SearchItem />
                                    <SearchItem />
                                    <SearchItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search-wrapper')}>
                            <input placeholder="Tìm kiếm khóa học" spellCheck={false} />
                            <button className={cx('clear-btn')}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>
                </div>
                <div className={cx('action')}>
                    <Button primary rounded leftIcon={<FontAwesomeIcon icon={faSignIn} />}>Đăng nhập</Button>
                    <Button outline rounded rightIcon={<FontAwesomeIcon icon={faSignOut} />}>Đăng xuất</Button>

                    <Menu
                        items={MENU_ITEMS}
                    >
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
