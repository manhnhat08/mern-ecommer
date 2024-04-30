import classNames from 'classnames/bind';
import styles from './Footer_item.module.scss';


const cx = classNames.bind(styles);

function Footer_item({Logo, Slogan, Content}) {
    return (
        <div className={cx('column')}>
            <div>
                <div className={cx('top')}>
                    {Logo}
                    {Slogan}
                </div>
               
                    {Content}
                
            </div>
        </div>
    );
}

export default Footer_item;