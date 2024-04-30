import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import ScrollList from './ScrollList';
import ScrollListGroup from './ScrollList/ScrollListGroup';
import CourseImg1 from '~/client/assets/images/course/17.png';
import CourseImg2 from '~/client/assets/images/course/18.png';
import CourseImg3 from '~/client/assets/images/course/19.png';
import CourseImg4 from '~/client/assets/images/course/20.png';

import CourseImg5 from '~/client/assets/images/course/7.png';
import CourseImg6 from '~/client/assets/images/course/8.png';
import CourseImg7 from '~/client/assets/images/course/2.png';
import CourseImg8 from '~/client/assets/images/course/3.png';
import CourseImg9 from '~/client/assets/images/course/1.png';
import CourseImg10 from '~/client/assets/images/course/12.png';
import CourseImg11 from '~/client/assets/images/course/9.png';
import CourseImg12 from '~/client/assets/images/course/13.png';

import CourseImg13 from '~/client/assets/images/course/11.png';
import CourseImg14 from '~/client/assets/images/course/14.png';
import CourseImg15 from '~/client/assets/images/course/15.png';
import CourseImg16 from '~/client/assets/images/course/16.jpg';

const cx = classNames.bind(styles);

const ScrollListGroupsPro = [
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

const ScrollListGroupsFree = [
    {
        CourseImg: CourseImg5,
        CourseTitle: 'Kiến Thức Nhập Môn IT',
    },
    {
        CourseImg: CourseImg6,
        CourseTitle: 'Lập trình C++ cơ bản, nâng cao',
    },
    {
        CourseImg: CourseImg7,
        CourseTitle: 'HTML CSS từ Zero đến Hero',
    },
    {
        CourseImg: CourseImg8,
        CourseTitle: 'Responsive Với Grid System',
    },
    {
        CourseImg: CourseImg9,
        CourseTitle: 'Lập Trình JavaScript Cơ Bản',
    },
    {
        CourseImg: CourseImg10,
        CourseTitle: 'Lập Trình JavaScript Nâng Cao',
    },
    {
        CourseImg: CourseImg11,
        CourseTitle: 'Làm việc với Terminal & Ubuntu',
    },
    {
        CourseImg: CourseImg12,
        CourseTitle: 'Xây Dựng Website với ReactJS',
    },
];

const ScrollListGroupsTriend = [
    {
        CourseImg: CourseImg13,
        CourseTitle: 'Tổng hợp tài liệu tự học tiếng anh cơ bản.',
    },
    {
        CourseImg: CourseImg14,
        CourseTitle: 'App "Đừng Chạm Tay Lên Mặt"',
    },
    {
        CourseImg: CourseImg15,
        CourseTitle: 'Các nguồn tài nguyên hữu ích cho 1 front-end developer',
    },
    {
        CourseImg: CourseImg16,
        CourseTitle: 'Thời gian và Động lực',
    },
];

const ScrollLists = [
    {
        NameCourse: 'Khóa học Pro',
        NewLabel: <span className={cx('label')}>mới</span>,
        ScrollListGroup: ScrollListGroupsPro.map((item, index) => (
            <ScrollListGroup
                key={index}
                CourseImg={item.CourseImg}
                CourseTitle={item.CourseTitle}
                OldPrice={item.OldPrice}
                MainPrice={item.MainPrice}
            />
        )),
    },
    {
        NameCourse: 'Khóa học miễn phí',
        ScrollListGroup: ScrollListGroupsFree.map((item, index) => (
            <ScrollListGroup key={index} CourseImg={item.CourseImg} CourseTitle={item.CourseTitle} />
        )),
    },
    {
        NameCourse: 'Bài viết nổi bật',
        ScrollListGroup: ScrollListGroupsTriend.map((item, index) => (
            <ScrollListGroup key={index} CourseImg={item.CourseImg} CourseTitle={item.CourseTitle} />
        )),
    },
];

function Content() {
    return (
        <div className={cx('wrapper')}>
            {ScrollLists.map((item, index) => (
                <ScrollList
                    key={index}
                    NameCourse={item.NameCourse}
                    NewLabel={item.NewLabel}
                    ScrollListGroup={item.ScrollListGroup}
                />
            ))}
        </div>
    );
}

export default Content;
