import classNames from "classnames/bind";
import styles from './ScrollList.module.scss'

const cx = classNames.bind(styles);

function ScrollList() {
    return ( 
        <div className={cx('vertical')}>
            <h2>ScrollList</h2>
        </div>
     );
}

export default ScrollList;