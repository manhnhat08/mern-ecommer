import classNames from "classnames/bind";
import styles from "./SearchItem.module.scss";
import Image from "../Image";

const cx = classNames.bind(styles);


function SearchItem({data}) {
    return ( 
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} 
                src={data.avatar}
                alt={data.full_name} 
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.full_name} </span>
                </p>
            </div>
        </div>
     );
}

export default SearchItem;