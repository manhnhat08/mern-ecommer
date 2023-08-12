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
function Slide() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={cx('slide-show')}>
            <div className={cx('wrapper')}>
                <Slider {...settings}>
                    <SlideItem
                        heading="Learning English"
                        desc="Dang Ngoc Manh Nhat"
                        nameBtn='Tìm hiểu thêm'
                        href="/"
                        slideImage={slide1}
                    />

                    <SlideItem
                        heading="Learning Math"
                        desc="Dang Ngoc Manh Nhat"
                        nameBtn='Tìm hiểu thêm'
                        href="/"
                        slideImage={slide2}
                    />

                    <SlideItem
                        heading="Learning Physic"
                        desc="Dang Ngoc Manh Nhat"
                        nameBtn='Tìm hiểu thêm'
                        href="/"
                        slideImage={slide3}
                    />

                    <SlideItem
                        heading="Learning Music"
                        desc="Dang Ngoc Manh Nhat"
                        nameBtn='Tìm hiểu thêm'
                        href="/"
                        slideImage={slide4}
                    />

                    <SlideItem
                        heading="Learning chemistry"
                        desc="Dang Ngoc Manh Nhat"
                        nameBtn='Tìm hiểu thêm'
                        href="/"
                        slideImage={slide5}
                    />
                </Slider>
            </div>
        </div>
    );
}

export default Slide;
