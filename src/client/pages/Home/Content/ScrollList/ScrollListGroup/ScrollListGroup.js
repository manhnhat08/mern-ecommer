import classNames from 'classnames/bind';
import styles from './ScrollListGroup.module.scss';
import Button from '~/client/components/Button';

const cx = classNames.bind(styles);

function ScrollListGroup({ CourseImg, CourseTitle, OldPrice, MainPrice }) {
    return (
        <section className={cx('group-row')}>
            <div className={cx('wrapper-item')}>
                <a className={cx('link-item')} title="" href="/" target="_seft">
                    <Button className={cx('btn-course-item')} primary>
                        Xem khóa học
                    </Button>
                    <img className={cx('img-item')} src={CourseImg} alt="Course" />
                </a>
                <h3 className={cx('title-item')}>
                    <a target="_seft" href="/">
                        {CourseTitle}
                    </a>
                </h3>
                <div className={cx('price')}>
                    <span className={cx('old-price-item')}>{OldPrice}</span>
                    <span className={cx('main-price-item')}>{MainPrice}</span>
                </div>
            </div>
        </section>
    );
}

export default ScrollListGroup;
