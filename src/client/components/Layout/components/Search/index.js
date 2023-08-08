import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/client/components/Popper';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import SearchItem from '~/client/components/SearchItem';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchRessult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchRessult.length > 0}
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
            onClickOutside={handleHideResult}
        >
            <div className={cx('search-wrapper')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Tìm kiếm khóa học"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && (
                <button className={cx('clear-btn')} onClick={handleClear}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
