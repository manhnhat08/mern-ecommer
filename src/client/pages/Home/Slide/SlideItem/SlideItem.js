import classNames from 'classnames/bind';
import styles from './SlideItem.module.scss';
import Button from '~/client/components/Button/Button';

const cx = classNames.bind(styles);
function SlideItem({heading, desc, nameBtn, href, slideImage}) {
    return ( 
        <div className={cx('slideShow-item')}>
            <div className={cx('slideShow-left')}>
                <h2 className={cx('slideShow-heading')}>{heading}</h2>
                <p className={cx('slideShow-desc')}>{desc}</p>
                <Button className={cx('slideShow-navBtn')} href={href} > {nameBtn} </Button>
            </div>
            <div className={cx('slideShow-right')}>
                <img src={slideImage} alt='slideImage' />
            </div>
        </div>
     );
}

export default SlideItem;