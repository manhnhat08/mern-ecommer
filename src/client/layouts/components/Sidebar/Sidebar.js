import classNames from "classnames/bind";
import styles from './Sidebar.module.scss'
import config from "~/config";
import Menu, {MenuItem} from "./Menu";
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/client/components/Popper';
import {PlusIcon, PenIcon, HomeIcon, RoadIcon, LightbulbIcon, NewspaperIcon} from "~/client/components/Icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function Sidebar() {    

    const renderPreview = (props) => {
        return(
            <div tabIndex='-1' {...props}>
                <PopperWrapper>
                    <div className={cx('preview')} >
                        <Link to={config.routes.upload} className={cx('module-link')}>  
                            <PenIcon />
                            <span>Viết Blog</span>
                        </Link>
                    </div>
                </PopperWrapper>
            </div>
        )
    }

    return <aside className={cx('wrapper')}>
        <div className={cx('sidebar-wrapper')}>
            <Tippy
                interactive
                delay={[800,0]}
                placement="bottom-end"
                render={renderPreview}
            >
                <div className={cx('createBlog-btn')}>
                    <PlusIcon className={cx('plus-icon')}/>
                </div>
            </Tippy>
            <Menu>
                <MenuItem title='Home' to={config.routes.home} icon={<HomeIcon />}/>
                <MenuItem title='Lộ trình' to={config.routes.learning} icon={<RoadIcon />}/>
                <MenuItem title='Học' to={config.routes.course} icon={<LightbulbIcon />}/>
                <MenuItem title='Blog' to={config.routes.blog} icon={<NewspaperIcon />}/>
            </Menu>
        </div>
    </aside>
}

export default Sidebar;