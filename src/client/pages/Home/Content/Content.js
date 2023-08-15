import classNames from "classnames/bind";
import styles from './Content.module.scss'
import ScrollList from "./ScrollList";

const cx = classNames.bind(styles)

function Content() {
    return ( 
        <div className={cx('wrapper')}>
            <ScrollList />
        </div>
     );
}

export default Content;