import classNames from "classnames/bind";
import Header from "~/client/layouts/components/Header";
import Sidebar from "~/client/layouts/components/Sidebar";
import styles from './DefaultLayout.module.scss'
import Footer from "../components/Footer";

const cx = classNames.bind(styles)

function DefaultLayout({children}) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
      );
}

export default DefaultLayout;