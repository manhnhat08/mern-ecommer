import classNames from 'classnames/bind';
import styles from './Slide.module.scss';
import Slider from 'react-slick';

import slide1 from '~/client/assets/images/slider/slide1.png';
import slide2 from '~/client/assets/images/slider/slide2.png';
import slide3 from '~/client/assets/images/slider/slide3.png';
import slide4 from '~/client/assets/images/slider/slide4.png';
import slide5 from '~/client/assets/images/slider/slide5.png';
import SlideItem from './SlideItem';

const cx = classNames.bind(styles);
const SlideItems = [
    {
        heading     : "Learning English",
        desc        : "Dang Ngoc Manh Nhat 1111111",
        nameBtn     : 'Tìm hiểu thêm',
        href        : "/",
        slideImage  : slide1,
        styles      : 'linear-gradient(to right, rgb(104, 40, 250), rgb(255, 186, 164))'
        // styles      : 'linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%)'
    },
    {
        heading     : "Learning Math",
        desc        : "Dang Ngoc Manh Nhat 222222222",
        nameBtn     : 'Tìm hiểu thêm',
        href        : "/",
        slideImage  : slide2,
        styles      : 'linear-gradient(to right, rgb(40, 119, 250), rgb(103, 23, 205))'
        // styles      : 'linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%)'
    },
    {
        heading     : "Learning Physic",
        desc        : "Dang Ngoc Manh Nhat 33333333",
        nameBtn     : 'Tìm hiểu thêm',
        href        : "/",
        slideImage  : slide3,
        // styles      : 'linear-gradient(to right, rgb(118, 18, 255), rgb(5, 178, 255))'
        styles      : 'linear-gradient(to right, #ffecd2 0%, #fcb69f 51%, #ffecd2 100%)'
    },
    {
        heading     : "Learning Music",
        desc        : "Dang Ngoc Manh Nhat 444444",
        nameBtn     : 'Tìm hiểu thêm',
        href        : "/",
        slideImage  : slide4,
        styles      : 'linear-gradient(to right, rgb(254, 33, 94), rgb(255, 148, 2))'
        // styles      : 'linear-gradient(to right, #84fab0 0%, #8fd3f4 51%, #84fab0 100%)'
    },
    {
        heading     : "Learning chemistry",
        desc        : "Dang Ngoc Manh Nhat 5555555555",
        nameBtn     : 'Tìm hiểu thêm',
        href        : "/",
        slideImage  : slide5,
        styles      : 'linear-gradient(to right, rgb(0, 126, 254), rgb(6, 195, 254))'
        // styles      : 'linear-gradient(to right, #a1c4fd 0%, #c2e9fb 51%, #a1c4fd 100%)'
    }
]

function Slide() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1198,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1
              }
            }
          ]
    };

    return (
        <div className={cx('slide-show')}>
            <div className={cx('wrapper')}>
                <Slider {...settings}>
                    {SlideItems.map((item, index) => (
                    <SlideItem key={index}
                       heading={item.heading}
                       desc={item.desc}
                       nameBtn={item.nameBtn}
                       href={item.href}
                       slideImage={item.slideImage}
                       styles={item.styles}
                    />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Slide;
