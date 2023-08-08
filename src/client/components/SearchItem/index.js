import classNames from "classnames/bind";
import styles from "./SearchItem.module.scss";
import Image from "../Image";

const cx = classNames.bind(styles);


function SearchItem() {
    return ( 
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} 
                src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-1/278386410_1045624122702742_541271355845158208_n.jpg?stp=dst-jpg_s320x320&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=A-7PSXDjewUAX_n-gTQ&_nc_ht=scontent.fdad2-1.fna&oh=00_AfBVDOSMUY-3ZNXq32ljAU3y684fcuMNRnxZ8zDrDs59Dw&oe=64C4D092" 
                alt="avatar course" 
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Dang Ngoc Manh Nhat</span>
                </p>
            </div>
        </div>
     );
}

export default SearchItem;