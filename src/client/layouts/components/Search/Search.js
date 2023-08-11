import { useEffect, useState, useRef } from 'react';
import { useDebounce } from '~/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/client/components/Popper';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import * as searchService from '~/services/searchService'
import SearchItem from '~/client/components/SearchItem';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchRessult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);
    const inputRef = useRef();

    useEffect(() => {
        // Handle input value isn't space
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        
        const fetchApi = async() => {
            setLoading(true);
            
            const result = await searchService.search(debounced);
            setSearchResult(result);
            setLoading(false);
        }

        fetchApi();
    }, [debounced]);

    const handleOnChange = (e) => {
        const searchValue = e.target.value;
        if(!searchValue.startsWith(' ')){
            setSearchValue(searchValue);
        }
    };

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchRessult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={cx('search-result-key')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <span>kết quả tìm kiếm cho '{searchValue ? searchValue : '...'}'</span>
                        </div>
                        <div className={cx('search-title')}>
                            <h4>Khóa học</h4>
                            <a href="/" className={cx('search-title-seeMore')}>
                                Xem thêm
                            </a>
                        </div>
                        {searchRessult.map((result) => (
                            <SearchItem key={result.id} data={result} />
                        ))}
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
                    onChange={handleOnChange}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear-btn')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
