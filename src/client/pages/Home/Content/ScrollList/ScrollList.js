import classNames from 'classnames/bind';
import styles from './ScrollList.module.scss';


const cx = classNames.bind(styles);


function ScrollList({NameCourse, NewLabel, ScrollListGroup}) {
    return (
        <div className={cx('vertical')}>
            <div>
                <div className={cx('heading-wrap')}>
                    <h2 className={cx('heading')}>
                        <span rel="noreferrer" target="_self">                            
                            {NameCourse}
                            {NewLabel}
                        </span>
                    </h2>
                </div>
            </div>
            <div className={cx('body')}>
                <section className={cx('row')}>
                    {ScrollListGroup}
                </section>
            </div>
        </div>
    );
}

export default ScrollList;
