import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import IndexModule from './IndexModule';

const cx = classNames.bind(styles);

function Footer() {

    return (
        <footer className={cx('wrapper')}>
            <IndexModule />
        </footer>
    );
}

export default Footer;