import classNames from 'classnames/bind';
import styles from './ScrollList.module.scss';
import ScrollListGroup from './ScrollListGroup';
import CourseImg1 from '~/client/assets/images/course/17.png';
import CourseImg2 from '~/client/assets/images/course/18.png';
import CourseImg3 from '~/client/assets/images/course/19.png';
import CourseImg4 from '~/client/assets/images/course/20.png';

const cx = classNames.bind(styles);
const ScrollListGroups = [
    {
        CourseImg: CourseImg1,
        CourseTitle: 'HTML CSS Pro',
        OldPrice: '2.500.000đ',
        MainPrice: '1.900.000đ',
    },
    {
        CourseImg: CourseImg2,
        CourseTitle: 'JavaScript Pro',
        OldPrice: '2.100.000đ',
        MainPrice: '1.600.000đ',
    },
    {
        CourseImg: CourseImg3,
        CourseTitle: 'NextJS Pro',
        OldPrice: '1.800.000đ',
        MainPrice: '1.200.000đ',
    },
    {
        CourseImg: CourseImg4,
        CourseTitle: 'NodeJS Pro',
        OldPrice: '2.500.000đ',
        MainPrice: '1.900.000đ',
    },
];

function ScrollList() {
    return (
        <div className={cx('vertical')}>
            <div>
                <div className={cx('heading-wrap')}>
                    <h2 className={cx('heading')}>
                        <span rel="noreferrer" target="_self">
                            Khóa học Pro
                            <span className={cx('label')}>mới</span>
                        </span>
                    </h2>
                </div>
            </div>
            <div className={cx('body')}>
                <section className={cx('row')}>
                    {ScrollListGroups.map((item, index) => (
                        <ScrollListGroup
                            key={index}
                            CourseImg={item.CourseImg}
                            CourseTitle={item.CourseTitle}
                            OldPrice={item.OldPrice}
                            MainPrice={item.MainPrice}
                        />
                    ))}
                </section>
            </div>
        </div>
    );
}

export default ScrollList;
