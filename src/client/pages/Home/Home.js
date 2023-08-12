import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slide from './Slide';
import Content from './Content';

const cx = classNames.bind(styles);
function Home() {
    return (
        <section className={cx('sidebar-wrapper')}>
            <Slide />
            <Content />
        </section>
    )
}

export default Home;
